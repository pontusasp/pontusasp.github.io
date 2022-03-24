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
