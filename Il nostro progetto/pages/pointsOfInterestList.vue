<template>
  <div class="page container mt-5">
    <h1 class="display-4">All point of interests</h1>
    <div class="row mt-3">
      <card-poi
        v-for="(poi, poiIndex) of poiList"
        class="col-sm-2 m-2"
        :key="`poi-index-${poiIndex}`"
        :id="poi.id"
        :name="poi.name"
        :price="poi.price"
        :shortDescription="poi.shortDescription"
        :image="poi.images[0]"
      />
    </div>
  </div>
</template>

<script>
import CardPoi from '~/components/CardPoi.vue'
export default {
  name: 'ListPagePoi',
  components: {
    CardPoi,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/pointOfInterest')
    return {
      poiList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>