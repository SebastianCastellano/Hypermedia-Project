<template>
  <div class="card" style="width: 15rem">
  <nuxt-link :to="'/itineraries/'+id">
      <!-- <div
        class="card-img-top card-image"
        :style="{ 'background-image': 'url(' + 'https://www.melogranoroma.org/wp-content/uploads/2017/09/SFONDO-GRIGIO-SCURO.png' + ')' }"
      ></div> -->
      <div class="card-body">
        <p class="card-title title-font">{{ name }}</p>
        <p class="card-title imp-info">{{ duration }}</p>
        <p class="card-text">{{ length }}</p>
        <p class="card-text">
        {{ shortDescription }}
      </p>
      </div>
    </nuxt-link>
    <!--<div
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
    </div> -->
  </div>
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
.card-title {
  text-align: center;
}
.card-text {
  text-align: left;
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
