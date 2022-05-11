<template>
  <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + 'https://www.melogranoroma.org/wp-content/uploads/2017/09/SFONDO-GRIGIO-SCURO.png' + ')' }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <h4 class="card-title">{{ duration }}</h4>
      <h4 class="card-title">{{ length }}</h4>
      <p class="card-text">
        {{ shortDescription }}
      </p>
      <nuxt-link :to="'/itineraries/'+id" class="btn btn-primary btn-orange">
              Go to itinerary
          </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid lightgray;
}
.card:hover {
  border: 2px solid orange;
}
.btn-orange {
  background-color: orange;
  border: 2px solid orange;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>

<script>
export default {
  name: 'CardComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/itineraries/${this.id}`)
    },
  },
}
</script>
