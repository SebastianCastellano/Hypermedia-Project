<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All itineraries</h1>
    <div class="container-for-all-itinerary-cards">
      <div class="row row-cols-auto row-cols-md-2 mt-4">
        <div v-for="(itinerary, itineraryIndex) of itineraryList"
          :key="`itinerary-index-${itineraryIndex}`"
          class="col-md">
          <itinerary-side-card
            :id="itinerary.id"
            :name="itinerary.name"
            :imageUrl="itinerary.imageUrl"
            :imageAlternative="itinerary.imageAlternative"
            :duration="itinerary.duration"
            :length="itinerary.length"
            :shortDescription="itinerary.shortDescription"
          />
        </div>
      </div>
    </div>
    <table class="space-under-itinerary-list">
<tr><td></td></tr>
</table>
  </div>
</template>

<!-- this is the itineraries list page -->

<style scoped>
.container-for-all-itinerary-cards {
  height: 730px;
}
.space-under-itinerary-list {
  border: 0;
  height: calc(100vh - 1089px);
}
</style>

<script>
import ItinerarySideCard from '~/components/ItinerarySideCard.vue' // We are importing the component used for an itinerary card
// (in the itineraries list page there are multiple itinerary card: one for each itinerary)
export default {
  name: 'ListPage',
  head: {
    title: 'Itineraries | VisitMantova',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Discover Mantova beautiful itineraries!'
      }
      ],
  },
  components: {
    ItinerarySideCard,
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
