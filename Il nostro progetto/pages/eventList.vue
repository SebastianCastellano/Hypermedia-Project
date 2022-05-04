<template>
  <div class="page container mt-5">
    <h1 class="display-4">All events</h1>
    <div class="row mt-3">
      <card-event
        v-for="(event, eventIndex) of eventList"
        class="col-sm-2 m-2"
        :key="`cat-index-${eventIndex}`"
        :id="event.id"
        :name="event.name"
        :date="event.date"
        :shortDescription="event.shortDescription"
        :image="event.images[0]"
      />
    </div>
  </div>
</template>

<script>
import CardEvent from '~/components/CardEvent.vue'
export default {
  name: 'ListPage',
  components: {
    CardEvent,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/events')
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
