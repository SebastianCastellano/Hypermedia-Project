<template>
  <!-- This component rapresent a card of an event (showing essential info about an event: image, name, date, short description)
  This component is used in event list page (and also in summer / winter events list pages) -->
  <div class="card">
    <nuxt-link :to="'/events/'+id">
    <div class="img-container">
      <img
        class="card-img-top card-image"
        :src="image"
        :alt="alternative"/>
    </div>
      <div class="card-body">
        <p class="card-title title-font">{{ name }}</p>
        <p class="card-title imp-info">{{ date }}</p>
        <p class="card-text">{{ shortDescription }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.card {
  width: 15rem;
  border: 2px solid var(--color1);
  background: var(--color2);
}
.card:hover {
  background: var(--color1-light);
  /*border: 2px solid var(--color1);*/
}

.img-container { 
  height:140px;
  }

.card-image {
  margin-top: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 140px; */
  border: 1px solid var(--color1);
  width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
}

.card-text {
  text-align: left;
}

.card-title {
  font-size: clamp(15px,2.0vmax,20px); 
  text-align: center; 
}

.card-body{ font-size: clamp(15px,2.0vmax,20px); }

</style>

<script>
export default {
  name: 'CardComponent2',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: String,
      required: true,
    },
  },
}
</script>
