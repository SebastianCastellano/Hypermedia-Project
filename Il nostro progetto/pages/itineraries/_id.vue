<template>
  <div>
    <itinerary-template
      :name="name"
      :breadcrump="breadcrump"
      :duration="duration"
      :length="length"
      :imageUrl="imageUrl"
      :imageAlternative="imageAlternative"
      :description="description"
      :map="map"
      :start="associatedPoiList[0].name"/>
    <div class="page container mt-5">
      <h3 class="title-font">Inside {{ name }}:</h3>
    </div>
    <event-template
      v-for="(poi, poiIndex) of associatedPoiList"
      :key="`poi-index-${poiIndex}`"
      :poiId="poi.id"
      :thumbnailPoi="poi.imagesUrl[0]"
      :alternativeThumbPoi="poi.imagesAlternative[0]"
      :namePoi="poi.name"
      :shortDescriptionPoi="poi.shortDescription"
    />
  </div>
</template>

<script>
import ItineraryTemplate from '~/components/ItineraryTemplate.vue'
import EventTemplate from '~/components/EventTemplate.vue'
export default {
  name: 'ItineraryTemplatePage',
  components: {
    ItineraryTemplate,
    EventTemplate
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
    const imageUrl = data[0].imageUrl
    const imageAlternative = data[0].imageAlternative
    return {
      name,
      breadcrump,
      duration,
      length,
      description,
      map,
      associatedPoiList: data[1],
      imageUrl,
      imageAlternative,
    }
  },
}
</script>
