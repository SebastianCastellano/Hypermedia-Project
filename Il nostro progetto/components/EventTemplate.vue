<template>
<div class="page container mt-5">
  <div class="poi-box">
    <nuxt-link class="flex-container" :to="'/pointsOfInterest/'+poiId">
      <img
        class="column"
        :src="thumbnailPoi"
        :alt="alternativeThumbPoi"/>
      <div class="info column">
        <div class="info-text">
          <h3 class="title-font">{{namePoi}}</h3>
          <p>{{shortDescriptionPoi}}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
  color: inherit;
}

.poi-box {
  margin-top: 20px;
  border: 2px solid var(--color1);
  padding: 0;
}

.poi-box:hover { background-color: var(--color1-light); }

.flex-container { display: flex; }

img {
  height: 150px;
  max-width: 40% !important;
}

.info {
  text-align: center;
  width: 100%;
}

.info p {
  padding: 0;
  margin: 0;
}

.info-text { margin-top: 40px; }

</style>

<script>
export default {
  name: 'EventTemplate',
  props: {
    poiId: {
      type: Number,
      required: true,
    },
    thumbnailPoi: {
      type: String,
      required: true,
    },
    alternativeThumbPoi: {
      type: String,
      required: true,
    },
    namePoi: {
      type: String,
      required: true,
    },
    shortDescriptionPoi: {
      type: String,
      required: true,
    },
  },
}
</script>
