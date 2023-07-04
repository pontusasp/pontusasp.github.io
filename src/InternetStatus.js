import { Switch, Route, Link, useParams } from "react-router-dom";
import React, {Component} from "react";
import * as d3 from "d3";
import './App.css';
import {useEffect, useState} from "react";

const url = "http://pontusasp.asuscomm.com:41312/";

function InternetChart({id, data}) {
  const margin = {top: 0, right: 0, bottom: 0, left: 0};
  const width = 1000 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  const color = "steelblue";

  const yMinValue = 0;
  // const yMaxValue = d3.max(data, (d) => d.time);
  const yMaxValue = 16;

  const getX = d3
          .scaleLinear()
          .domain(d3.extent(data, (d) => d.sequence)) // fix here
          .range([0, width]);

  const getY = d3
          .scaleLinear()
          .domain([yMinValue, yMaxValue])
          .range([height, 0]);

  // const getXAxis = (ref) => {
  //     const xAxis = d3.axisBottom(getX);
  //     // d3.select(ref).call(xAxis.tickFormat(d3.timeFormat("%M")));
  //     d3.select(ref).call(xAxis.tickFormat(d3.timeFormat("%M")).tickValues(data.map((d) => d.sequence)));
  // };
  //
  // const getYAxis = (ref) => {
  //     const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
  //     d3.select(ref).call(yAxis);
  // }

  // const linePath = d3
  //         .line()
  //         .x((d) => getX(d.sequence))
  //         .y((d) => getY(d.time))
  //         .curve(d3.curveMonotoneX)(data);

  const areaPath = d3
          .area()
          .x((d) => getX(d.sequence))
          .y0((d) => getY(d.time))
          .y1(() => getY(yMinValue - 1))
          .curve(d3.curveMonotoneX)(data);

  // const downtime = data.filter((d) => !d.connected);
  const downtimeAreaPath = d3
          .area()
          .x((d) => getX(d.sequence))
          .y0((d) => getY(d.connected ? yMinValue : yMaxValue))
          .y1(() => getY(yMinValue - 1))
          .curve(d3.curveMonotoneX)(data);

  return <>
      <svg
          id={id}
          viewBox={`0 0 ${width} ${height}`}
      >
          {/*<g*/}
          {/*    className="internet-chart-axis"*/}
          {/*    ref={getYAxis}*/}
          {/*/>*/}
          {/*<g*/}
          {/*    className="internet-chart-axis internet-chart-xaxis"*/}
          {/*    ref={getXAxis}*/}
          {/*    transform={`translate(0, ${height})`}*/}
          {/*/>*/}

          <path fill={color} d={areaPath} />
          <path fill={"red"} d={downtimeAreaPath} opacity={0.3}/>
          {/*<path strokeWidth={1} fill={"none"} stroke={color} d={linePath} />*/}

      </svg>
  </>;
}

function isDataPoint(line) {
  return line.startsWith("64 bytes from") || line.startsWith("From");
}

function isFailure(line) {
  return line.startsWith("From");
}

function decodeFailure(list, line) {
  const parts = line.split(" ");
  let icmp_seq = parts[2];
  if (!icmp_seq.includes("=")) {
      icmp_seq = parts[3];
  }
  let seq = parseInt(icmp_seq.split("=")[1]);
  if (isNaN(seq)) {
    console.error(`Failed to parse sequence number from line: ${line}`);
    seq = 0;
  }
  const time = 0.0;

  return {connected: false, sequence: seq, time: time, message: line};
}

function decodeDataPoint(list, line) {
  const parts = line.split(" ");
  let seq = parseInt(parts[5].split("=")[1]);
  let time = parseFloat(parts[7].split("=")[1]);
  if (isNaN(seq)) {
    console.error(`Failed to parse sequence number from line: ${line}`);
    seq = 0;
  }
  if (isNaN(time)) {
    console.error(`Failed to parse time from line: ${line}`);
    time = 0.0;
  }

  return {connected: true, sequence: seq, time: time, message: line};
}

function emptyDataPoint(list) {
    return {connected: false, sequence: list.at(-1).sequence + 1, time: 0.0, message: ""};
}

function addDataPoint(list, line) {
  let dataPoint;
  if (isFailure(line)) {
    dataPoint = decodeFailure(list, line);
  } else {
    dataPoint = decodeDataPoint(list, line);
  }
  let lastSequence = (list.at(-1) ?? {sequence: 0}).sequence;
  if (dataPoint.sequence < lastSequence) {
    dataPoint.sequence = lastSequence + 1;
  }
  if (dataPoint.sequence > lastSequence + 1) {
    for (let i = lastSequence + 1; i < dataPoint.sequence; i++) {
      list.push(emptyDataPoint(list));
    }
  }
  list.push(dataPoint);
}

const fetchFile = async (url, filename, json=false) => {
  try {
    const address = url + filename;
    const response = await fetch(address);
    const content = await response.text();
    if (json) {
      return {filename: filename, content: JSON.parse(content)};
    }
    return {filename: filename, content: content};
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error);
    return "";
  }
};

const fetchFiles = async (filenames) => {
  const filePromises = filenames.map(filename => fetchFile(url, `file/${filename}`));
  const files = await Promise.all(filePromises);
  files.sort((a, b) => b.filename.localeCompare(a.filename));
  return files;
};

function processFile(file) {
  let dataset = [];
  const rawLines = file.content.split("\n");
  const rawDate = rawLines[1].split(": ")[1];
  const date = new Date(`${rawDate.substring(0, 10)} ${rawDate.substring(11)}`);
  const lines = rawLines.filter(line => line.length > 0 && isDataPoint(line));
  addDataPoint(dataset, lines[0]);
  for (let i = 1; i < lines.length; i++) {
    addDataPoint(dataset, lines[i]);
  }
  return {date: date, filename: file.filename, dataset: dataset};
}

const InternetGraph = ({date, filename, dataset}) => {
  return <>
    <div key={date} style={{border: '2px solid white', borderRadius: '1em', width: '80%', background: '#0005', margin: '0.5em', overflow: "hidden"}}>
      <p>
        <Link to={`/services/internetstatus/log/${filename}`}>Log {date.toLocaleDateString("sv-SE")} {date.toLocaleTimeString("sv-SE")}</Link>
        <span> | </span>
        <a href={`${url}${filename}`} target={'_blank'}>Dataset</a>
      </p>
      <InternetChart id="internet_chart" data={dataset}/>
    </div>
  </>;
};


function InternetStatusDisplayFull({files}) {

  const [loadingData, setLoadingData] = useState({value: 0, max: 0});
  const [data, setData] = useState([]);

  useEffect(() => {
    let sets = [];
    files.forEach((file, i) => {
      const set = processFile(file);
      sets.push(set);
      setLoadingData({value: i + 1, max: files.length});
    });
    setData(sets);
  }, []);

  const progressBar = (value, max) => {
    return <p>{value/max * 100}%</p>
  }

  const charts = (data) => {
    return <>
      <Link to={"/services/internetstatus"}>Tillbaka till listan</Link>
      {data.map(({date, filename, dataset}) => <InternetGraph key={date} date={date} filename={filename} dataset={dataset} />)}
    </>;
  }

  const chartsLoader = ({value, max}) => {
    if (value < max) {
      return progressBar(value, max);
    }
    return charts(data);
  }

  return <>
      {chartsLoader(loadingData)}
  </>;
}

function InternetStatusList({filenames, ready}) {
  const items = (files) => files.map((file) => {
    return <li key={file} style={{flex: '0 0 auto'}}>
      {ready? 
      <Link to={`/services/internetstatus/log/${file}`}>
        {file}
      </Link>
      : <span>{file}</span>}
    </li>;
  });

  return <>
    {ready? <Link to="/services/internetstatus/all">Visa alla loggar</Link> : <span>Visa alla loggar</span>}
    <span>(kan ta några sekunder att ladda)</span>
    <ol style={{textAlign: 'left', display: 'flex', flexDirection: 'column-reverse'}}>
      {items(filenames)}
    </ol>
  </>;
}

function InternetStatusLog({files}) {
  const { log } = useParams();

  const file = files.filter((f) => f.filename.includes(log))[0];

  const [data, setData] = useState([]);

  useEffect(() => {
    const set = processFile(file);
    setData([set]);
  }, []);

  const charts = (data) => {
    return <>
      <Link to={"/services/internetstatus"}>Tillbaka till listan</Link>
      {data.map(({date, filename, dataset}) => <InternetGraph key={date} date={date} filename={filename} dataset={dataset} />)}
    </>;
  }

  return <>
      {charts(data)}
  </>;
}

function InternetStatus() {

  const [filenames, setFilenames] = useState([]);
  const [files, setFiles] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchFile(url, "files", true).then((response) => {
      const list = response.content.files;
      list.sort((a, b) => a.localeCompare(b));
      fetchFiles(list).then((fl) => {
        setFiles(fl);
      });
      setFilenames(list);
    });
  }, []);

  useEffect(() => {
    const status = filenames.length > 0 && filenames.length === files.length;
    if (ready !== status) {
      setReady(status);
    }
  }, [filenames, files]);

  const Loading = () => <span>Laddar ner loggar...</span>;
  
  return <>
    <header className="App-header">
      <p>Internetstatus Kungshamra 74A lgh 1002</p>
      <Switch>
        <Route path="/services/internetstatus/all">
          {ready? <InternetStatusDisplayFull files={files} /> : <Loading />}
        </Route>
        <Route path="/services/internetstatus/log/:log">
          {ready? <InternetStatusLog files={files} /> : <Loading />}
        </Route>
        <Route path="/services/internetstatus">
          {ready? <></> : <Loading />}
          <InternetStatusList filenames={filenames} ready={ready} />
        </Route>
      </Switch>
    </header>
  </>;
}

export default InternetStatus;

