<template>
  <div>
    <breadcrumb-component :title="name"/>
    <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
    :location="location" :price="price" :images="images" :videos="videos"/>
    <event-template :poiId="poiId" :thumbnailPoi="thumbnailPoi" :namePoi="namePoi" :shortDescriptionPoi="shortDescriptionPoi"/>
  </div>
</template>

<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
import EventTemplate from '~/components/EventTemplate.vue'
import BreadcrumbComponent from '~/components/BreadcrumbComponent.vue'
export default {
  name: 'EventPage',
  components: {
    EventPoiTemplate,
    EventTemplate,
    BreadcrumbComponent
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/eventAndAssociatedPointOfInterest/' + id)
    const name = data[0].name
    const breadcrump = "breadcrump"
    const description = data[0].description
    const dateTime = new Date(data[0].date).toLocaleDateString()
    const location = data[0].location
    const price = data[0].price
    const images = data[0].images
    const videos = data[0].videos
    const poiId = data[0].poiId
    const thumbnailPoi = data[1].images[0]
    const namePoi = data[1].name
    const shortDescriptionPoi = data[1].shortDescription
    return {
      name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      images,
      videos,
      poiId,
      thumbnailPoi,
      namePoi,
      shortDescriptionPoi,
    }
  },
}
</script>
