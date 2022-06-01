<template>
  <div class="page container mt-5">
    <h1 class="display-4 title-font page-title">All Events</h1>
    <div class="sub-events-div">
    <!-- there are two links to go to the summer events or to the winter events and apply a filter -->
    <nuxt-link class="display-4 title-font page-title sub-events" to="/eventSummer">Summer Events</nuxt-link>
    <nuxt-link class="display-4 title-font page-title sub-events" to="/eventWinter">Winter Events</nuxt-link>
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

<!-- this is the event list page -->

<style>
.sub-events-div{
  width:4cm;
  display: block; 
  margin:0;
  padding: 0 !important;
}
.sub-events{
  
  font-family: var(--title-font);
  color: #000000;
  font-size: medium;

}
</style>

<script>
import CardEvent from '~/components/CardEvent.vue' // We are importing the component used for an event card
// (in the event list page there are multiple event card: one for each event)
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
    const { data } = await $axios.get('/api/events/all') // we use this api to get all events
    return {
      eventList: data,
    }
  },
}
</script>
