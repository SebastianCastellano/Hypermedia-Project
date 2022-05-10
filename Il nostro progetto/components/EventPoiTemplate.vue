<template>
    <div>
        <h1 class="name">{{ name }}</h1>
        <h2 class="breadcrump">{{ breadcrump }}</h2>
        <h3 class="description">{{ description }}</h3>
        <p>{{dateTime}}</p> <p>{{location}}</p> <p>{{price}}</p> <p>{{images}}</p> <p>{{videos}}</p>
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
    description: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    videos: {
      type: Array,
      required: true,
    },
  },
}
</script>
