<template>
<div>
  <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
  :location="location" :price="price" :images="images" :videos="videos" />
  <poi-template :eventId="eventId" :thumbnailEvent="thumbnailEvent" :nameEvent="nameEvent" :shortDescriptionEvent="shortDescriptionEvent"/>
</div>
</template>

<!--
<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
export default {
  name: 'poiPage',
  components: {
    EventPoiTemplate,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pointOfInterest/' + id)
    const name = data.name
    const breadcrump = "breadcrump"
    const description = data.description
    const dateTime = data.times
    const location = data.location
    const price = data.price
    const images = data.images
    const videos = data.videos
    // capire per il link agli event in questo pointOfInterest
    return {
      name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      images,
      videos
    }
  },
}
</script>
-->

<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
import PoiTemplate from '~/components/PoiTemplate.vue'
export default {
  name: 'poiPage',
  components: {
    EventPoiTemplate,
    PoiTemplate
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pointOfInterestAndAssociatedEvents/' + id)
    const name = data[0].name
    const breadcrump = "breadcrump"
    const description = data[0].description
    const dateTime = data[0].times
    const location = data[0].location
    const price = data[0].price
    const images = data[0].images
    const videos = data[0].videos
    //
    const thumbnailEvent = "eeee" // data[1].images[0]
    const eventId = 1 // data[1].id[0]
    const nameEvent = "aaa" // data[1].name
    const shortDescriptionEvent = "bbb" // data[1].shortDescription
    const periodEvent = "ccc" // data[1].date
    // bisogna ripetere (in un qualche modo) (eventualmente anche 0 volte) questa parte per ogni evento in quel determinato
    // punto di interesse eee bisogna forse anche controllare che funzioni data[N] senza che esca fuori dall'array
    //
    return {
      name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      images,
      videos,
      thumbnailEvent,
      eventId,
      nameEvent,
      shortDescriptionEvent,
      periodEvent
    }
  },
}
</script>
