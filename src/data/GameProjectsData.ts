import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Mr. Robug - GMTK Jam 2021", "img/projects/mr-robug-icon.png",
        `
    <div class="paragraph">
     <strong>Mr. Robug</strong> is my first game project made as part of GMTK Game Jam 2021, made 
     using the Godot game engine. 
    <div class="notice">
        Mr. RoBug can be played in browser on <a href="https://vanity-project.itch.io/mr-robug" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/joshualeecoss/Mr-Robug" target="_blank">GitHub</a>.
    </div>
     <br/>
    </div>
    <div class="paragraph center">
        <img src="img/projects/mr_robug.png" alt="Mr Robug title screen"/>
        </div>
    <div class="paragraph center">
        <iframe frameborder="0" src="https://itch.io/embed/1084530?border_width=5" width="560" height="175"><a href="https://vanity-project.itch.io/mr-robug">MR RoBug by Joshua Coss</a></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>2D Platforming</li>
        <li>Light platforming puzzles</li>
        <li>Main menu and level select system</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/mr-robug-screenshot-1.png" alt="Mr RoBug Screenshot" />
        <img class="pc-screenshot" src="img/projects/mr-robug-screenshot-2.png" alt="Mr RoBug Screenshot" />        
    </div>
    `, "#23bd69", true),


    new ProjectData("project-2", "Virtual Pet Defender - Virtual Pet Jam 2022", "img/projects/vpd-icon.png", `
    <div class="paragraph">
     <strong>Virtual Pet Defender</strong> was made as part of the Virtual Pet Jam in 2022, made 
     using the Unity game engine. 
    <div class="notice">
        Virtual Pet Defender can be played in browser on <a href="https://vanity-project.itch.io/virtual-pet-defender" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/joshualeecoss/Virtual-Pet-Jam-Project" target="_blank">GitHub</a>.
    </div>
     <br/>
    </div>
    <div class="paragraph center">
        <img src="img/projects/vpd.png" alt="Virtual Pet Defender title screen"/>
        </div>
    <div class="paragraph center">
        <iframe frameborder="0" src="https://itch.io/embed/1366344?border_width=5" width="560" height="175"><a href="https://vanity-project.itch.io/virtual-pet-defender">Virtual Pet Defender by Joshua Coss</a></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Hybrid virtual pet / tower defence gameplay</li>
        <li>"The Zone" meter increases when the pet's stat meters stay full, but the more towers
        on the field, the quicker they deplete</li>
        <li>Gain cash by defeating enemies and purchase items to refil meters/li>
        <li>Game ends when "The Zone" meter is depleted/li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/vpd-screenshot-1.png" alt="Virtual Pet Defender Screenshot" />
        <img class="pc-screenshot" src="img/projects/vpd-screenshot-2.png" alt="Virtual Pet Defender Screenshot" />        
    </div>
    `, "#5a78af", true),

];