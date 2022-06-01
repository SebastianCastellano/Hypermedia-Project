<template>
  <div class="page container mt-5">
    
    <h1 class="display-4 title-font page-title">All Events</h1>
    <div class="sub-events-div">
    <nuxt-link class="display-4 title-font page-title sub-events" to="/eventSummer">Summer Events</nuxt-link>
    <nuxt-link class="display-4 title-font page-title sub-events" to="/eventWinter">Winter Events</nuxt-link>
    </div>
    <div class="row mt-3 flexbox-container">
      <card-event
        v-for="(event, eventIndex) of eventList"
        class="col-sm-2 m-2 column"
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

<style>
.flexbox-container {
  justify-content: space-evenly;
}

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
    const { data } = await $axios.get('/api/events/all')
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
