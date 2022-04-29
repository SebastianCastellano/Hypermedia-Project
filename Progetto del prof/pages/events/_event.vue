<template>
  <event-poi-template :name="name" :breadcrump="breadcrump" :info="info" />
</template>

<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
export default {
  name: 'EventPoiTemplate',
  components: {
    EventPoiTemplate,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    const name = data.name
    const breadcrump = "breadcrump"
    const info = data.description
    return {
      name,
      breadcrump,
      info,
    }
  },
}
</script>
