<template>
  <div>
    <h1>Game Jams</h1>

    <div style="margin-bottom: 30px;">
      The following are games that I created from scratch as part of online game jams.
      These projects involve following along with a tutorial, and then making modifications
      to the projects to further show what we've learned.
    </div>

    <ProjectsList v-bind:projects="projects" />

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
