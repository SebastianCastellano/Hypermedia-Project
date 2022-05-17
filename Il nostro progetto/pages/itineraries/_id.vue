<template>
  <div>
    <itinerary-template :name="name" :breadcrump="breadcrump" :duration="duration" :length="length" :description="description"
    :map="map"/>
    <div class="page container mt-5">
      <h3 class="title-font">To be seen inside {{ name }}: </h3>
      <h1>***COLLEGARE PUNTI DI INTERESSE</h1>
    </div>
    <!-- Needed first the database part
    <event-template
      v-for="(poi, poiIndex) of associatedPoiList"
      :key="`poi-index-${poiIndex}`"
      :poiId="poi.id"
      :thumbnailPoi="poi.image[0]"
      :namePoi="poi.name"
      :shortDescriptionPoi="poi.shortDescription"/>
    -->
  </div>
</template>

<script>
import ItineraryTemplate from '~/components/ItineraryTemplate.vue'
export default {
  name: 'ItineraryTemplatePage',
  components: {
    ItineraryTemplate
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraryAndAssociatedPointOfInterest/' + id)
    const name = data[0].name
    const breadcrump = "breadcrump"
    const duration = data[0].duration
    const length = data[0].length
    const description = data[0].description
    const map = data[0].map
    // AGGIUNGERE LE ALTRE COSE
    return {
      name,
      breadcrump,
      duration,
      length,
      description,
      map,
    }
  },
}
</script>
