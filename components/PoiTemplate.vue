<template>
  <div class="page container mt-5">
    <div class="event-box">
      <nuxt-link class="flex-container" :to="'/events/'+eventId">
        <img
          class="column"
          :src="thumbnailEvent"
          :alt="alternativeThumbEvent"/>
        <div class="info column">
          <div class="info-text">
            <h3 class="title-font">{{nameEvent}}</h3>
            <h4>{{periodEvent}}</h4>
            <p>{{shortDescriptionEvent}}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

.page {
  margin-top: 20px !important;
}

a {
  text-decoration: none;
  color: inherit;
}

.event-box {
  border: 2px solid var(--color1);
  padding: 0;
}

.event-box:hover {
  background-color: var(--color1-light);
}

.flex-container {
  display: flex;
}

img {
  height: 150px;
  max-width: 40% !important;
}

.info {
  text-align: center;
  width: 100%;
}

.info p {
  padding: 0;
  margin: 0;
}

.info-text {
  margin-top: 40px;
}

h4 {
  font-size: 110%;
}

</style>

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
    alternativeThumbEvent: {
      type: String,
      requitred: true,
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
