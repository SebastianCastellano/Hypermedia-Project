<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All itineraries</h1>
    <div class="row mt-3">
      <card-itinerary
        v-for="(itinerary, itineraryIndex) of itineraryList"
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

<!-- this is the itineraries list page -->

<script>
import CardItinerary from '~/components/CardItinerary.vue' // We are importing the component used for an itinerary card
// (in the itineraries list page there are multiple itinerary card: one for each itinerary)
export default {
  name: 'ListPage',
  components: {
    CardItinerary,
  },
  data() {
    return {
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries') // we use this api to get all itineraries
    return {
      itineraryList: data,
    }
  },
}
</script>
