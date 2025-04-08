<template>
  <div class="skill">
    <div>{{name}}</div>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SkillRate",
  props: {
    name: String,
    rate: Number,
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.clear {
  clear: both;
}

.skill-name {
  float: left;
  width: 200px;
}

.skill-rate {
  float: left;
  width: 80px;
  padding-top:11px;
}

.skill {
  float: left;
  border: 1px solid hsla(0, 0%, 86.3%, .44);
  padding: 2px 10px;
  margin: 5px;
}

.circle {
  float: left;
  border-radius: 5px;
  height: 10px;
  width: 10px;
  border: 0px solid @skillRateCircleColor;
  background-color: transparent;
  opacity: 0.6;
  margin: 0px 2px;
}
.circle-full {
  background-color: @skillRateCircleColor;
}
.circle-empty {
  border-width: 1px;
  width: 8px;
  height: 8px;
}

</style>