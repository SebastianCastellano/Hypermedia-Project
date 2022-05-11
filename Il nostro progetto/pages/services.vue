<template>
  <div class="page container mt-5">
    <h1 class="display-4">All events</h1>
    <div class="row mt-3">
      <card-event
        v-for="(event, eventIndex) of eventList"
        class="col-sm-2 m-2"
        :key="`event-index-${eventIndex}`"
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
  name: 'ListServicePage',
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
    const { data } = await $axios.get('/api/services')
    return {
      eventList: data,
    }
  },
}
</script>
