<template>
  <custom-page/>
</template>

<!-- this is the home page -->

<script>
import CustomPage from '~/components/CustomPage.vue' // the template used for the home page
export default {
  name: 'IndexPage',
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Visit Mantova: discover events, itineraries and points of interest!'
      }
      ],
  },
  layout: 'header-only', // In this specific page there is the header but not the footer
  components: {
    CustomPage,
  },
}
</script>
