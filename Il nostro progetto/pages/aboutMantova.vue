<template>
  <about-mantova-component :title="title" :image="image" :alternative="alternative" :text="text" />
</template>

<script>
import AboutMantovaComponent from '~/components/AboutMantovaComponent.vue'
export default {
  name: 'AboutMantovaPage',
  components: {
    AboutMantovaComponent,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/aboutMantova')
    const title = data.title
    const image = data.image
    const alternative = data.alternative
    const text = data.text
    return {
      title,
      image,
      alternative,
      text,
    }
  },
}
</script>
