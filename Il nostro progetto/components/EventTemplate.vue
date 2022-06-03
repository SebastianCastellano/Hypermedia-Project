<template>
  <!-- Component used to visualize a card with a point of interest -->
  <div class="page container mt-5">
    <div class="poi-box">
      <nuxt-link class="flex-container" :to="'/pointsOfInterest/'+poiId">
        <!-- An image representing the point of interest -->
        <div class="img-container">
          <img
            class="column"
            :src="thumbnailPoi"
            :alt="alternativeThumbPoi"/>
        </div>
        <div class="info column">
          <div class="info-text">
            <!-- Other little information about the point of interest -->
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

.img-container{ 
  height: 150px;
  width: 40%;
}
img {
  border: 1px solid var(--color1);
  width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
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
    poiId: { // The id of the point of interest
      type: Number,
      required: true,
    },
    thumbnailPoi: { // An image representing the point of interest
      type: String,
      required: true,
    },
    alternativeThumbPoi: { // A string alternative to the image
      type: String,
      required: true,
    },
    namePoi: { // The name of the point of interest
      type: String,
      required: true,
    },
    shortDescriptionPoi: { // A description of the point of interest
      type: String,
      required: true,
    },
  },
}
</script>
