<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All Services</h1>
    <div class="row mt-3">
      <card-service
        v-for="(service, serviceIndex) of serviceList"
        class="col-sm-2 m-2"
        :key="`event-index-${serviceIndex}`"
        :type="service.type"
      />
    </div>
  </div>
</template>

<!-- this is the services list page where you can see all types of services -->

<script>
import CardService from '~/components/CardService.vue' // We are importing the component used for a service type card
// (in this page there are as many cards as many the different types of services)
export default {
  name: 'ListServicePage',
  components: {
    CardService,
  },
  data() {
    return {
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services') // we use this api to get all types of services
    return {
      serviceList: data,
    }
  },
}
</script>
