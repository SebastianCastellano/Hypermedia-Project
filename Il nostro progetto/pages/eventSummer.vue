<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">Summer Events</h1>
    <div class="sub-events-div">
    <nuxt-link class="display-4 title-font page-title sub-events" to="/eventList">Back to All Events</nuxt-link>
    </div>
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

<!-- this is the summer event list page (a page with all events in summer) -->

<style scoped>
.sub-events-div{
  width:7cm;
  display: block; 
  margin:0;
  padding: 0 !important;
}
</style>

<script>
import CardEvent from '~/components/CardEvent.vue' // We are importing the component used for an event card
// (in the summer event list page there are multiple event card: one for each event in summer)
export default {
  name: 'ListPage',
  components: {
    CardEvent
},
  data() {
    return {
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events/summer') // we use this api to get all events in summer
    return {
      eventList: data,
    }
  },
}
</script>
