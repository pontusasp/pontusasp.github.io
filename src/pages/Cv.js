import Card from "../components/Card";

function Cv() {
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
            title: "Retro 2D UF",
            date: "2015 - 2016",
            body: <div className="flex flex-col gap-2">
                <p>
                    During an entrepreneur course me and a few friends decided to create a small game studio where we made two games that we released to the Google Play store.
                    The games were called Overpopulation and Orbit - Infinite Space. The games have been removed from the Play Store due to not being updated, but you can find mirrors for both games here:
                </p>
                <div>
                    <p>
                        <a href="https://www.apkmonk.com/app/com.retro2d.orbit/" target="_blank" rel="noreferrer">https://www.apkmonk.com/app/com.retro2d.orbit/</a>
                    </p>
                    <p>
                        <a href="https://www.apkmonk.com/app/com.retro2d.overpopulation.android/" target="_blank" rel="noreferrer">https://www.apkmonk.com/app/com.retro2d.overpopulation.android/</a>
                    </p>
                </div>
            </div>,
        },
        {
            title: "Rödfärgarna Mellansverige AB",
            date: "2016 - 2017"
        },
        {
            title: "Rödfärgarna Mellansverige AB",
            date: "Part-time 2017 - 2024"
        },
    ];
    periods.reverse();
    
    const p = periods.map(
        (params) => <Period {...params} />
    );
    
    return <div className="flex flex-col gap-12 p-12">{p}</div>;
}

function Period({title, date, body, links}) {
    const child = <div className="flex flex-col gap-4">
        <div>
            <div className="flex justify-between gap-4 border-b-2 border-violet-900 pb-1">
                <span>{title}</span>
                <span>{date}</span>
            </div>
        </div>
        <span className="">{body}</span>
        {links ? links.map((link) => <span>{link}</span>) : undefined}
    </div>;
    return <>
        <Card child={child} />
    </>;
}

export default Cv;