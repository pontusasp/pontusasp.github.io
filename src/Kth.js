import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Kth() {
    return (
        <Switch>
            <Route path="/kth/dh2650/blog">
                <Dh2650Blog />
            </Route>
            <Route path="/kth">
                <CourseList />
            </Route>
        </Switch>
    );
}

function CourseList() {
    return (
        <div className="App-page">
            <p className="App-bigtext">
                KTH Royal Institute of Technology Courses
            </p>
            <p className="App-slim">
                <Link to="/kth/dh2650/blog">DH2650 Computer Game Design</Link>
            </p>
        </div>
    );
}

function BlogPost({title, body, date}) {
    return (
        <div style={{border: '1px solid white', borderRadius:'0.3em', marginBottom:'2em', padding: '1em', backgroundColor: '#eee', color:'#000', margin: '2em auto'}}>
            <p style={{textAlign:'left'}}>
                <h3>{title}</h3>
                <span>{body}</span>
                <hr/>
                <span className="text-i">{date}</span>
            </p>
        </div>
    );
}

function Blog({entries}) {
    let posts = [];
    for (let i = entries.length - 1; i >= 0; i--) {
        posts.push(<BlogPost key={i} title={entries[i].title} body={entries[i].body} date={entries[i].date} />);
    }
    return (
        <div>
            {posts}
        </div>
    );
}

function Dh2650Blog() {

    const blogEntries = [
        {
            title: <>Created this blog</>,
            body: <>I created this page to have someplace nice to write my blog posts for the DH2650 course. :)</>,
            date: <>2022-03-24</>,
        },
        {
            title: <>First meeting</>,
            body: <>Today I talked to the other group members for the first time. We had the meeting over discord and had a brainstorming session where we first individually came up with ideas we thought could be fun to make a game out of. After a while each of us went over our ideas and presented them to the others. We ended up merging a few ones for an initial idea of what we want our game to be. We decided we wanted to create a rougelike real time strategy game where you walk around as a hero (more powerful character) who has control over some minions which will be utilized to clear each level. We created a list of required features, features we hope to include and extra features that would be nice to implement if we have the time. For instance, one of the extra features would be to select different classes for your hero.</>,
            date: <>2022-03-24</>,
        },
        {
            title: <>Meeting #2</>,
            body: <>Today we tried to flush out the details of how we would get our game idea to work mechanically. The idea we decided last time was to make a rougelike real time strategy game where you played as a hero which also had control over some minions. We discussed many different ideas of how we could try to make it feasable for the player to control both the hero and the minions at the same time. We quickly settled on that we should assign the minions to groups, or that the player should be able to multi-select the minions and make their own groups which they command. The issue with this approach was that we were afraid this would interfere with our vision of making a pretty fast paced game where you need to dodge projectiles etc with your hero at the same time. Another idea which we discussed quite a lot was to place the minions before "starting the round", but this also had the issue of potentially slowing down the game a lot. After a lot of discussion back and forth we decided our initial idea would be very hard to go through with and end up with something fun to play, so we decided that we are going to have a new meeting tomorrow where we can try to come up with something new and try to get some fresh ideas until then.</>,
            date: <>2022-03-28</>
        },
        {
            title: <>Meeting #3</>,
            body: <>In todays meeting session we came up with a new idea for what kind of game we want to make. We had a few ideas, like a rougelike where you never attack your enemies but make them accidentally kill each other, but very quickly we started leaning towards a game with similarities to Hotline Miami. Our initial idea is to make a game where you using magical items have to kill enemies, similar to Hotline Miami. We discussed this idea for around two hours and tried to evolve it and decide where we wanna go with certain details, such as if we should have a health bar or if you should die immediatly on a hit. Or if you are limited by a character mana reserve, or if each weapon had a limited amount of non-refillable mana. Another idea was to use "Rage", i.e. you build up your energy by killing enemies, and if you stop then it will slowly decrease. What it seems like we have ended up on is a mix of using mana but also rage. The rage energy will however not limit your casting in any way but will instead either boost your stats, give you protection or an extra life if you have high enough energy. In the end of the meeting we decided to work on the presentation for friday on thursday the 31st of March.</>,
            date: <>2022-03-29</>
        },
    ];

    return (
        <div className="App-page" style={{display:'block'}}>
            <p className="App-bigtext">
                Computer Game Design Blog (Group 8)
            </p>
            <p className="App-slim" style={{margin: '0 auto'}}>
                <Blog entries={blogEntries} />
            </p>
        </div>
    );
}

export default Kth;
