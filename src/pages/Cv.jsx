import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Cv() {
    return <>
        <div className="grid justify-center bg-gray-500 p-4 a4-page-container gap-8">
            <div className="a4-page bg-white border-blue-800 grid grid-cols-3">
                <div className="col-span-1"><Header /></div>
                <div className="col-span-2 p-12"><Projects skip={0} length={4} /></div>
            </div>
            <div className="a4-page bg-white p-12">
                <Projects skip={4} length={2} />
                <div className="grid grid-cols-2 pt-16 gap-6">
                    <Projects skip={6} length={2} />
                    <Projects skip={8} length={2} />
                </div>
            </div>
        </div>
    </>;
}

function Header() {
    return <div className="bg-gray-200 a4-height h-64 px-8 flex flex-col">
        <div className="py-8 self-center">
            <img src="/img/pontusasp.jpg" alt="Photo of Pontus Asp" className="rounded-full w-48 p-1 border border-blue-800 border-2" />
        </div>
        <div className="text-2xl font-bold">Pontus Asp</div>
        <div className="text-lg mt-2">Full-Stack Utvecklare</div>
        <div className="text-md mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-[1em] inline mr-2 size-5">
                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
            </svg>
            Kungshamra 74A
            <div className="ml-6">Solna, 170 70</div>
        </div>

        <div className="text-md mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-[1em] inline mr-2 size-5">
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </svg>
            pontus.asp@gmail.com</div>
        <div className="text-md mt-2">
            <img src="/img/github-mark.svg" alt="GitHub Logo" className="h-[1em] mr-2 inline grayscale" />
            pontusasp
        </div>
        <div className="text-md mt-2">
            <img src="/img/linkedin.svg" alt="GitHub Logo" className="h-[1em] mr-2 inline grayscale" />
            pontusasp
        </div>
        <div className="text-lg mt-12 font-bold border-b-2 border-gray-400">Utbildning</div>
        <ul className="list-disc">
            <li><div className="text-md mt-2">Civilingenjörsexamen i Informationsteknik 300 hp</div></li>
        </ul>
        <ul className="list-['-']">
            <li><div className="text-md ml-3 mt-2">Datalogimaster med inriktning Visualisering och Grafik 120 hp</div></li>
            <li><div className="text-md ml-3 mt-2">Teknologie kandidat i Informationsteknik 180 hp</div></li>
        </ul>
        <div className="text-lg mt-12 font-bold border-b-2 border-gray-400">Favoritspråk</div>
        <div className="flex items-start justify-between">
            <ol className="list-decimal list-inside w-24">
                <li>Rust</li>
                <li>Java</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>TypeScript</li>
            </ol>
            <img className="w-24 self-center" src="/img/pontusasp.se.qr.png" alt="QR to pontusasp.se" />
        </div>
    </div>;
}

function Projects({skip, length, skip_padding}) {
    const periods = getCvData();
    periods.reverse();

    const p = periods.slice(skip, skip + length).map(
        (params) => <Period {...params} />
    );

    return <div className="flex flex-col gap-12">{p}</div>;
}

function Period({ title, date, skills, stretch_skills, body, links }) {
    if (skills) {
        skills = skills.slice();
        for (let i = 0; i < skills.length - 1; i += 2) {
            skills.splice(i + 1, 0, <>&bull;</>);
        }
    }
    const child = <div className="flex flex-col gap-3">
        <div>
            <div className="flex justify-between gap-4 border-b border-gray-400 pb-1">
                <span>{title}</span>
                <span>{date}</span>
            </div>
        </div>
        <div className={"flex text-gray-600 " + ((skills?.length / 2 >= 4 && stretch_skills !== false) ? "justify-between" : "gap-2")}>{skills ? skills.map((skill) => <span>{skill}</span>) : undefined}</div>
        <span className="">{body}</span>
        {links ? links.map((link) => <span>{link}</span>) : undefined}
    </div>;
    return <>
        <CvCard child={child} />
    </>;
}

function CvCard({ child }) {
    return <div>
        {child}
    </div>
}


function getCvData() {
    const periods = [
        {
            title: "Made my first website",
            date: "2009",
            body: <>
                <p>
                    Out of curiosity, when I was 12 years old I taught myself how to create a website.
                    Although it was very basic it taught me how to write HTML and make use of a few elements.
                </p>
            </>,
        },
        {
            title: "Started writing batch scripts",
            date: "2009",
            body: <>
                <p>
                    I found out how to write batch scripts to make small text based games. I also made batch scripts to automate tasks such as organising files I had on my desktop into different folders based on their file type.
                </p>
            </>,
        },
        {
            title: "Flash games",
            date: "2010",
            body: <>
                <p>
                    At the time I had been playing around with Flash for a while to make short movies but I also knew it was possible to make games so I started researching how to make games in Flash.
                </p>
            </>,
        },
        {
            title: "Simple Java",
            date: "2011",
            body: <>
                <p>
                    At 14 I started to teach myself how to program in Java. I wrote a few basic programs that was console based and also made a few basic minecraft mods.
                </p>
            </>,
        },
        {
            title: "HTML/CSS",
            date: "2012",
            body: <>
                <p>
                    I learned more about HTML and more complex CSS when I became a member of a forum where you could customize your profile page using HTML and CSS where I was driven to create a very personal experience when you visited my profile.
                </p>
            </>,
        },
        {
            title: "Java",
            date: "2013",
            body: <>
                <p>
                    At 16 I was very excited that we were going to learn Java in school the coming semester.
                    I ended up watching and practicing my way through a 120 video tutorial playlist in just under two months and by the end I was able to make my own games using Java Swing.
                    At this point my interest for programming and IT went through the roof, I thought it was incredibly fun to make small games and programs and ended up starting a ton of small projects.
                </p>
            </>,
        },
        {
            title: "PHP",
            date: "2014",
            body: <>
                <p>
                    I learned PHP in school and thrived in class. My previous knowledge from Java and HTML/CSS gave me a great jumpstart, and with a great interest in programming I continued learning during my freetime.
                </p>
            </>,
        },
        /*{
            title: "Best Game 1986 (?)",
            date: "2014",
        },*/
        {
            title: "Nightmar (Projekt)",
            date: "2023",
            skills: ["C#", "Unity", "VR"],
            body: <>
                Nightmar är ett horror VR-spel utvecklat i Unity. Spelet utvecklades under en kurs på KTH av ett team på fem personer. Jag var även ansvarig för att utveckla spelets webbplats.
            </>,
        },
        {
            title: "Red Painter Man (Projekt)",
            date: "2021",
            skills: ["C#", "Unity"],
            body: <>
                The Red Painter är ett spel där du kan utforska en slumpmässigt genererad värld. När du kör längs vägarna hittar du lador som kan målas om och få sina tak rengjorda. Jag skapade spelet som en hyllning till min pappa, som driver ett måleriföretag, till hans 50-årsdag.
            </>,
        },
        {
            title: "Skattjakter",
            date: "2024, 2025",
            skills: ["Rust", "Bevy"],
            body: <>
                Under de tre senaste åren har jag utvecklat interaktiva puzzel/spel i födelsedagspresent åt min sambo, så att hon kan spela igenom spelen för att hitta ledtrådar för paket gömda i verkligheten. Det senaste utspelade sig i en 2D version av vår lägenhet.
            </>,
        },
        {
            title: "Fluid Simulation (Projekt)",
            date: "2021",
            skills: ["C++", "SFML"],
            body: <>
                Jag utvecklade ett projekt för kursen DH2323 Computer Graphics and Interaction på KTH. Det är en simulator för vätskedynamik baserad på Navier-Stokes-ekvationerna och en artikel av Jos Stam, utökad med stöd för statiska objekt som vätskan kan interagera med.                
            </>,
        },
        {
            title: "Retro 2D UF",
            date: "2015 - 2016",
            skills: ["Java", "libGDX", "Android", "Game Development"],
            body: <>
                Under en entreprenörskurs startade jag tillsammans med några vänner en liten spelstudio där vi utvecklade två spel som vi släppte på Google Play. Spelen hette <i>Overpopulation</i> och <i>Orbit – Infinite Space</i>. Jag var ansvarig för all programmering av <i>Overpopulation</i>. Tyvärr har spelen tagits bort från Play Store eftersom de inte har blivit uppdaterade på för länge.
            </>,
        },
        {
            title: <div className="align-bottom">Rödfärgarna Mellansverige AB</div>,
            date: <>
            <div className="text-right">2016 - 2017</div>
            <div>Deltid 2017 - 2024</div>
            </>,
            skills: ["PHP", "CSS", "HTML", "MySQL", "Docker", "Trello"],
            stretch_skills: false,
            body: <>
                Under min tid hos Rödfärgarna så utvecklade jag ett kundhanteringssystem för att underlätta vardagen med hanteringen av kundinformation, orderstatus, kundmöten etc. Tanken med systemet var att flytta så mycket av informationshanteringen som möjligt in i systemet från det tidigare arbetsflödet där olika system, excel och papper var inblandade.<br />
                Systemet blev en succé och används än idag. Majoriteten av utvecklingen skedde under de första åren, därefter började jag studera och arbetade mest med underhåll och buggfixar.
            </>,
        },
        {
            title: "Master Thesis: Tiled Hydraulic Erosion",
            date: "Mars 2023 - Feb 2024",
            skills: ["Rust", "Macroquad", "Egui"],
            body: <>
                Mitt masterarbete handlade om att få bort artefakter från ett rutnätsbaserat landskap där varje ruta har blivit eroderad separat. Jag skrev simuleringsmjukvaran för erosionen och för att samla statistik om olika lösningar i Rust.
            </>,
        },
        {
            title: "Skry (Konsultbolag)",
            date: "Februari 2024 - Nu",
            skills: ["Vue", "Ruby on Rails", "AWS Lambda", "TypeScript", "IaC"],
            body: <>
                Mellan uppdrag hos Skry så fick jag jobba på Skrys interna system som bl.a. hanterar tidsrapportering, generation av CVs, uppdragslistningar etc.
                Jag fick även träna på Infrastructure as Code med AWS Java CDK, och även att deploya python AWS lambdas.
            </>,
        },
        {
            title: "SAMI (Konsult via Skry)",
            date: "Mars 2024 - Juni 2024",
            skills: ["React", "React Native", "TypeScript", "Fastify", "Full-Stack"],
            body: <>
                Hos SAMI så jobbade jag med utvecklade av deras app som används för att hjälpa artister att få betalt för sin musik.
                Jag jobbade även på att lägga till nya funktioner till deras webbshop som riktade sig mot kunder (e.g. restauranger).
                Även om min främsta uppgift var att utveckla deras frontends så fick jag även i uppgift att utveckla deras backend.
            </>,
        },
        {
            title: "SEB (Konsult via Skry)",
            date: "Juni 2024 - Nu",
            skills: [".NET/C#", "IBM MQ", "Kafka", "PubSub", "Docker", "Kubernetes"],
            body: <>
                Integratör och Fullstack-Utvecklare hos SEB.
                Via min integratörsroll så har jag jobbat flitigt med ett gäng olika kommunikationsprotokoll för att koppla ihop olika system.
                Dessa integrationsapplikationer har skrivits i C#/.NET.
                Jag har även jobbat med React/TypeScript, och har satt upp CI/CD deploy pipelines till både GKE i GCP och till OpenShift.
            </>,
        },
    ];

    return periods;
}

export default Cv;
