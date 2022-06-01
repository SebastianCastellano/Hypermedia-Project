<template>
  <!-- Template used for the main part of the itinerary page, to visualize the main info of the itinerary -->
  <div class="page container mt-5">
    <h3 class="no-disp breadcrump">{{ breadcrump }}</h3>
    <h1 class="name title-font page-title">{{ name }}</h1> <!-- The name of the itinerary -->
    <div class="info-box"> <!-- A box with the main info about the itinerary -->
      <p>Starting Point: {{ start }}</p>
      <p>Length: {{ length }}</p>
      <p>Average Duration: {{ duration }}</p>
    </div>
    <img
        class="no-disp column"
        :src="imageUrl"
        :alt="imageAlternative"/>
    <p class="description">{{ description }}</p>
    <div class="map"> <!-- The map of the itinerary -->
      <iframe :src="map" width="100%" height="300vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style scoped>

.map{
 margin: auto;
}

.name { text-align: center; }
.no-disp { display: none; }

.info-box {
  margin: 25px auto;
  border: 2px solid var(--color1);
  background-color: var(--color1-light);
  padding: 5px;
  max-width: 200px;
}

.info-box p {
  font-weight: bold;
  margin: 5px 0px;
  padding: 0;
}

.description {
  margin-bottom: 25px;
}

</style>

<script>
export default {
  name: 'EventPoiTemplate',
  props: {
    name: { // The name of the itinerary
      type: String,
      required: true,
    },
    breadcrump: {
      type: String,
      required: true,
    },
    duration: { // The duration of the itinerary
      type: String,
      required: true,
    },
    length: { // The lenght of the itinerary
      type: String,
      required: true,
    },
    imageUrl: { // An image representing the itinerary
      type: String,
      required: true,
    },
    imageAlternative: { // A string alternative to the image
      type: String,
      required: true,
    },
    description: { // A description about the itinerary
      type: String,
      required: true,
    },
    map: { // A map of the itinerary
      type: String,
      required: true,
    },
    start: { // The name of the first point of interest of the itinerary
      type: String,
      required: true,
    }
  },
}
</script>
