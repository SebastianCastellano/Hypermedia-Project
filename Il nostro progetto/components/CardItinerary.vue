<template>
  <div class="page container mt-5">
    <div class="poi-box">
      <nuxt-link class="flex-container" :to="'/itineraries/'+id">
        <img
          class="column"
          :src="imageUrl"
          :alt="imageAlternative"/>
        <div class="info column">
          <div class="info-text">
            <h3 class="title-font">{{ name }}</h3>
            <p><div class="int">Average duration: {{ duration }} --- Length: {{ length }}</div></p>
            <p><div class="int">{{ shortDescription }}</div></p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>


<style scoped>

a {
  text-decoration: none;
  color: inherit;
}

.poi-box {
  margin-top: 20px;
  border: 2px solid var(--color1);
  padding: 0;
  width: 100%;
}

h3 {font-size: 4.5vmin;}
p {font-size: 2.7vmin;}

.poi-box:hover { background-color: var(--color1-light); }

.flex-container { display: flex; }

img { width: 30%; }

.info {
  text-align: center;
  width: 70%;
}

.info p {
  padding: 0;
  margin: 0;
}

.info-text {
  margin-top: 40px;
}

.int{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

@media screen and (max-width: 540px){
  img {display: none;}
  .info { width: 100%; }
  h3 {font-size: 7vw;}
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
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlternative: {
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
