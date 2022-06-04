<template>
  <!-- This component rapresent a card of a point of interest (showing essential info about an event: image, name, price, short description)
  This component is used in point of interest list page -->
  <div class="card" style="width: 15rem">
    <nuxt-link :to="'/pointsOfInterest/'+id">
      <div class="img-container">
        <img
          class="card-img-top card-image"
          :src="image"
          :alt="alternative"
        />
      </div>
      <div class="card-body">
        <div class="card-title title-font">{{ name }}</div>
        <div class="card-title imp-info">Price: {{ price }}</div>
        <p class="card-text">{{ shortDescription }}</p>
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
  background: var(--color2);
}
.card:hover {
  background: var(--color1-light);
  /*border: 2px solid var(--color1);*/
}
.img-container{ 
  height: 140px;
}
.card-image {
  margin-top: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  border: 1px solid var(--color1);
  width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
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
