<template>
    <div v-if="eventId >= 0">
        <nuxt-link :to="'/events/'+eventId" class="btn btn-primary btn-orange">
              Go to {{nameEvent}}
          </nuxt-link>
          <p>{{shortDescriptionEvent}}</p>
          <p>{{periodEvent}}</p>
          <div>
            <p>{{thumbnailEvent}}</p>
            <!-- <img src= {{ thumbnailPoi }} > POTREBBE ESSERCI UN PROBLEMA NEL VISUALIZZARE QUESTA IMMAGINE COME IMMAGINE
            sennò il testo dell'url dell'immagine lo visualizza -->
          </div>
    </div>
</template>

<script>
export default {
  name: 'PoiTemplate',
  props: {
    eventId: {
      type: Number,
      required: true,
    },
    thumbnailEvent: {
      type: String,
      required: true,
    },
    nameEvent: {
      type: String,
      required: true,
    },
    shortDescriptionEvent: {
      type: String,
      required: true,
    },
    periodEvent: {
      type: String,
      required: true,
    },
  },
}
</script>
