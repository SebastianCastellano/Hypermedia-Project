<template>
    <div class="page container mt-5">
      <h3 class="breadcrump">{{ breadcrump }}</h3>
      <h1 class="name title-font page-title">{{ name }}</h1>
      <div class="info-box">
        <p>When: {{dateTime}}</p>
        <p>Where: {{location}}</p>
        <p>Price: {{price}}</p>
      </div>
      <p class="description">{{ description }}</p>
      <h3 class="title-font">Media:</h3>
      <img
        v-for="(image, imageIndex) of imagesUrl"
        :key="`image-index-${imageIndex}`"
        :src="image"
        :alt="imagesAlternative[imageIndex]"
      />
      <br>
      <!-- To embed a youtube video-->
      <iframe
        v-for="(video, videoIndex) of videosUrl"
          :key="`video-index-${videoIndex}`"
          :src="video"
          :title="videosAlternative[videoIndex]">
      </iframe>
      <!-- For a general video, maybe in our folders -->
      <!--
      <video controls
        v-for="(video, videoIndex) of videos"
        :key="`video-index-${videoIndex}`"
        :src="video"
        :type="video/webm">
      </video>
      -->
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
    name: {
      type: String,
      required: true,
    },
    breadcrump: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imagesUrl: {
      type: Array,
      required: true,
    },
    imagesAlternative: {
      type: Array,
      required: true,
    },
    videosUrl: {
      type: Array,
      required: true,
    },
    videosAlternative: {
      type: Array,
      required: true,
    },
  },
}
</script>
