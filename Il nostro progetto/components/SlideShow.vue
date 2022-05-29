<template>
  <div>
    <div id="carousel" class="carousel slide  carousel-fade" data-bs-ride="carousel" :style="cssProps">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button v-for="(img, imgIndex) of imgsWithNoHead" :key="imgIndex" type="button" data-bs-target="#carousel" :data-bs-slide-to="imgIndex+1" :aria-label="'Slide '+imgIndex+2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="imagesUrl[0]" class="d-block h-100" :alt="imgAlternatives[0]">
        </div>
        <div v-for="(img, imgIndex) of imgsWithNoHead" :key="imgIndex"  class="carousel-item">
          <img :src="img" class="d-block h-100" :alt="imgAlternatives[imgIndex]">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventTitleBanner',
  props: {
    imagesUrl: {
      type: Array,
      required: true,
    },
    imgAlternatives: {
      type: Array,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgsWithNoHead(){
      const imgs = this.imagesUrl.slice();
      imgs.shift();
      return imgs;
    },
    cssProps(){
      return{
        '--carousel-height': this.height,
        '--carousel-width': this.width,
      };
    }
  }
}
</script>

<style scoped>
  .carousel{
    height: var(--carousel-height);
    width: var(--carousel-width);
    background-color: rgba(84, 84, 84, 0.244);
  }

  .carousel  .carousel-item {
    height: var(--carousel-height);
    width: var(--carousel-width);
  }

  img{
    margin: auto;
  }
</style>