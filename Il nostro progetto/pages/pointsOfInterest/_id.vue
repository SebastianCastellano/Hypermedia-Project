<template>
  <div>
    <!-- In this part there are visualized the general info of the point of interest:
    the name, a description, opening times, the location, the price, some images and videos -->
    <event-poi-template
    :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
    :location="location" :price="price" :imagesUrl="imagesUrl" :imagesAlternative="imagesAlternative"
    :videosUrl="videosUrl" :videosAlternative="videosAlternative" />
    <!-- In this part there are visualized some cards, one for each event taking place in this point of interest -->
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
    <!-- In this part there are visualized some cards, one for each itinerary involving this point of interest -->
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

<!-- this is a point of interest page, a page to visualize a specific point of interest -->

<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue' // The template used for the main part of this page, to visualize the main info of the point of interest
import PoiTemplate from '~/components/PoiTemplate.vue' // The component used to visualize a card with an event
// (in this part of this page we visualize as many cards as many events take place in this point of interest)
import CardItinerary from '~/components/CardItinerary.vue' // The component used to visualize a card with an itinerary
// (in this part of this page we visualize as many cards as many itineraries are involving this point of interest)
export default {
  name: 'poiPage',
  components: {
    EventPoiTemplate,
    PoiTemplate,
    CardItinerary
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pointOfInterestAndAssociatedEventsAndAssociatedItineraries/' + id) // we use this api to get all useful info about this point of interest
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
