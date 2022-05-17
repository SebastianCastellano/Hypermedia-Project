<template>
  <div class="card mt-5" style="width: 15rem">
    <nuxt-link :to="'/itineraries/'+id">
      <div class="card-body">
        <div class="info">
          <h3 class="card-title title-font">{{ name }}</h3>
          <div class="imp-info">
            <p class="card-text">Average duration: {{ duration }} ---</p>
            <p class="card-text">Length: {{ length }}</p>
          </div>
        </div>
        <p class="card-text short-des">
        {{ shortDescription }}
        </p>
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
  width: 100% !important;
}
.card:hover {
  background: var(--color1-light);
  /*border: 2px solid var(--color1);*/
}
.card-title {
  text-align: left;
  max-width: 50%;
  display: inline-block;
  /*margin-right: 48vw;*/
  margin-left: 5vw;
  margin-right: 15vw;
}

.imp-info {
  max-width: 50%;
  text-align: right;
  font-size: 110%;
  display: inline-block;
}

.imp-info p {
  margin: 0;
  padding: 0;
  display: inline;
}

.title-font {
  font-size: 150%;
}

.card-body .short-des {
  /*text-align: center;*/
  margin-left: 5vw;
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
