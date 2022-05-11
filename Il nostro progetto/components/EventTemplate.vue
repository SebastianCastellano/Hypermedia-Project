<template>
    <div>
        <nuxt-link :to="'/pointsOfInterest/'+poiId" class="btn btn-primary btn-orange">
              Go to {{namePoi}}
          </nuxt-link>
          <p>{{shortDescriptionPoi}}</p>
          <div>
            <p>{{thumbnailPoi}}</p>
            <!-- <img src= {{ thumbnailPoi }} > C'È UN PROBLEMA NEL VISUALIZZARE QUESTA IMMAGINE COME IMMAGINE
            sennò il testo dell'url dell'immagine lo visualizza -->
          </div>
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
