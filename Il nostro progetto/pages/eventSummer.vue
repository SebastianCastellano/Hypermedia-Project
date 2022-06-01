<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">Summer Events</h1>
    <div class="row mt-3">
      <card-event
        v-for="(event, eventIndex) of eventList"
        class="col-sm-2 m-2"
        :key="`event-index-${eventIndex}`"
        :id="event.id"
        :name="event.name"
        :date="event.date_s"
        :shortDescription="event.shortDescription"
        :image="event.imagesUrl[0]"
        :alternative="event.imagesAlternative[0]"
      />
    </div>
  </div>
</template>

<style scoped>
.sub-events-div{
  width:7cm;
  display: block; 
  margin:0;
  padding: 0 !important;
}
</style>

<script>
import CardEvent from '~/components/CardEvent.vue'
export default {
  name: 'ListPage',
  components: {
    CardEvent
},
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/events/summer')
    return {
      eventList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
