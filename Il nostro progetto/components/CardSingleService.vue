<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h3 class="card-title title-font">{{ name }}</h3>
      <h4 class="card-info">{{ address }}</h4>
      <h4 class="card-info">{{ times }}</h4>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.card {
  border: 2px double var(--color1);
  background: var(--color2);
  padding: 0;
}

.card-body { width: 100%; }

h3, h4 {
  text-align: center;
  font-size: 120%;
}
</style>

<script>
export default {
  name: 'CardSingleServiceComponent',
  props: {
    /* type: {
      type: Number,
      required: true,
    },
    */
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    times: {
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
