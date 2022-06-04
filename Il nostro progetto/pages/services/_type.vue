<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All {{serviceList[0].type}}</h1>
      <div class="container-for-these-services-cards">
          <div class="row mt-3 flex-container">
          <!-- In this part there are visualized some cards, one for each service of this type of services -->
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
    <table class="space-under-this-service">
<tr><td></td></tr>
</table>
  </div>
</template>

<!-- this is a service page, a page to visualize the list of services of a certain type -->

<style scoped>
.container-for-these-services-cards {
  height: 650px;
}
.flex-container{ 
  
  justify-content: space-evenly;
}

.space-under-this-service {
  border: 0;
  height: calc(100vh - 980px);
}
</style>

<script>
import CardSingleService from '~/components/CardSingleService.vue' // The component used to visualize a card with a service
// (in this page we visualize as many cards as many services are of this specific type of services)
export default {
  name: 'singleServicePage',
  components: {
    CardSingleService
  },
  async asyncData({ route, $axios }) {
    const { type } = route.params
    const { data } = await $axios.get('/api/services/' + type) // we use this api to get the list of services of this kind
    return {
      serviceList: data
    }
  },
}
</script>
