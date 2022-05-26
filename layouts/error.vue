<template>
  <div class="container">
    <h1 class="title-font page-title" v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 class="title-font page-title" v-else>
      Sorry... An error occurred
    </h1>
    <p>
      Please, read this fun fact and then continue with your navigation.
    </p>
    <p>
      Mantegna did not resist to the temptation of including
      himself in the "Camera degli Sposi". His selfportrait
      can be found on the ovest wall:
      a small face hidden inside the floreal decoration.
    </p>
    <div class="img-container">
      <img src="../static/images/palazzoDucale-mantegna1.jpg"
      alt="The hidden face of Andrea Mantegna inside Camera degli Sposi." />
    </div>
  </div>
</template>

<style scoped>

h1, p, .img-container {text-align: center;}

h1 { margin-top: 15vh; }

img {
  width: 50vw;
  max-width: 500px;
}

</style>

<script>
export default {
  name: 'error-page',
  props: ['error'],
}
</script>