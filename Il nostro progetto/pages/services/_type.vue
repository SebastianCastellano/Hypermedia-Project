<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All {{serviceList[0].type}}</h1>
    <div class="row mt-3">
      <card-single-service
        v-for="(service, serviceIndex) of serviceList"
        class="col-sm-2 m-2"
        :key="`service-index-${serviceIndex}`"
        :type="service.type"
        :name="service.name"
        :address="service.address"
        :times="service.times"
      />
    </div>
  </div>
</template>

<script>
import CardSingleService from '~/components/CardSingleService.vue'
export default {
  name: 'singleServicePage',
  components: {
    CardSingleService
  },
  async asyncData({ route, $axios }) {
    const { type } = route.params
    const { data } = await $axios.get('/api/services/' + type)
    /* const name = data[0].name
    const breadcrump = "breadcrump"
    const address = data[0].address
    const dateTime = data[0].times
    const location = data[0].location
    const price = data[0].price
    const images = data[0].images
    const videos = data[0].videos
    */
    return {
      /* name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      images,
      videos,
      associatedEventList: data[1] */
      serviceList: data
    }
  },
}
</script>