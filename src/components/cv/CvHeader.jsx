function CvHeader({ header }) {
    return (
        <div className="bg-gray-200 a4-height h-64 px-8 flex flex-col">
            <div className="py-8 self-center">
                <img src={header.photo} alt={`Photo of ${header.name}`} className="rounded-full w-48 p-1 border border-blue-800 border-2" />
            </div>
            <div className="text-2xl font-bold">{header.name}</div>
            <div className="text-lg mt-2">{header.title}</div>
            <div className="text-md mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-[1em] w-[1em] inline mr-2">
                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                </svg>
                {header.contact.address[0]}
                <div className="ml-6">{header.contact.address[1]}</div>
            </div>
            <div className="text-md mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-[1em] w-[1em] inline mr-2">
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                {header.contact.email}
            </div>
            <div className="text-md mt-2">
                <a href={`https://github.com/${header.contact.github}/`} target="_blank">
                    <img src="/img/github-mark.svg" alt="GitHub Logo" className="h-[1em] mr-2 inline grayscale" />
                    {header.contact.github}
                </a>
            </div>
            <div className="text-md mt-2">
                <a href={`https://linkedin.com/in/${header.contact.linkedin}/`} target="_blank">
                    <img src="/img/linkedin.svg" alt="LinkedIn Logo" className="h-[1em] mr-2 inline grayscale" />
                    {header.contact.linkedin}
                </a>
            </div>
            <div className="text-lg mt-12 font-bold border-b-2 border-gray-400">{header.education.heading}</div>
            <ul className="list-disc">
                {header.education.degrees.filter(d => d.level === "primary").map((d, i) => (
                    <li key={i}><div className="text-md mt-2">{d.name}</div></li>
                ))}
            </ul>
            <ul className="list-['-']">
                {header.education.degrees.filter(d => d.level === "sub").map((d, i) => (
                    <li key={i}><div className="text-md ml-3 mt-2">{d.name}</div></li>
                ))}
            </ul>
            <div className="text-lg mt-12 font-bold border-b-2 border-gray-400">{header.languages.heading}</div>
            <ol className="list-decimal list-inside w-24">
                {header.languages.items.map((lang, i) => <li key={i}>{lang}</li>)}
            </ol>
            <a href={header.qr.url} target="_blank">
                <img className="w-24 mt-6 self-start" src={header.qr.image} alt={`QR to ${header.qr.url}`} />
            </a>
        </div>
    );
}

export default CvHeader;
