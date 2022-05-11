<template>
  <div>
    <itinerary-template :name="name" :breadcrump="breadcrump" :duration="duration" :length="length" :description="description"
    :map="map"/>
  </div>
</template>

<script>
import ItineraryTemplate from '~/components/ItineraryTemplate.vue'
export default {
  name: 'ItineraryTemplatePage',
  components: {
    ItineraryTemplate,
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
