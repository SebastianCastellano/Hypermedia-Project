<template>
  <div class="card" style="width: 15rem">
    <nuxt-link :to="'/pointsOfInterest/'+id">
      <!-- Better to use an img
      <div
        class="card-img-top card-image"
        :style="{ 'background-image': 'url(' + image + ')' }"
      ></div>
      -->
      <img
        class="card-img-top card-image"
        :src="image"
        :alt="alternative"
      />
      <div class="card-body">
        <div class="card-title title-font">{{ name }}</div>
        <div class="card-title imp-info">Price: {{ price }}</div>
        <p class="card-text">{{ shortDescription }}</p>
      </div>
    </nuxt-link>
  </div>
      <!--
      <nuxt-link :to="'/pointsOfInterest/'+id" class="btn btn-primary btn-orange">
              Go to point of interest
      </nuxt-link>
      -->
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.card {
  border: 2px solid var(--color1);
  background: var(--color2);
}
.card:hover {
  background: var(--color1-light);
  /*border: 2px solid var(--color1);*/
}
.card-image {
  margin-top: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 140px;
  border: 1px solid var(--color1);
}
.card-title, .card-text{
  text-align: center;
}

.title-font {
  font-size: 150%;
}
.imp-info {
  font-size: 120%;
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
    alternative: {
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
