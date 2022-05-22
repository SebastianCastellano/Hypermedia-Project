<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All itineraries</h1>
    <div class="row mt-3">
      <card-itinerary
        v-for="(itinerary, itineraryIndex) of itineraryList"
        class="col-sm-2 m-2"
        :key="`itinerary-index-${itineraryIndex}`"
        :id="itinerary.id"
        :imageUrl="itinerary.imageUrl"
        :imageAlternative="itinerary.imageAlternative"
        :name="itinerary.name"
        :duration="itinerary.duration"
        :length="itinerary.length"
        :shortDescription="itinerary.shortDescription"
      />
    </div>
  </div>
</template>

<script>
import CardItinerary from '~/components/CardItinerary.vue'
export default {
  name: 'ListPage',
  components: {
    CardItinerary,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/itineraries')
    return {
      itineraryList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
