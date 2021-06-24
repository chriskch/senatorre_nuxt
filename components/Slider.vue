<template>
  <section>
    <b-carousel
      id="carousel"
      v-model="slide"
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
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :img-src="slide.bild"
      >
        <h1 class="animate__animated animate__flipInX animate__delay-1s mb-4">
          Monumentum der <strong>Erinnerung!</strong>
        </h1>
        <nuxt-link
          to=""
          class="bg-brown text-white rounded-full px-3 py-3 text-lg font-bold"
          >Mehr lesen</nuxt-link
        >
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://senatorre.b-cdn.net/Start/Slides/bg1.jpg"
      >
        <h1 class="animate__animated animate__flipInX animate__delay-1s mb-4">
          Monumentum der <strong>Erinnerung!</strong>
        </h1>
        <nuxt-link
          to=""
          class="bg-brown text-white rounded-full px-3 py-3 text-lg font-bold"
          >Mehr lesen</nuxt-link
        >
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://senatorre.b-cdn.net/Start/Slides/bg2.jpg"
      >
        <h1 class="animate__animated animate__flipInX animate__delay-1s mb-4">
          <strong>SenaTorre</strong> in Fessenbach
        </h1>
        <div class="animate__animated animate__bounceInLeft animate__delay-1s">
          <router-link to="muensterturm#hero_in" class="btn btn-primary"
            >Mehr lesen</router-link
          >
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://senatorre.b-cdn.net/Start/Slides/bg3.jpg"
      >
        <h1 class="animate__animated animate__flipInX animate__delay-1s mb-4">
          <strong>Bau</strong> des Münsterturms
        </h1>
        <div class="animate__animated animate__bounceInRight animate__delay-1s">
          <router-link to="muensterturm#hero_in" class="btn btn-primary"
            >Mehr lesen</router-link
          >
        </div>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
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
  },
  beforeMount() {
    const slides = this.$content("/start/Slider").fetch();
    return {
      slides
    };
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
