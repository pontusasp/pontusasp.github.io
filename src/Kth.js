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
        {
            title: <>Meeting #4 - Game Pitch</>,
            body: <><p>In todays meeting we fleshed out our game design idea while working on our presentation for our elevator (game) pitch. We also settled on a first name that I came up with during the last meeting, <i>Wanderful</i>. The name comes from the game being themed around magic (i.e. wands) and that it fit nice with wonderful. So far is just thought of as a temporary name but we will see if it sticks or not. I also made a quick first draft of a logo for our game which we will show during our presentation.</p>
            <div style={{textAlign:'center'}}>
            <h4>Wanderful</h4>
            <img src="/img/logo_1.png"/>
            </div>
            <p>
            When making the presentation we discussed how we would pitch our game in the best way and identified more exactly what each group members vision of the final game was. What we ended up with was 4 points:
            <ul className="nts">
                <li>High intensity</li>
                <li>Customization</li>
                <li>Easy to learn, hard to master</li>
                <li>Unique runs (randomization)</li>
            </ul>
            
            For our defining factors we wrote:
            <ul className="nts">
                <li>2d Top-down shooter</li>
                <li>Fight with powerful magic!</li>
                <li>Hundreds of combinations of equipment!</li>
                <li>Infinite replayability!</li>
            </ul>
            Some of these might not be very realistic for our demo but would be if we had time for a full game, one of the not very realistic things is the hundreds of combinations of equipment. Keyword here is <i>combinations</i>, but we still don't think we will have that kind of time to spend.

            For our unique selling points we thought that for the type of game we want to make we have a relatively unexplored setting for our game. The setting is that we are a magician that is trying to escape a castle, prison or (evil) school while having to keep the pace up enough to not get caught by the warden. Our vision of our game is somewhat similar to hotline miami but with magic instead and also with the mana and rage system. What also differs is the fact that you have someone chasing you at all points. So the list we made for this is as following:
            <ul className="nts ">
                <li>Unexplored setting for this style of game</li>
                <li>Engaging skill-based magic system</li>
                <li>Rage system that rewards good player performance</li>
            </ul>
            Finally we had our slide that was summary and business case. Here we will bring up competitors, such as hotline miami, maybe wizard of legend and other games. But we also discussed what makes our game unique, and we think what makes our game unique and also fun is the fact that the game should be easy to get into, but hard to master. So we want to give the player a sense of progression by becoming both a better player and also by finding other magical items they can use. We also want to make the game so that it can  pose a challenge hard enough to be satisfactory to finish but not so easy it easily bores the player. This itself was not what will make our game unique but probably most of all the mix between hotline miami, the magic system and also the rage system, together with the warden that is constantly on the hunt for you that you don't want to be caught by. 
            </p>
            <p>We scheduled our next meeting for monday the 4th of April where we will debrief how the presentation went, feedback from the presentation and what to do next etc.</p></>,
            date: <>2022-03-31</>
        },
        {
            title: <>Meeting #5 - Preparations</>,
            body: <>
                <p>
                    In this meeting we started off with discussing the feedback we got from the presentation, which mostly consisted of us potentially being overambitious. This wasn't totally unexpected though since we made our pitch from what we want our game to finally be, and maybe not what we can present at the end of the course. I would have liked a bit less ambitious presentation but that's just how it ended up being.
                </p>
                <p>
                    Later we discussed what we want to try to get ready until the first demo on Friday. After deciding this we divided the responsibilities after also checking what we all felt comfortable working with. Even though I felt comfortable with most coding in the project, I ended up with the task of drawing some pixelart we couldn't easily find on the Unity Asset Store since I was one of the few that said I felt ok with drawing. So that is what I will be working on this week mostly, and maybe implementing it in Unity for the character. We also decided on which Unity version we will use.
                </p>
                <p>
                    Our next meeting is planned for Thursday (7th of April) where we will put together all our work and decide on a version control system.
                </p>
            </>,
            date: <>2022-04-04</>,
        },
        {
            title: <>First Character Pixelart</>,
            body: <>
                <p>
                    This week I have been playing around a bit with pixelart and tried to learn how to do some simple animation for them. It took a bit longer than what I would believe from how they turned out but I feel pretty happy with them at least! The walking animation can be mixed together with the spellcasting animations so they can be played independently depending on what the character is currently doing ingame. Here is the result!
                </p>
                <div style={{textAlign:'center'}}>
                    <img style={{width:'30%'}} src="/img/blog/dh2650/first_character_running.gif"/>
                    <img style={{width:'30%'}} src="/img/blog/dh2650/first_character_basic_spell.gif"/>
                    <img style={{width:'30%'}} src="/img/blog/dh2650/first_character_wand_spell.gif"/>
                </div>
            </>,
            date: <>2022-04-06</>
        },
        {
            title: <>Meeting #6 - Finalizing the demo</>,
            body: <>
                <p>
                    In this meeting we combined what we have worked on into one single project and also set up a git repository (... which we should probably have done from the very start lol).
                    Here are two screenshots of what we have so far, the screenshots does not do the game justice since I didn't manage to get one that captured how the projectiles looked like.
                </p>
                <div style={{textAlign:'center'}}>
                    <img style={{width:'49%'}} src="/img/blog/dh2650/demo1_2.png"/>
                    <div style={{width:'1%', display:'inline-block'}}></div>
                    <img style={{width:'49%'}} src="/img/blog/dh2650/demo1_1.png"/>
                </div>
            </>,
            date: <>2022-04-07</>
        },
        /*{
            title: <>Busy working</>,
            body: <>
                <p>
                    I have been a bit busy with catching up with other courses and also with working on this course. So the website has not been continuously updated. As of writing this it is the 19th of May, so I will be producing blog posts about what I did each week and what we spent our time in each meeting talking about. I am checking against meeting notes, git and our group chat to make sure I have the timeline correct. So the date below is the relevant date for each blog post rather than the date of posting. This is true up until 2022-05-19.
                </p>
            </>,
            date: <>2022-04-12</>,
        },*/
        {
            title: <>First Demo</>,
            body: <>
                <p>
                    The first demo went good. We got a few comments, such as that the wand does not point in the same direction as you shoot (it is sligtly at an angle), that the character was a bit too fast and that the camera panning could be improved.
                </p>
            </>,
            date: <>2022-04-08</>,
        },


        // Week 15
        {
            title: <>Meeting #7</>,
            body: <>
                <p>
                    In this meeting we set up the objectives for what we should do this week which was beginning our game design document and work on the business aspect of our game. We also touched upon the critique we got during our demo and spoke about what got brought up and what we could fix.
                    We also discussed the redesign of the wizard to make it look a bit more straight when firing the spells, but we decided to not change it for now but prioritize making new enemies instead.
                    After this I taught the others how to use git for merging, branching, rebasing, how to create pull requests and handle merge conflicts etc since we needed to do these things for our Unity project now that we are using git.
                </p>
            </>,
            date: <>2022-04-12</>,
        },// Same doc for #7 and #8
        { // https://docs.google.com/document/d/1R7QbLIJgMaEQbY_PDRLt-M6EXoDrAfKE0DDCwecVSGU/edit
            // #8: Also spoke about competitors: https://docs.google.com/spreadsheets/d/10ecp_EoYoXj5km-bABbsz_JPKJizqSWmN1mtMPTnpTQ/edit#gid=0
            title: <>Meeting #8</>,
            body: <>
                <p>
                    Today we discussed the different potential competitors we could have if we released our game and worked a bit on the game design document. We wrote about our business plan, target group, technical platforms and also made a MoSCoW prioritization plan.
                    We also made a rough timeplan for what we want to do in the coming two weeks. Which among others included extending the spell system, adding a mana system, and the ability to switch spells.
                </p>
            </>,
            date: <>2022-04-13</>,
        },
        {
            title: <>Status Update #1</>,
            body: <>
                <p>
                    Today me and Baptiste covered presenting the first status update physically. I felt like it went pretty good, we didn't get too many comments but I am happy nonetheless.
                </p>
            </>,
            date: <>2022-04-14</>,
        },


        // Week 17
        {   // https://docs.google.com/forms/d/e/1FAIpQLSeBExTkRsiz2FArJ8kWCMmZ9pMx5lL0LR7O3UaludxpZGycrg/viewform
            // https://docs.google.com/document/d/1fYZWBN0cRd1-meoDw4vjWaYuZcNuS8m0LtA2gPgfHd8/edit
            // https://docs.google.com/document/d/1FiFeIAQExy5aSUww27JG_aSLVLUH-01fmaQCkYZAUiU/edit
            title: <>Meeting #9</>, // meeting 10 according to doc???
            body: <>
                <p>
                    * pixel art websites (only little, majority next time)
                    * git support
                </p>
            </>,
            date: <>2022-04-25</>,
        },

        // Week 18
        {
            title: <>Meeting #10</>,
            body: <>
                <p>
                    * assets
                    * pixel art
                    * guiding with git merges
                    * discuss having meeting tomorrow to merge work
                </p>
            </>,
            date: <>2022-05-03</>,
        },
        {   // https://docs.google.com/document/d/1FiFeIAQExy5aSUww27JG_aSLVLUH-01fmaQCkYZAUiU/edit#
            title: <>Meeting #11</>,
            body: <>
                <p>
                    * Absent
                </p>
            </>,
            date: <>2022-05-04</>,
        },

        // Week 19
        {   // https://docs.google.com/document/d/1FiFeIAQExy5aSUww27JG_aSLVLUH-01fmaQCkYZAUiU/edit#
            title: <>Meeting #12</>,
            body: <>
                <p>
                    * Music
                    
                </p>
            </>,
            date: <>2022-05-10</>,
        },
        {   // https://docs.google.com/document/d/1fYZWBN0cRd1-meoDw4vjWaYuZcNuS8m0LtA2gPgfHd8/edit?usp=sharing
            title: <>Meeting #13</>,
            body: <>
                <p>
                    
                </p>
            </>,
            date: <>2022-05-13</>,
        },
        {
            title: <>Mutant texture + laser</>,
            body: <>
                <p>

                </p>
            </>,
            date: <>2022-05-14</>,
        },
        {
            title: <>Meeting #14</>,
            body: <>
                <p>
                    * git merges
                    
                </p>
            </>,
            date: <>2022-05-15</>,
        },

        // Week 20
        {
            title: <>Presentation</>,
            /*
            Valaras — 05/16/2022
            My notes for today
            Pop UP yo inform about the army you are equipping

            Why do the mutants traverse the walls?

            Ray is bad
            Bug lv 3
            R rather shift to advance the view

            Feedback when you have an enemy

            "Very good difficulty"

            "Music is really Nice"

            "The difficulty is what makes it interesting"

            Change the UI because the numbers are moches

            Too much mana for the player (my observation : only one player ran out of mana after spamming the most destructive spell he had)
            Fireball by the side

            Blink does not pass through the wall

            =====================
            
            David Å — 05/16/2022
            Feedback for the exit (especially the hub level - several people wandered about for 30-60s before realizing)
            UI to show what spells are equipped
            Prompt to show what spell you are about to pick up - both visually around the wand itself, and maybe a tolltip
            Health/mana bars (!)
            Feedback on speed boost spell (and healing spell presumably)
            Keybinds are unintuitive - a lot of players also pressed R instinctively even when alive; picking up spells isn't super intuitive, and spacebar being a third spell is likewise not intuitive


            Balancing work (some spells are too strong for sure)
            Aggro parameters (some spells might be louder, and spells flying by enemies should likely aggro them)
            Game plays better in tighter areas - might want to adjust corridors in level 1 and 3
            Self-damage on explosion spells?

            Enemies sometimes gets stuck in navmesh and always target the center of the player hitbox
            In some places the player can break navmesh LOS by hugging a wall
            Some walls can be passed through
            */
            body: <>
                <p>

                </p>
            </>,
            date: <>2022-05-16</>,
        },
        {
            title: <>Meeting #15</>,
            body: <>
                <p>
                    * preparations for final presentation
                </p>
            </>,
            date: <>2022-05-20</>,
        },
        {
            title: <>Meeting #16</>,
            body: <>
                <p>
                    * kept working on final presentation
                </p>
            </>,
            date: <>2022-05-22</>,
        },

        // Week 21
        {
            title: <></>,
            body: <>
                <p>

                </p>
            </>,
            date: <>2022-0</>,
        },
        {
            title: <></>,
            body: <>
                <p>

                </p>
            </>,
            date: <>2022-0</>,
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
