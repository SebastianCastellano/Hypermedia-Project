<template>
  <div class="page container mt-5">
    <h3 class="title-font">The event takes place near: </h3>
    <div class="poi-box">
      <nuxt-link class="flex-container" :to="'/pointsOfInterest/'+poiId">
        <img class="column" :src="thumbnailPoi"/>
        <div class="info column">
          <div class="info-text">
            <h3 class="title-font">{{namePoi}}</h3>
            <p>{{shortDescriptionPoi}}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <h1>MANCA L'ALT DELLA FOTO</h1>
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

.poi-box:hover {
  background-color: var(--color1-light);
}

.flex-container {
  display: flex;
}

img {
  height: 150px;
}

.info {
  text-align: center;
  width: 100%;
}

.info p {
  padding: 0;
  margin: 0;
}

.info-text {
  margin-top: 40px;
}

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
