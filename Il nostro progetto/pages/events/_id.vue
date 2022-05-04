<template>
  <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :date="date"
  :location="location" :price="price" :images="images" :videos="videos" />
</template>

<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
export default {
  name: 'EventPage',
  components: {
    EventPoiTemplate,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    const name = data.name
    const breadcrump = "breadcrump"
    const description = data.description
    const date = data.date
    const location = data.location
    const price = data.price
    const images = data.images
    const videos = data.videos
    // capire per il link al pointOfInterestWhereHosted corrispondente
    return {
      name,
      breadcrump,
      description,
      date,
      location,
      price,
      images,
      videos
    }
  },
}
</script>
