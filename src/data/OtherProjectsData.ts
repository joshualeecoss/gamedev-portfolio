import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("project-3", "Space Blaster!", "img/projects/2D-shooter-icon.png", `
  <div class="paragraph">
      <strong>Space Blaster!</strong> is a 2D space shooter made using the Unity game engine. 
      It was the main project from the first course of the specialization.
      <div class="notice">
          Space Blaster! can be played in browser on <a href="https://vanity-project.itch.io/space-blaster" target="_blank">itch.io</a>.
          Source code is available on <a href="https://github.com/joshualeecoss/GDD-Coursera/tree/main/2D%20Shooter" target="_blank">GitHub</a>.
      </div>
      <br/>
      </div>
      <div class="paragraph center">
          <img class="title-screen" src="img/projects/space-blaster.png" alt="Space Blaster! title screen"/>
          </div>
      <div class="paragraph center">
          <iframe frameborder="0" src="https://itch.io/embed/1930808?border_width=5" width="560" height="175"><a href="https://vanity-project.itch.io/space-blaster">Space Blaster! by Joshua Coss</a></iframe>
      </div>

      <div class="paragraph">
          My added modifications :
          <ul>
          <li>Second playable ship added. The white ship has a higher movement and attack
          speed but it's bullets do less damage, whereas the red ship moves and shoots much
          slower, but the bullets pack a bigger punch.</li>
          <li>Changed the UI to show both the number of enemies left in the level as well as
          the ship's remaining lives.</li>
          <li>Added rotation to the bordering asteroids to give the playfield seem a little
          more alive.</li>
          <li>Added a respawn delay after the player ship is destroyed.</li>
          <li>Added random enemy spawning</li>
          </ul>
      </div>

      <div class="paragraph center">
          <img class="pc-screenshot" src="img/projects/space-blaster-screenshot-1.png" alt="Mr RoBug Screenshot" />
          <img class="pc-screenshot" src="img/projects/space-blaster-screenshot-2.png" alt="Mr RoBug Screenshot" />    
          <img class="pc-screenshot" src="img/projects/space-blaster-screenshot-3.png" alt="Mr RoBug Screenshot" />            
      </div>
    `, "#c10606", false, true),


  new ProjectData("project-4", "Space Escape", "img/projects/space-escape-icon.png", `
  <div class="paragraph">
      <strong>Space Escape</strong> is a 2D platformer made using the Unity game engine. 
      It was the main project from the second course of the specialization.
      <div class="notice">
          Space Escape can be played in browser on <a href="https://vanity-project.itch.io/space-escape" target="_blank">itch.io</a>.
          Source code is available on <a href="https://github.com/joshualeecoss/GDD-Coursera/tree/main/2D%20Platformer" target="_blank">GitHub</a>.
      </div>
      <br/>
      </div>
      <div class="paragraph center">
          <img class="title-screen" src="img/projects/space-escape.png" alt="Space Blaster! title screen"/>
          </div>
      <div class="paragraph center">
          <iframe frameborder="0" src="https://itch.io/embed/1958782?border_width=5" width="560" height="175"><a href="https://vanity-project.itch.io/space-escape">Space Escape by Joshua Coss</a></iframe>
      </div>

      <div class="paragraph">
          My added modifications :
          <ul>
          <li>Added an additional 1up system where collecting 20 score gems will give the player
          an extra life.</li>
          <li>Implemented a projectile weapon system. Tweaked the enemy prefab stats in order to 
          accomodate this.</li>
          <li>Created a new enemy type that utilizes the projectile weapon system. The enemy fires
          in bursts and then rests, allowing the player to not feel frustrated.</li>
          <li>Designed and created the 1 level.</li>
          </ul>
      </div>

      <div class="paragraph center">
          <img class="pc-screenshot" src="img/projects/space-escape-screenshot-1.png" alt="Mr RoBug Screenshot" />
          <img class="pc-screenshot" src="img/projects/space-escape-screenshot-2.png" alt="Mr RoBug Screenshot" />    
          <img class="pc-screenshot" src="img/projects/space-escape-screenshot-3.png" alt="Mr RoBug Screenshot" />    
          <img class="pc-screenshot" src="img/projects/space-escape-screenshot-4.png" alt="Mr RoBug Screenshot" />           
      </div>
    `, "#1ca1e2", false, true),

];