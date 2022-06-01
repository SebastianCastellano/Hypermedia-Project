<template>
  <div class="main-page">
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<!-- A page has an header and a footer -->

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>