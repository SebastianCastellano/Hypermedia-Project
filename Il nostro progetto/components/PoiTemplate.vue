<template>
  <!-- This is a template to visualize a card with an event -->
  <div class="page container mt-5">
    <div class="event-box">
      <nuxt-link class="flex-container" :to="'/events/'+eventId">
      <div class="img-container">
        <img
          class="column"
          :src="thumbnailEvent"
          :alt="alternativeThumbEvent"/>
      </div>
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
.img-container{ 
  height: 150px;
  width: 40%;
}
img {
  border: 1px solid var(--color1);
  width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
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
    eventId: { // The id of the event
      type: Number,
      required: true,
    },
    thumbnailEvent: { // An image representing the event
      type: String,
      required: true,
    },
    alternativeThumbEvent: { // A string alternative to the image
      type: String,
      requitred: true,
    },
    nameEvent: { // The name of the event
      type: String,
      required: true,
    },
    shortDescriptionEvent: { // A short description of the event
      type: String,
      required: true,
    },
    periodEvent: { // The period of the event
      type: String,
      required: true,
    },
  },
}
</script>
