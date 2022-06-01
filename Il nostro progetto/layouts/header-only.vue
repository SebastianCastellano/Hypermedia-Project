<template>
  <div class="main-page">
    <the-header />
    <nuxt />
  </div>
</template>

<!-- A page witch has an header but not a footer -->

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'HeaderOnly',
  components: {
    TheHeader,
  },
}
</script>