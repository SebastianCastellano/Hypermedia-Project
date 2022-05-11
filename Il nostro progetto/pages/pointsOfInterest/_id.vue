<template>
  <div>
    <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
    :location="location" :price="price" :images="images" :videos="videos" />
    <poi-template :eventId="eventId[0]" :thumbnailEvent="thumbnailEvent[0]" :nameEvent="nameEvent[0]" :shortDescriptionEvent="shortDescriptionEvent[0]"/>
    <poi-template :eventId="eventId[1]" :thumbnailEvent="thumbnailEvent[1]" :nameEvent="nameEvent[1]" :shortDescriptionEvent="shortDescriptionEvent[1]"/>
    <poi-template :eventId="eventId[2]" :thumbnailEvent="thumbnailEvent[2]" :nameEvent="nameEvent[2]" :shortDescriptionEvent="shortDescriptionEvent[2]"/>
    <poi-template :eventId="eventId[3]" :thumbnailEvent="thumbnailEvent[3]" :nameEvent="nameEvent[3]" :shortDescriptionEvent="shortDescriptionEvent[3]"/>
    <poi-template :eventId="eventId[4]" :thumbnailEvent="thumbnailEvent[4]" :nameEvent="nameEvent[4]" :shortDescriptionEvent="shortDescriptionEvent[4]"/>
    <poi-template :eventId="eventId[5]" :thumbnailEvent="thumbnailEvent[5]" :nameEvent="nameEvent[5]" :shortDescriptionEvent="shortDescriptionEvent[5]"/>
    <poi-template :eventId="eventId[6]" :thumbnailEvent="thumbnailEvent[6]" :nameEvent="nameEvent[6]" :shortDescriptionEvent="shortDescriptionEvent[6]"/>
    <poi-template :eventId="eventId[7]" :thumbnailEvent="thumbnailEvent[7]" :nameEvent="nameEvent[7]" :shortDescriptionEvent="shortDescriptionEvent[7]"/>
    <poi-template :eventId="eventId[8]" :thumbnailEvent="thumbnailEvent[8]" :nameEvent="nameEvent[8]" :shortDescriptionEvent="shortDescriptionEvent[8]"/>
    <poi-template :eventId="eventId[9]" :thumbnailEvent="thumbnailEvent[9]" :nameEvent="nameEvent[9]" :shortDescriptionEvent="shortDescriptionEvent[9]"/>
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
    const thumbnailEvent = []
    const eventId = []
    const nameEvent = []
    const shortDescriptionEvent = []
    const periodEvent = []
    for(let i = 0; i < data[1].length; i++){
      thumbnailEvent.push(data[1][i].images)
      eventId.push(data[1][i].id)
      nameEvent.push(data[1][i].name)
      shortDescriptionEvent.push(data[1][i].shortDescription)
      periodEvent.push(data[1][i].date)
    }
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
