<template>
  <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
  :location="location" :price="price" :images="images" :videos="videos" />
</template>

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
