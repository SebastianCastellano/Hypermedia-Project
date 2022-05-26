<template>
  <custom-page :title="title" :image="image" :short-overview="shortOverview" />
</template>


<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  layout: 'header-only',
  components: {
    CustomPage,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const shortOverview = data.shortOverview
    return {
      title,
      shortOverview,
      image,
    }
  },
}
</script>
