const blogEntries = [
  {
    title: <>Created this blog</>,
    body: (
      <>
        I created this page to have someplace nice to write my blog posts for
        the DH2650 course. :)
      </>
    ),
    date: <>2022-03-24</>,
  },
  {
    title: <>First meeting</>,
    body: (
      <>
        Today I talked to the other group members for the first time. We had the
        meeting over discord and had a brainstorming session where we first
        individually came up with ideas we thought could be fun to make a game
        out of. After a while each of us went over our ideas and presented them
        to the others. We ended up merging a few ones for an initial idea of
        what we want our game to be. We decided we wanted to create a rougelike
        real time strategy game where you walk around as a hero (more powerful
        character) who has control over some minions which will be utilized to
        clear each level. We created a list of required features, features we
        hope to include and extra features that would be nice to implement if we
        have the time. For instance, one of the extra features would be to
        select different classes for your hero.
      </>
    ),
    date: <>2022-03-24</>,
  },
  {
    title: <>Meeting #2</>,
    body: (
      <>
        Today we tried to flush out the details of how we would get our game
        idea to work mechanically. The idea we decided last time was to make a
        rougelike real time strategy game where you played as a hero which also
        had control over some minions. We discussed many different ideas of how
        we could try to make it feasable for the player to control both the hero
        and the minions at the same time. We quickly settled on that we should
        assign the minions to groups, or that the player should be able to
        multi-select the minions and make their own groups which they command.
        The issue with this approach was that we were afraid this would
        interfere with our vision of making a pretty fast paced game where you
        need to dodge projectiles etc with your hero at the same time. Another
        idea which we discussed quite a lot was to place the minions before
        "starting the round", but this also had the issue of potentially slowing
        down the game a lot. After a lot of discussion back and forth we decided
        our initial idea would be very hard to go through with and end up with
        something fun to play, so we decided that we are going to have a new
        meeting tomorrow where we can try to come up with something new and try
        to get some fresh ideas until then.
      </>
    ),
    date: <>2022-03-28</>,
  },
  {
    title: <>Meeting #3</>,
    body: (
      <>
        In todays meeting session we came up with a new idea for what kind of
        game we want to make. We had a few ideas, like a rougelike where you
        never attack your enemies but make them accidentally kill each other,
        but very quickly we started leaning towards a game with similarities to
        Hotline Miami. Our initial idea is to make a game where you using
        magical items have to kill enemies, similar to Hotline Miami. We
        discussed this idea for around two hours and tried to evolve it and
        decide where we wanna go with certain details, such as if we should have
        a health bar or if you should die immediatly on a hit. Or if you are
        limited by a character mana reserve, or if each weapon had a limited
        amount of non-refillable mana. Another idea was to use "Rage", i.e. you
        build up your energy by killing enemies, and if you stop then it will
        slowly decrease. What it seems like we have ended up on is a mix of
        using mana but also rage. The rage energy will however not limit your
        casting in any way but will instead either boost your stats, give you
        protection or an extra life if you have high enough energy. In the end
        of the meeting we decided to work on the presentation for friday on
        thursday the 31st of March.
      </>
    ),
    date: <>2022-03-29</>,
  },
  {
    title: <>Meeting #4 - Game Pitch</>,
    body: (
      <>
        <p>
          In todays meeting we fleshed out our game design idea while working on
          our presentation for our elevator (game) pitch. We also settled on a
          first name that I came up with during the last meeting,{" "}
          <i>Wanderful</i>. The name comes from the game being themed around
          magic (i.e. wands) and that it fit nice with wonderful. So far is just
          thought of as a temporary name but we will see if it sticks or not. I
          also made a quick first draft of a logo for our game which we will
          show during our presentation.
        </p>
        <div className={"flex flex-col items-center gap-4"}>
          <h4 className={"font-bold"}>Wanderful</h4>
          <img src="/img/wanderful-icon.png" />
        </div>
        <p>
          When making the presentation we discussed how we would pitch our game
          in the best way and identified more exactly what each group members
          vision of the final game was. What we ended up with was 4 points:
          <ul className={"list-disc ml-8"}>
            <li>High intensity</li>
            <li>Customization</li>
            <li>Easy to learn, hard to master</li>
            <li>Unique runs (randomization)</li>
          </ul>
          For our defining factors we wrote:
          <ul className={"list-disc ml-8"}>
            <li>2d Top-down shooter</li>
            <li>Fight with powerful magic!</li>
            <li>Hundreds of combinations of equipment!</li>
            <li>Infinite replayability!</li>
          </ul>
          Some of these might not be very realistic for our demo but would be if
          we had time for a full game, one of the not very realistic things is
          the hundreds of combinations of equipment. Keyword here is{" "}
          <i>combinations</i>, but we still don't think we will have that kind
          of time to spend. For our unique selling points we thought that for
          the type of game we want to make we have a relatively unexplored
          setting for our game. The setting is that we are a magician that is
          trying to escape a castle, prison or (evil) school while having to
          keep the pace up enough to not get caught by the warden. Our vision of
          our game is somewhat similar to hotline miami but with magic instead
          and also with the mana and rage system. What also differs is the fact
          that you have someone chasing you at all points. So the list we made
          for this is as following:
          <ul className={"list-disc ml-8"}>
            <li>Unexplored setting for this style of game</li>
            <li>Engaging skill-based magic system</li>
            <li>Rage system that rewards good player performance</li>
          </ul>
          Finally we had our slide that was summary and business case. Here we
          will bring up competitors, such as hotline miami, maybe wizard of
          legend and other games. But we also discussed what makes our game
          unique, and we think what makes our game unique and also fun is the
          fact that the game should be easy to get into, but hard to master. So
          we want to give the player a sense of progression by becoming both a
          better player and also by finding other magical items they can use. We
          also want to make the game so that it can pose a challenge hard enough
          to be satisfactory to finish but not so easy it easily bores the
          player. This itself was not what will make our game unique but
          probably most of all the mix between hotline miami, the magic system
          and also the rage system, together with the warden that is constantly
          on the hunt for you that you don't want to be caught by.
        </p>
        <p>
          We scheduled our next meeting for monday the 4th of April where we
          will debrief how the presentation went, feedback from the presentation
          and what to do next etc.
        </p>
      </>
    ),
    date: <>2022-03-31</>,
  },
  {
    title: <>Meeting #5 - Preparations</>,
    body: (
      <>
        <p>
          In this meeting we started off with discussing the feedback we got
          from the presentation, which mostly consisted of us potentially being
          overambitious. This wasn't totally unexpected though since we made our
          pitch from what we want our game to finally be, and maybe not what we
          can present at the end of the course. I would have liked a bit less
          ambitious presentation but that's just how it ended up being.
        </p>
        <p>
          Later we discussed what we want to try to get ready until the first
          demo on Friday. After deciding this we divided the responsibilities
          after also checking what we all felt comfortable working with. Even
          though I felt comfortable with most coding in the project, I ended up
          with the task of drawing some pixelart we couldn't easily find on the
          Unity Asset Store since I was one of the few that said I felt ok with
          drawing. So that is what I will be working on this week mostly, and
          maybe implementing it in Unity for the character. We also decided on
          which Unity version we will use.
        </p>
        <p>
          Our next meeting is planned for Thursday (7th of April) where we will
          put together all our work and decide on a version control system.
        </p>
      </>
    ),
    date: <>2022-04-04</>,
  },
  {
    title: <>First Character Pixelart</>,
    body: (
      <>
        <p>
          This week I have been playing around a bit with pixelart and tried to
          learn how to do some simple animation for them. It took a bit longer
          than what I would believe from how they turned out but I feel pretty
          happy with them at least! The walking animation can be mixed together
          with the spellcasting animations so they can be played independently
          depending on what the character is currently doing ingame. Here is the
          result!
        </p>
        <div className={"grid grid-cols-3"}>
          <img src="/img/blog/dh2650/first_character_running.gif" />
          <img src="/img/blog/dh2650/first_character_basic_spell.gif" />
          <img src="/img/blog/dh2650/first_character_wand_spell.gif" />
        </div>
      </>
    ),
    date: <>2022-04-06</>,
  },
  {
    title: <>Meeting #6 - Finalizing the demo</>,
    body: (
      <>
        <p>
          In this meeting we combined what we have worked on into one single
          project and also set up a git repository (... which we should probably
          have done from the very start lol). Here are two screenshots of what
          we have so far, the screenshots does not do the game justice since I
          didn't manage to get one that captured how the projectiles looked
          like.
        </p>
        <div className={"grid grid-cols-2 gap-4"}>
          <img src="/img/blog/dh2650/demo1_2.png" />
          <img src="/img/blog/dh2650/demo1_1.png" />
        </div>
      </>
    ),
    date: <>2022-04-07</>,
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
    body: (
      <>
        <p>
          The first demo went good. We got a few comments, such as that the wand
          does not point in the same direction as you shoot (it is sligtly at an
          angle), that the character was a bit too fast and that the camera
          panning could be improved.
        </p>
      </>
    ),
    date: <>2022-04-08</>,
  },

  // Week 15
  {
    title: <>Meeting #7</>,
    body: (
      <>
        <p>
          In this meeting we set up the objectives for what we should do this
          week which was beginning our game design document and work on the
          business aspect of our game. We also touched upon the critique we got
          during our demo and spoke about what got brought up and what we could
          fix. We also discussed the redesign of the wizard to make it look a
          bit more straight when firing the spells, but we decided to not change
          it for now but prioritize making new enemies instead. After this I
          taught the others how to use git for merging, branching, rebasing, how
          to create pull requests and handle merge conflicts etc since we needed
          to do these things for our Unity project now that we are using git.
        </p>
      </>
    ),
    date: <>2022-04-12</>,
  }, // Same doc for #7 and #8
  {
    // https://docs.google.com/document/d/1R7QbLIJgMaEQbY_PDRLt-M6EXoDrAfKE0DDCwecVSGU/edit
    // #8: Also spoke about competitors: https://docs.google.com/spreadsheets/d/10ecp_EoYoXj5km-bABbsz_JPKJizqSWmN1mtMPTnpTQ/edit#gid=0
    title: <>Meeting #8</>,
    body: (
      <>
        <p>
          Today we discussed the different potential competitors we could have
          if we released our game and worked a bit on the game design document.
          We wrote about our business plan, target group, technical platforms
          and also made a MoSCoW prioritization plan. We also made a rough
          timeplan for what we want to do in the coming two weeks. Which among
          others included extending the spell system, adding a mana system, and
          the ability to switch spells.
        </p>
      </>
    ),
    date: <>2022-04-13</>,
  },
  {
    title: <>Status Update #1</>,
    body: (
      <>
        <p>
          Today me and Baptiste covered presenting the first status update
          physically. I felt like it went pretty good, we didn't get too many
          comments but I am happy nonetheless.
        </p>
      </>
    ),
    date: <>2022-04-14</>,
  },

  // Week 17
  {
    // https://docs.google.com/forms/d/e/1FAIpQLSeBExTkRsiz2FArJ8kWCMmZ9pMx5lL0LR7O3UaludxpZGycrg/viewform
    // https://docs.google.com/document/d/1fYZWBN0cRd1-meoDw4vjWaYuZcNuS8m0LtA2gPgfHd8/edit
    // https://docs.google.com/document/d/1FiFeIAQExy5aSUww27JG_aSLVLUH-01fmaQCkYZAUiU/edit
    /*
        We all had a bit to catch up from our studies and we also had some stuff to work on since last meeting so we have only been communicating over Discord for a week. But now we felt like it was time to have a meeting to merge our changes and talk about where exactly we are headed. Some things we mentioned that we wanted to do was having bigger levels, that would be approximately 4 screens big. We also said that we will aim for 4-5 spells and that it would be nice to include some music in the game. We also spoke about what we should work for the coming week, which included adding a way for the player to die, finish the spell system, add some UI, finishing a map and a "hub area" that we decided we want before you start a level. We also said that we should add some more enemies and sprites for dead enemies and for the player as they currently simply disappear. The enemy we decided should be next up is a more tanky version of the original wizard. I took the task of drawing it since I had drawn the original wizard.
                We also continued working with our MoSCoW prioritization list from last time to fit these into the plan.
                We also briefly spoke about looking for free textures and assets online for the game. At the end of the meeting I assisted with some issues regarding git again, namely updating a local branch with changes that had been pushed to the main branch on GitHub.
        */
    title: <>Meeting #9</>, // meeting 10 according to doc???
    body: (
      <>
        <p>
          We all had a bit to catch up from our studies and we also had some
          stuff to work on since last meeting so we have only been communicating
          over Discord for a week. But now we felt like it was time to have a
          meeting to merge our changes and talk about where exactly we are
          headed. For this we felt like we should create a document that we keep
          updating for what we actually settle for since it seems like we
          remember differently what we have settled for with some game features
          (although I have to say this did not happen much and a large majority
          of the group remembered the same thing, but since it did happen I
          think it is a good idea to have this document). We also spoke about
          what we should work for the coming week, which included more enemies
          and sprites for dead enemies and also for the player as they currently
          simply disappear. The enemy we decided should be next up is a more
          tanky version of the original wizard. I took the task of drawing it
          since I had drawn the original wizard. We also continued working with
          our MoSCoW prioritization list from last time to fit these into the
          plan. We also briefly spoke about looking for free textures and assets
          online for the game. At the end of the meeting I assisted with some
          issues regarding git again, namely updating a local branch with
          changes that had been pushed to the main branch on GitHub.
        </p>
      </>
    ),
    date: <>2022-04-25</>,
  },
  {
    title: <>New Enemy! Tanky Wizard</>,
    body: (
      <>
        <p>
          Or like we internally call it, the fat wizard! Here is a comparison
          image to see how the fat wizard (to the left) looks like compared to
          the normal wizard (to the right). They look a bit alike, but the
          intention is that it is just a variation of the normal wizard so I am
          happy with how it turned out. I also realized that it might look weird
          out of context but they are holding their arms out because they are
          supposed to be holding a wand later ingame.
        </p>
        <div className={"flex justify-center"}>
          <img
            style={{ width: "49%" }}
            src="/img/blog/dh2650/fatvsnormal.png"
          />
        </div>
      </>
    ),
    date: <>2022-04-29</>,
  },

  // Week 18
  {
    title: <>Meeting #10</>,
    body: (
      <>
        <p>
          Today we checked out the pixel art one member in our team looked for
          since last meeting that he wanted to show us. However it turned out
          the website he had found mostly hosted pirated assets so I quickly
          found some alternative sites that we looked at instead (
          <a href="https://craftpix.net/freebies/" target="_blank">
            https://craftpix.net/freebies/
          </a>{" "}
          and{" "}
          <a href="https://itch.io/game-assets/free" target="_blank">
            https://itch.io/game-assets/free
          </a>
          ). We found a nice looking pack that we settled with here:{" "}
          <a
            href="https://craftpix.net/freebies/free-zombie-tds-tilesets-buildings-and-furniture/?num=1&count=99&sq=top%20down&pos=5"
            target="_blank"
          >
            https://craftpix.net/freebies/free-zombie-tds-tilesets-buildings-and-furniture/?num=1&count=99&sq=top%20down&pos=5
          </a>
          . We also spoke a bit on how to design levels and adding movement
          spells, such as blimp (short teleport), speed boost etc. Additionally,
          we discussed having a meeting tomorrow as well to merge all changes
          into the main branch. I was not completely sure I could make it to
          that meeting so I stayed and assisted one member of the group with
          merging their changes to the main branch as a refresher on how to do
          it in case I can not attend tomorrow.
        </p>
      </>
    ),
    date: <>2022-05-03</>,
  },
  {
    title: <>New Sprite! Dead Wizard</>,
    body: (
      <>
        <p>
          I made a death sprite for the normal wizard. I also realized I have
          not shown here before that the sprites are separated into multiple
          layers so that the wizards can have multiple different colors that can
          be changed through code. It works by having one layer in grayscale
          which will be multiplied with some color and then add the skin layer
          on top of this. The image here was red but is animated with css to
          rotate through all hues, showing different colors you could expect to
          see the characters in game.
        </p>
        <div>
          <div style={{ width: "49%", margin: "0 auto", position: "relative" }}>
            <img
              style={{
                animation: "HueRotation 4s linear infinite",
              }}
              src="/img/blog/dh2650/wizard_dead_clothes.png"
            />
            <img
              style={{
                position: "absolute",
                left: "0",
                top: "0",
              }}
              src="/img/blog/dh2650/wizard_dead_skin.png"
            />
          </div>
        </div>
      </>
    ),
    date: <>2022-05-03</>,
  },
  {
    // https://docs.google.com/document/d/1FiFeIAQExy5aSUww27JG_aSLVLUH-01fmaQCkYZAUiU/edit#
    title: <>Meeting #11</>,
    body: (
      <>
        <p>
          Today I was absent from the meeting due to being double booked which
          was why I wasn't sure if I could attend today. But the most important
          point of todays meeting was merging our branches again and they
          handled it fine without me. I just wanted to log the meeting here to
          help keep track of what we did when.
        </p>
      </>
    ),
    date: <>2022-05-04</>,
  },
  // Week 19
  {
    // https://docs.google.com/document/d/1FiFeIAQExy5aSUww27JG_aSLVLUH-01fmaQCkYZAUiU/edit#
    title: <>Meeting #12</>,
    body: (
      <>
        <p>
          The highlight of todays meeting in my opinion was that David
          Bergendorff showed some music he had been working on for the game and
          it absolutely blew me away. It was really nice and I felt like it fit
          the game very well! He made two tracks, one which we would use when
          you are in-between levels (in the hub) and one while actually fighting
          the other wizards.
        </p>
        <p>
          Since last meeting we also extended the map, fixed some issues with
          the navigation for the enemies and started decorating the level.
        </p>
        <p>
          You can listen to the music clips here:
          <br />
          <audio controls src="/img/blog/dh2650/between-levels.mp3">
            Your browser does not support audio elements.
          </audio>
          <br />
          <audio controls src="/img/blog/dh2650/theme.mp3">
            Your browser does not support audio elements.
          </audio>
        </p>
      </>
    ),
    date: <>2022-05-10</>,
  },
  {
    // https://docs.google.com/document/d/1fYZWBN0cRd1-meoDw4vjWaYuZcNuS8m0LtA2gPgfHd8/edit?usp=sharing
    title: <>Meeting #13</>,
    body: (
      <>
        <p>
          We wrote a list of objectives, a list of what we currently have and
          one of what we want to have. The list of objectives contained:
          <ul className={"list-disc ml-8"}>
            <li>One large level</li>
            <li>3-4 enemies: basic, sentry, tank, and maybe a mutant</li>
            <li>4-5 spells</li>
            <li>3 colors of spells</li>
            <li>Some kind of end of the levels, possibly a collectible item</li>
            <li>Music</li>
            <li>Difficulty</li>
          </ul>
        </p>
        <p>
          The list of what we currently have contained:
          <ul className={"list-disc ml-8"}>
            <li>One level</li>
            <li>2 enemies: basic and tank</li>
            <li>4 spells (but still work in progress)</li>
            <li>3 colors of spells</li>
            <li>Music</li>
          </ul>
        </p>
        <p>
          And what we want to add next:
          <ul className={"list-disc ml-8"}>
            <li>Player death</li>
            <li>Corpse for tank wizard</li>
            <li>Sentry or Mutant wizard</li>
            <li>Finish map and add a hub area</li>
            <li>Some UI (cursor, pick-up prompts etc)</li>
          </ul>
        </p>
        <p>
          We made some notes who will take care of what in the to-do list. Since
          at this point I have become a bit more used to the drawing software I
          am using I took care of the tasks of adding a corpse for the tank
          wizard, and also drawing a new wizard that should be a mutant or like
          a sentry/long range wizard.
        </p>
      </>
    ),
    date: <>2022-05-13</>,
  },
  {
    title: <>New Sprites! Mutant + Beam spell</>,
    body: (
      <>
        <p>
          I made a mutant wizard sprite, both for when it is alive and dead. I
          also drew a texture for one of the spells we have added to the game
          which is like a laser beam.
        </p>
        <div>
          <div className={"flex gap-4 justify-center items-center"}>
            <div
              style={{
                width: "25%",
                margin: "0 auto",
                position: "relative",
                display: "inline-block",
              }}
            >
              <img
                style={{
                  animation: "HueRotation 4s linear infinite",
                }}
                src="/img/blog/dh2650/enemy_primal.png"
              />
              <img
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                }}
                src="/img/blog/dh2650/enemy_primal_skin.png"
              />
            </div>
            <div
              style={{
                width: "25%",
                margin: "0 auto",
                position: "relative",
                display: "inline-block",
              }}
            >
              <img
                style={{
                  animation: "HueRotation 4s linear infinite",
                }}
                src="/img/blog/dh2650/enemy_primal_dead.png"
              />
              <img
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                }}
                src="/img/blog/dh2650/enemy_primal_dead_skin.png"
              />
            </div>
          </div>
          <div
            style={{
              height: "40px",
              background: 'url("/img/blog/dh2650/ray-large.gif") repeat',
            }}
          ></div>
        </div>
      </>
    ),
    date: <>2022-05-14</>,
  },
  {
    title: <>Meeting #14</>,
    body: (
      <>
        <p>
          Today we had a meeting to prepare for the presentation tomorrow, we
          spoke about the layout for two new levels, some issues we encountered
          with our navigation for the AI. We also merged some branches and made
          sure everyone knows how to add spells to a gamemanager script we have
          in Unity. What was also done since last meeting is the game having
          multiple levels so that the player can get to the next level by
          reaching the end of the current one. Some bugs were also fixed, like
          the music restarting on death, on level switching and also the player
          inventory also resetting when going to the next level.
        </p>
      </>
    ),
    date: <>2022-05-15</>,
  },

  // Week 20
  {
    title: <>Status Update #2 + Demo</>,
    body: (
      <>
        <p>
          The status update and demo went well! We got a bunch of useful
          feedback which I will list here:
        </p>
        <p>
          Pop up that informs about what kind of spell you have equipped,
          mutants (actually we later noticed all enemies) may sometimes walk
          through walls. The ray spell is bad, when reaching level 3 you
          instantly die at the center of the map. The restart button should not
          be on [R] as this might be better suited to hold when panning the
          camera for example. The UI is bad, get something better than just
          numbers on the screen.
        </p>
        <p>
          The difficulty is good, the music is really nice, the difficulty is
          what makes the game fun. Make some feedback for when you kill an
          enemy. You have too much mana, it is too easy not to run out.
        </p>
        <p>
          People didn't realize what to do in the hub level (you should just
          exit it when you are ready to play). Add UI to show what spells are in
          the inventory. Add prompts for what spell is close to you on the
          ground so it is easy to see, and potentially also a tooltip!
        </p>
        <p>
          Add health and mana bar UI! Add some feedback to let the players know
          when they use the stat boost spell. The keybinds are unintuitive. Some
          balancing needs to be done, some spells are too strong. Tweak the
          aggro (enemies start attacking when spells hit nearby even if player
          is far away) so that louder spells have a larger aggro radius. The
          game plays the best in tight areas, so maybe adjust the open areas in
          level 1 and 3 to be smaller.
        </p>
        <p>
          Player can't hurt themselves with explosive spells, consider adding
          this. Enemies are always completely accurate, add some variance.
          Sometimes enemies get stuck.
        </p>
        <p>
          The player can walk through some walls by pressing against them while
          walking along them.
        </p>
      </>
    ),
    date: <>2022-05-16</>,
  },
  {
    title: <>Meeting #15</>,
    body: (
      <>
        <p>
          Today we had a short meeting where we made some preparations for the
          final presentation. A few in the group were busy with other courses so
          we mainly planned out what we can work on individually until the next
          meeting, such as considering competitors, how we would try to sell our
          game etc. I also said I could try to make an outline for what we
          should include in the presentation until the next meeting, which we
          after the meeting ended up deciding we would have on Sunday.
        </p>
      </>
    ),
    date: <>2022-05-20</>,
  },
  {
    title: <>Meeting #16</>,
    body: (
      <>
        <p>
          This meeting went pretty smoothly, like mentioned in the previous post
          I had planned to make an outline for the presentation - which I did.
          It contained these points:
          <ol className={"list-decimal ml-8 my-4"}>
            <li>Intro</li>
            <li>Overview (Genre, theme, game pace etc)</li>
            <li>Gameplay</li>
            <li>Story</li>
            <li>User interface and controls</li>
            <li>(Live?) Demo</li>
            <li>Target group</li>
            <li>Contact info and a thank you</li>
          </ol>
        </p>
        <p>
          But in the meeting we changed it up to this outline instead:
          <ol className={"list-decimal ml-8 my-4"}>
            <li>Intro</li>
            <li>Overview (Genre, theme, game pace etc)</li>
            <li>Recorded Demo</li>
            <li>Gameplay</li>
            <li>User interface and controls</li>
            <li>Story</li>
            <li>Target group</li>
            <li>Business plan</li>
            <li>Contact info and a thank you</li>
          </ol>
        </p>
        <p>
          We mostly finished the presentation but left a bit for tomorrow as not
          the entire group could be present at todays meeting either.
        </p>
      </>
    ),
    date: <>2022-05-22</>,
  },

  // Week 21
  {
    title: <>Meeting #17</>,
    body: (
      <>
        <p>
          Today we finished the presentation and also made it look a bit nicer.
          We also did some practise runs so we would know how long it would take
          to present and also decided who would be on-campus to present which I
          said I would be.
        </p>
      </>
    ),
    date: <>2022-05-23</>,
  },
  {
    title: <>Final Presentation</>,
    body: (
      <>
        <p>
          Today we had the final presentations! I think it went great, only one
          small hiccup happened which was during the break. My bus was late in
          the morning so I didn't have time to get coffee and breakfast so I ran
          to get some in the break, but Baptiste had the same idea so none of us
          was in the classroom to help people to play our game which was very
          unfortunate. But I talked to some people in the break after and they
          thought the game looked very polished since last time and also that
          the music was really nice! (Which I agree with, I really like the
          music!)
        </p>
      </>
    ),
    date: <>2022-05-24</>,
  },
  {
    title: <>Final Deliverables</>,
    body: (
      <>
        <p>
          After the final presentation we have been working on the Game Design
          Document and I also made a website for the game which I am very happy
          with!
          <br />
          <a
            className={"underline text-blue-600"}
            href="https://wanderfulgame.netlify.app/"
            target="_blank"
          >
            https://wanderfulgame.netlify.app/
          </a>
        </p>
      </>
    ),
    date: <>2022-05-30</>,
  },
  {
    title: <>Goodbye, DH2650!</>,
    body: (
      <>
        <p>
          We just handed in the Game Design Document along with the link to the
          website and also the binaries for the game.
        </p>
        <p>
          This course has been really fun and I have learned a lot! We made our
          game in Unity which was nice, previously when I have used Unity I
          relied very heavily on scripting and kind of lost a lot of what Unity
          offered which I have learned how to utilize more now. It was also the
          first time I have had some kind of AI in Unity, and even if I was not
          the one who implemented it I could still learn from how it was
          implemented. I will definitely use it in my hobby projects in the
          future! I also got to (if I may say so myself) improve my pixelart
          skills! I had already purchased the software (Aseprite) that I used
          during the course previously so the interest was there, but I have
          never put this much effort into drawing characters before.
        </p>
      </>
    ),
    date: <>2022-05-31</>,
  },
];

function BlogPost({ title, body, date }) {
  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "0.3em",
        marginBottom: "2em",
        padding: "1em",
        backgroundColor: "#eee",
        color: "#000",
        margin: "2em auto",
      }}
    >
      <span className={"flex flex-col gap-2"}>
        <h3 className={"text-xl font-bold mb-2"}>{title}</h3>
        <span className={"flex flex-col gap-4"}>{body}</span>
        <hr className={"h-px bg-gray-400 border-0"} />
        <span className="italic">{date}</span>
      </span>
    </div>
  );
}

function Blog({ entries }) {
  let posts = [];
  for (let i = entries.length - 1; i >= 0; i--) {
    posts.push(
      <BlogPost
        key={i}
        title={entries[i].title}
        body={entries[i].body}
        date={entries[i].date}
      />,
    );
  }
  return <div>{posts}</div>;
}

function Dh2650Blog() {
  return (
    <div className={"flex flex-col justify-center m-8"}>
      <span className={"text-2xl font-bold text-center"}>
        Computer Game Design Blog (Group 8)
      </span>
      <div className={"sm:max-w-4xl"}>
        <Blog entries={blogEntries} />
      </div>
    </div>
  );
}

export default Dh2650Blog;
