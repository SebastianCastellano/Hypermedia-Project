<template>
    <div class="page container mt-5">
      <h3 class="breadcrump">{{ breadcrump }}</h3>
      <h1 class="name title-font page-title">{{ name }}</h1>
      <div class="info-box">
        <p>Starting Point: {{ start }}</p>
        <p>Length: {{ length }}</p>
        <p>Average Duration: {{ duration }}</p>
      </div>
      <p class="description">{{ description }}</p>
      <h3 class="map">MAPPAMAPPAMAPPAMAPPAMAPPA{{ map }}</h3>
      <!-- AGGIUNGERE ANCHE LE INFORMAZIONI OTTENUTE TRAMITE LA MANY TO MANY CHE SONO DEI LINK -->
    </div>
</template>

<style scoped>
.name {
  text-align: center;
}

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
