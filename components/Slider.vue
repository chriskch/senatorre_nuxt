<template>
  <section>
    <img src="content/uploads/bg2.jpg" alt="" />
    <b-carousel
      id="carousel"
      v-model="slider"
      :interval="4000"
      img-width="1024"
      img-height="480"
      controls
      indicators
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <!-- <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :img-src="slide.bild"
      >
        <h1 class="animate__animated animate__flipInX animate__delay-1s mb-4">
          {{ slide.caption }}
        </h1>
        <nuxt-link
          :to="slide.link"
          class="bg-brown text-white rounded-full px-3 py-3 text-lg font-bold"
          >Mehr lesen</nuxt-link
        >
      </b-carousel-slide> -->
    </b-carousel>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const slides = await this.$content("/start/Slider").fetch();
    console.log(slides);
    return {
      slides
    };
  },
  data() {
    return {
      slider: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
.carousel-item img {
  height: 100vh !important ;
  object-fit: cover;
}
.carousel-caption {
  bottom: 50% !important;
}

h1 {
  font-weight: 400;
  font-size: 60px;
}

@media (max-width: 991px) {
  h1 {
    font-size: 30px;
  }
}
</style>
