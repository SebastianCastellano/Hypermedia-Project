<template>
    <div class="page container mt-5">
      <h3 class="no-disp breadcrump">{{ breadcrump }}</h3>
      <h1 class="name title-font page-title">{{ name }}</h1>
      <div class="info-box">
        <p>Starting Point: {{ start }}</p>
        <p>Length: {{ length }}</p>
        <p>Average Duration: {{ duration }}</p>
      </div>
      <img
          class="no-disp column"
          :src="imageUrl"
          :alt="imageAlternative"/>
      <p class="description">{{ description }}</p>
      <div class="map">
        <iframe :src="map" width="100%" height="300vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <!-- AGGIUNGERE ANCHE LE INFORMAZIONI OTTENUTE TRAMITE LA MANY TO MANY CHE SONO DEI LINK -->
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
    name: {
      type: String,
      required: true,
    },
    breadcrump: {
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
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlternative: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    map: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    }
  },
}
</script>
