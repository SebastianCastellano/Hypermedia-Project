<template>
    <div>
        <h1 class="name">{{ name }}</h1>
        <h2 class="breadcrump">{{ breadcrump }}</h2>
        <h3 class="duration">{{ duration }}</h3>
        <h3 class="length">{{ length }}</h3>
        <h3 class="description">{{ description }}</h3>
        <h3 class="map">{{ map }}</h3>
        <!-- AGGIUNGERE ANCHE LE INFORMAZIONI OTTENUTE TRAMITE LA MANY TO MANY CHE SONO DEI LINK -->
    </div>
</template>

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
  },
}
</script>
