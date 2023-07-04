import React, {Component} from "react";
import * as d3 from "d3";
import './App.css';
import {useEffect, useState} from "react";


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

function InternetStatus() {

  const url = "http://pontusasp.asuscomm.com:41312/";

  const [loadingData, setLoadingData] = useState({value: 0, max: 0});
  const [data, setData] = useState([]);

  const fetchFile = async (filename, json=false) => {
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

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetchFile("files", true);
      console.log(`Response:`);
      console.log(response);
      const filenames = response.content.files ?? [];
      setLoadingData({value: 0, max: filenames.length});
      const filePromises = filenames.map(filename => fetchFile(`file/${filename}`));
      const files = await Promise.all(filePromises);
      files.sort((a, b) => b.filename.localeCompare(a.filename));
      return files;
    };

    fetchFiles().then((files) => {
      console.log(`Files:`);
      console.log(files);
      let sets = [];
      files.forEach((file, i) => {
        let dataset = [];
        const rawLines = file.content.split("\n");
        const rawDate = rawLines[1].split(": ")[1];
        const date = new Date(`${rawDate.substring(0, 10)} ${rawDate.substring(11)}`);
        const lines = rawLines.filter(line => line.length > 0 && isDataPoint(line));
        addDataPoint(dataset, lines[0]);
        for (let i = 1; i < lines.length; i++) {
          addDataPoint(dataset, lines[i]);
        }
        sets.push({date: date, filename: file.filename, dataset: dataset});
        console.log(`Loaded file ${i + 1} of ${files.length}`);
        setLoadingData({value: i + 1, max: files.length});
      });
      setData(sets);
    });
  }, []);

  const progressBar = (value, max) => {
    return <p>{value/max * 100}%</p>
  }

  const charts = (data) => {
    return <>
      {data.map(({date, filename, dataset}) => {
        return <>
          <div key={date} style={{border: '2px solid white', borderRadius: '1em', width: '80%', background: '#0005', margin: '0.5em', overflow: "hidden"}}>
            <p><a href={`${url}${filename}`} target={'_blank'}>Log {date.toLocaleDateString("sv-SE")} {date.toLocaleTimeString("sv-SE")}</a></p>
            <InternetChart id="internet_chart" data={dataset}/>
          </div>
        </>;
      })}
    </>;
  }

  const chartsLoader = ({value, max}) => {
    if (value < max) {
      return progressBar(value, max);
    }
    return charts(data);
  }

  return (
    <header className="App-header">
      <p>Internetstatus Kungshamra 74A lgh 1002</p>
      {chartsLoader(loadingData)}
    </header>
  );
}

export default InternetStatus;

