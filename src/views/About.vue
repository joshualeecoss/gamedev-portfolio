<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        Hello! I'm <strong>Joshua Coss</strong>, a current Computer Science student at MacEwan University and aspiring
        gameplay programmer!<br />
        I am passionate about video games and have been playing them since I can remember.<br />

      </div>

      <div style="margin-top: 20px;">I've worked on some <router-link to="/game-projects">game jam projects</router-link>,
        as well as <router-link to="/other-projects">other game projects</router-link> that I've
        worked on in my free time.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> in an internship or entry level roll
        in order to kick off my career in the games industry. You can reach me at <a
          href="mailto:josh.coss@gmail.com">josh.coss@gmail.com</a> or <router-link to="/contact">through
          here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Josh" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}</style>