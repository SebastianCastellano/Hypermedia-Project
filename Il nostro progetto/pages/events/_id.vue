<template>
  <div>
    <breadcrumb-component :title="name"/>
    <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
    :location="location" :price="price" :imagesUrl="imagesUrl" :imagesAlternative="imagesAlternative"
    :videosUrl="videosUrl" :videosAlternative="videosAlternative"
    :idPreviousEvent="idPreviousEvent" :idNextEvent="idNextEvent"/>
    <div class="page container mt-5">
      <h3 class="title-font">The event takes place near: </h3>
    </div>
    <event-template
      :poiId="poiId"
      :thumbnailPoi="thumbnailPoi"
      :alternativeThumbPoi="alternativeThumbPoi"
      :namePoi="namePoi"
      :shortDescriptionPoi="shortDescriptionPoi"/>
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
    const dateTime = data[0].date_s // new Date(data[0].date).toLocaleDateString()
    const location = data[0].location
    const price = data[0].price
    const imagesUrl = data[0].imagesUrl
    const imagesAlternative = data[0].imagesAlternative
    const videosUrl = data[0].videosUrl
    const videosAlternative = data[0].videosAlternative
    const poiId = data[0].id
    const thumbnailPoi = data[1].imagesUrl[0]
    const alternativeThumbPoi = data[1].imagesAlternative[0]
    const namePoi = data[1].name
    const shortDescriptionPoi = data[1].shortDescription
    const idPreviousEvent = data[2]
    const idNextEvent = data[3]
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
      poiId,
      thumbnailPoi,
      alternativeThumbPoi,
      namePoi,
      shortDescriptionPoi,
      idPreviousEvent,
      idNextEvent,
    }
  },
}
</script>
