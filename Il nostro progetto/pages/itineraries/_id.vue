<template>
  <div>
    <!-- In this part there are visualized the general info of the itinerary:
    the name, the duration, the lenght, the image representing the itinerary, a description, a map -->
    <itinerary-template
      :name="name"
      :duration="duration"
      :length="length"
      :imageUrl="imageUrl"
      :imageAlternative="imageAlternative"
      :description="description"
      :map="map"
      :start="associatedPoiList[0].name"/>
    <div class="page container mt-5">
      <h2 class="title-font">Inside {{ name }}:</h2>
    </div>
    <!-- In this part there are visualized some cards, one for each point of interest of the itinerary -->
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

<!-- this is an itinerary page, a page to visualize a specific itinerary -->

<style scoped>
.title-font{
  text-align: center;
}
</style>

<script>
import ItineraryTemplate from '~/components/ItineraryTemplate.vue' // The template used for the main part of this page, to visualize the main info of the itinerary
import EventTemplate from '~/components/EventTemplate.vue' // The component used to visualize a card with a point of interest
// (in this page we visualize as many cards as many points of interests are there in this itinerary)
export default {
  name: 'ItineraryTemplatePage',
  components: {
    ItineraryTemplate,
    EventTemplate
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraryAndAssociatedPointOfInterest/' + id) // we use this api to get all useful info about this itinerary
    const name = data[0].name
    const duration = data[0].duration
    const length = data[0].length
    const description = data[0].description
    const map = data[0].map
    const imageUrl = data[0].imageUrl
    const imageAlternative = data[0].imageAlternative
    return {
      name,
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
