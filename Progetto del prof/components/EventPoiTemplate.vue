<template>
    <div>
        <h1 class="name">{{ title }}</h1>
        <h2 class="breadcrump">{{ breadcrump }}</h2>
        <h3 class="info">{{ info }}</h3>
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
    info: {
      type: String,
      required: true,
    },
  },
}
</script>
