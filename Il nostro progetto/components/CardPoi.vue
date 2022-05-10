<template>
  <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + image + ')' }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <h4 class="card-title">Price: {{ price }} Eur</h4>
      <p class="card-text">
        {{ shortDescription }}
      </p>
      <nuxt-link :to="'/pointsOfInterest/'+id" class="btn btn-primary btn-orange">
              Go to point of interest
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
  name: 'CardComponentPoi',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
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
  },
  methods: {
    goToDetails() {
      this.$router.push(`/pointsOfInterest/${this.id}`)
    },
  },
}
</script>
