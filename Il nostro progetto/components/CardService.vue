<template>
  <!-- This component rapresent a card of a type of service (showing the name of a type of service)
  This component is used in services list page -->
  <div class="card" style="width: 15rem">
    <nuxt-link :to="'/services/'+ type">
      <div class="card-body">
        <h2 class="card-title title-font">{{ type }}</h2>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.card {
  border: 2px solid var(--color1);
  background-color: var(--color2);
}
.card:hover {
  background-color: var(--color1-light);
  /*border: 2px solid var(--color1);*/
}

.card-body {
  margin: auto;
  width: 100%;
  padding: 10px;
}

.card-title {
  text-align: center;
  font-size: 140%;
}
</style>

<script>
export default {
  name: 'CardServiceComponent',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
}
</script>
