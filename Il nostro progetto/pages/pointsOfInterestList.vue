<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All points of interest</h1>
    <div class="row mt-3 flex-container">
      <card-poi
        v-for="(poi, poiIndex) of poiList"
        class="col-sm-2 m-2"
        :key="`poi-index-${poiIndex}`"
        :id="poi.id"
        :name="poi.name"
        :price="poi.price"
        :shortDescription="poi.shortDescription"
        :image="poi.imagesUrl[0]"
        :alternative="poi.imagesAlternative[0]"
      />
    </div>
  </div>
</template>

<!-- this is the points of interest list page -->

<style scoped>
.flex-container {justify-content: space-evenly;}
</style>

<script>
import CardPoi from '~/components/CardPoi.vue' // We are importing the component used for a point of interest card
// (in the points of interest list page there are multiple points of interest card: one for each point of interset)
export default {
  name: 'ListPagePoi',
  components: {
    CardPoi,
  },
  data() {
    return {
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/pointOfInterest') // we use this api to get all points of interest
    return {
      poiList: data,
    }
  },
}
</script>
