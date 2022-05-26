<template>
  <div>
    <event-poi-template
    :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
    :location="location" :price="price" :imagesUrl="imagesUrl" :imagesAlternative="imagesAlternative"
    :videosUrl="videosUrl" :videosAlternative="videosAlternative" />

    <div class="page container mt-5" v-if="associatedEventList[0]">
      <h3 class="title-font">Events hosted in {{name}}: </h3>
      <poi-template
      v-for="(event, eventIndex) of associatedEventList"
      :key="`event-index-${eventIndex}`"
      :eventId="event.id"
      :thumbnailEvent="event.imagesUrl[0]"
      :alternativeThumbEvent="event.imagesAlternative[0]"
      :nameEvent="event.name"
      :shortDescriptionEvent="event.shortDescription"
      :periodEvent="event.date_s"/>
    </div>

    <div class="page container mt-5" v-if="associatedItineraryList[0]">
      <h3 class="title-font">Itineraries including {{name}}: </h3>
      <card-itinerary
      v-for="(itinerary, itineraryIndex) of associatedItineraryList"
      :key="`itinerary-index-${itineraryIndex}`"
      :id="itinerary.id"
      :name="itinerary.name"
      :duration="itinerary.duration"
      :length="itinerary.length"
      :shortDescription="itinerary.shortDescription"
      :imageUrl="itinerary.imageUrl"
      :imageAlternative="itinerary.imageAlternative"
      />
    </div>

  </div>
</template>

<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
import PoiTemplate from '~/components/PoiTemplate.vue'
import CardItinerary from '~/components/CardItinerary.vue'
export default {
  name: 'poiPage',
  components: {
    EventPoiTemplate,
    PoiTemplate,
    CardItinerary
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pointOfInterestAndAssociatedEventsAndAssociatedItineraries/' + id)
    const name = data[0].name
    const breadcrump = "breadcrump"
    const description = data[0].description
    const dateTime = data[0].times
    const location = data[0].location
    const price = data[0].price
    const imagesUrl = data[0].imagesUrl
    const imagesAlternative = data[0].imagesAlternative
    const videosUrl = data[0].videosUrl
    const videosAlternative = data[0].videosAlternative
    return {
      name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      imagesUrl,
      imagesAlternative,
      videosUrl,
      videosAlternative,
      associatedEventList: data[1],
      associatedItineraryList: data[2]
    }
  },
}
</script>
