<template>
  <!-- This is the slideshow, a component to visualize a slideshow of some images -->
  <!-- This component appears in an event page and in a point of interest page -->
  <div>
    <div id="carousel" class="carousel slide carousel-fade" data-bs-interval="false" data-bs-ride="carousel" :style="cssProps">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button v-for="(img, imgIndex) of imgsWithNoHead" :key="imgIndex" type="button" data-bs-target="#carousel" :data-bs-slide-to="imgIndex+1" :aria-label="'Slide '+imgIndex+2"></button>
        <button v-for="(video, videoIndex) of videosUrl" :key="videoIndex" type="button" data-bs-target="#carousel" :data-bs-slide-to="videoIndex+imagesUrl.length" :aria-label="'Slide '+1+videoIndex+imagesUrl.length"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="imagesUrl[0]" class="d-block h-100" :alt="imgAlternatives[0]">
        </div>
        <div v-for="(img, imgIndex) of imgsWithNoHead" :key="imgIndex"  class="carousel-item">
          <img :src="img" class="d-block h-100" :alt="imgAlternatives[imgIndex]">
        </div>
        <div v-for="(video, videoIndex) of videosUrl" :key="videoIndex"  class="carousel-item">
            <iframe
              class="d-block h-100 w-100"
              :src="video"
              :title="videoAlternatives[videoIndex]">
            </iframe>
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
  name: 'SlideShow',
  props: {
    imagesUrl: { // An array with the images to visualize in the slideshow
      type: Array,
      required: true,
    },
    imgAlternatives: { // An array of strings alternative to images
      type: Array,
      required: true,
    },
    videosUrl: { // An array with the images to visualize in the slideshow
      type: Array,
      required: true,
    },
    videoAlternatives: { // An array of strings alternative to images
      type: Array,
      required: true,
    },
    height: { // Height of the image
      type: String,
      required: true,
    },
    width: { // Width of the image
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
  @media screen and (max-width: 940px){
    .carousel{
      max-height: var(--carousel-height);
      background-color: rgba(84, 84, 84, 0.244);
      margin-left: auto;
      margin-right: auto;
    }

    iframe{
      margin: auto; 
      max-width: 100%;
      max-height: var(--carousel-height); 
      height: var(--carousel-height) !important;
    }

    .carousel  .carousel-item {
      max-height: var(--carousel-height);
    }

    img{
      margin: auto;
      max-width: 100%;
      max-height: var(--carousel-height);
    }
  }
  
  @media screen and (min-width: 940px){
    .carousel{
      max-height: var(--carousel-height);
      max-width: var(--carousel-width);
      background-color: rgba(84, 84, 84, 0.244);
      margin-left: auto;
      margin-right: auto;
    }

    .carousel  .carousel-item {
      height: var(--carousel-height);
      width: var(--carousel-width);
    }

    img{
      margin: auto;
    }
  }
</style>
