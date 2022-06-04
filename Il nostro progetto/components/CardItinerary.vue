<template>
  <!-- This component rapresent a card of an itinerary (showing essential info about an event: image, name, duration, lenght, short description)
  This component is used obiously in itinerary list page,
  and it is also used in point of interest page to visualize whitch itineraries involving that point of interest -->
  <div class="page container mt-5">
    <div class="poi-box">
      <nuxt-link class="flex-container" :to="'/itineraries/' + id">
        <div class="img-container">
          <img class="column" :src="imageUrl" :alt="imageAlternative" />
        </div>
        <div class="info column">
          <div class="info-text">
            <h2 class="title-font">{{ name }}</h2>
            <div class="p-info">
              <div class="int">Average duration: {{ duration }} --- Length: {{ length }}</div>
            </div>
            <div class="p-info">
              <div class="int">{{ shortDescription }}</div>
            </div>
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

h3 {
  font-size: 1.75rem;
}

.poi-box:hover {
  background-color: var(--color1-light);
}

.flex-container {
  display: flex;
}

.img-container { 
  width: 30%;
}

img {
  border: 1px solid var(--color1);
  width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
}

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

.int {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

@media screen and (max-width: 540px) {
  .img-container {
    display: none;
  }

  .info {
    width: 100%;
  }

  h3 {
    font-size: 7vw;
  }
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
