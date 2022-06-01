<template>
  <div class="card">
    <!-- Use a nuxt-link to make the whole card a link -->
    <nuxt-link :to="'/events/'+id">
      <!-- Better to use an img
      <div
        class="card-img-top card-image"
        :style="{ 'background-image': 'url(' + image + ')' }"
      ></div>
      -->
      <img
        class="card-img-top card-image"
        :src="image"
        :alt="alternative"/>
      <div class="card-body">
        <p class="card-title title-font">{{ name }}</p>
        <p class="card-title imp-info">{{ date }}</p>
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
  width: 15rem;
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

.card-text {
  text-align: left;
}

.card-title {
  font-size: 1.5vmax;
  text-align: center; 
}

.card-body{ font-size: 1.0vmax; }

</style>

<script>
// const aaa: Date
// aaa.getMonth.toString
export default {
  name: 'CardComponent2',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
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
    alternative: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/events/${this.id}`)
    },
  },
}
</script>
