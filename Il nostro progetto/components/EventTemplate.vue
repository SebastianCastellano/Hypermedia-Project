<template>
    <div>
        <nuxt-link :to="'/pointsOfInterest/'+poiId" class="btn btn-primary btn-orange">
              Go to {{namePoi}}
          </nuxt-link>
          <p>{{shortDescriptionPoi}}</p>
          <div
              class="card-img-top card-imagettttttttttttttt"
              :style="{ 'background-image': 'url(' + thumbnailPoi + ')' }"
          ></div>
    </div>
</template>

<script>
export default {
  name: 'EventTemplate',
  props: {
    poiId: {
      type: Number,
      required: true,
    },
    thumbnailPoi: {
      type: String,
      required: true,
    },
    namePoi: {
      type: String,
      required: true,
    },
    shortDescriptionPoi: {
      type: String,
      required: true,
    },
  },
}
</script>
