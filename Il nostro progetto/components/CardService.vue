<template>
  <div class="card" style="width: 15rem">
    <!-- Use a nuxt-link to make the whole card a link -->
    <nuxt-link :to="'/services/'+ type">
      <div class="card-body">
        <h3 class="card-title title-font">{{ type }}</h3>
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
    /* id: {
      type: Number,
      required: true,
    },
    */
    type: {
      type: String,
      required: true,
    },
    /*
    date: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }, 
    */
  },
  /*
  methods: {
    goToDetails() {
      this.$router.push(`/events/${this.id}`)
    },
  },
  */
}
</script>
