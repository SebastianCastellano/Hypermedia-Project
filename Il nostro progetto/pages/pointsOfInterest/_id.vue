<template>
  <div>
    <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
    :location="location" :price="price" :images="images" :videos="videos" />
    <div>
    <!--Removed from poi-template class="col-sm-2 m-2"-->
    <div class="page container mt-5">
      <h3 class="title-font">Events hosted in {{name}}: </h3>
    </div>
    <poi-template
      v-for="(event, eventIndex) of associatedEventList"
      :key="`event-index-${eventIndex}`"
      :eventId="event.id"
      :thumbnailEvent="event.images[0]"
      :nameEvent="event.name"
      :shortDescriptionEvent="event.shortDescription"
      :periodEvent="event.date"
    />
    <card-itinerary
      v-for="(itinerary, itineraryIndex) of associatedItineraryList"
      class="col-sm-2 m-2"
      :key="`itinerary-index-${itineraryIndex}`"
      :id="itinerary.id"
      :name="itinerary.name"
      :duration="itinerary.duration"
      :length="itinerary.length"
      :shortDescription="itinerary.shortDescription"
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
    const images = data[0].images
    const videos = data[0].videos
    return {
      name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      images,
      videos,
      associatedEventList: data[1],
      associatedItineraryList: data[2]
    }
  },
}
</script>
