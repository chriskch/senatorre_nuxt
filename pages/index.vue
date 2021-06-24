<template>
  <div>
    <Nav />
    <Slider :slides="slides" />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.slides = await this.$content("/start/Slider").fetch();
  },
  data() {
    return {
      slides: []
    };
  }
};
</script>

<style></style>
