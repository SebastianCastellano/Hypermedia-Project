<template>
  <!-- The template used to visualize the main info of a specific point of interest -->
  <div class="page container mt-5">
    <h1 class="name title-font page-title">{{ name }}</h1>
    <!-- General info of the point of interest -->
    <div class="info-box">
      <p>When: {{dateTime}}</p>
      <p>Where: {{location}}</p>
      <p>Price: {{price}}</p>
    </div>
    <!-- A description of the point of interest -->
    <p class="description">{{ description }}</p>
    <!-- The images of the point of interest -->
    <h3 class="title-font">Media:</h3>
    <img
      v-for="(image, imageIndex) of imagesUrl"
      :key="`image-index-${imageIndex}`"
      :src="image"
      :alt="imagesAlternative[imageIndex]"
    />
    <br>
    <!-- The videos of the point of interest -->
    <!-- To embed a youtube video-->
    <iframe
      v-for="(video, videoIndex) of videosUrl"
        :key="`video-index-${videoIndex}`"
        :src="video"
        :title="videosAlternative[videoIndex]">
    </iframe>
  </div>
</template>

<style scoped>
.name {
  text-align: center;
}

.info-box {
  margin: 25px auto;
  border: 2px solid var(--color1);
  background-color: var(--color1-light);
  padding: 5px;
  max-width: 200px;
}

.info-box p {
  font-weight: bold;
  margin: 5px 0px;
  padding: 0;
}

.description {
  margin-bottom: 25px;
}

img, iframe, video {
  margin-right: 25px;
  margin-bottom: 15px;
  max-width: 90%;
}

img { width: 400px; }

iframe, video {
  width: 420px;
  height: 315px;
}
</style>

<script>
export default {
  name: 'EventPoiTemplate',
  props: {
    name: { // The name of the point of interest
      type: String,
      required: true,
    },
    description: { // The description of the point of interest
      type: String,
      required: true,
    },
    dateTime: { // Opening times of the point of interest
      type: String,
      required: true,
    },
    location: { // The location of the point of interest
      type: String,
      required: true,
    },
    price: { // The price to enter in the point of interest
      type: String,
      required: true,
    },
    imagesUrl: { // Images
      type: Array,
      required: true,
    },
    imagesAlternative: { // Alternative string to the images
      type: Array,
      required: true,
    },
    videosUrl: { // Videos
      type: Array,
      required: true,
    },
    videosAlternative: { // Alternative string to the videos
      type: Array,
      required: true,
    },
  },
}
</script>
