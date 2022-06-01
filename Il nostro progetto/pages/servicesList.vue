<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All Services</h1>
    <div class="row mt-3 flex-container">
      <card-service
        v-for="(service, serviceIndex) of serviceList"
        class="col-sm-2 m-2"
        :key="`event-index-${serviceIndex}`"
        :type="service.type"
      />
    </div>
  </div>
</template>

<style scoped>
.flex-container { justify-content: space-evenly; }
</style>

<script>
import CardService from '~/components/CardService.vue'
export default {
  name: 'ListServicePage',
  components: {
    CardService,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services')
    return {
      serviceList: data,
    }
  },
}
</script>
