<template>
  <div>
    <h1>Other Game Projects</h1>

    <div style="margin-bottom: 30px;">
      These are projects that I'm working on as part of the Game Design and Development
      Specialization offered by MSU on <a
        href="https://www.coursera.org/specializations/game-design-and-development">coursera.org</a>. </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
