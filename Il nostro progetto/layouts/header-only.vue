<template>
  <div class="main-page">
    <the-header />
    <nuxt />
  </div>
</template>

<!-- A page witch has an header but not a footer -->
<!-- This layout is implemented in the home page, in the about mantova page and in contact us page;
while other pages have both the header and the footer -->

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'HeaderOnly',
  components: {
    TheHeader,
  },
}
</script>
