<template>
  <!-- This component rapresent a card of an itinerary (showing essential info about an event: image, name, duration, lenght, short description)
  This component is used in itinerary list page
  This component is used also in point of interest page to visualize which itineraries involving that point of interest -->
  <div class="card mb-3 w-100" style="max-width: 540px;">
    <nuxt-link :to="'/itineraries/'+id">
      <div class="row g-0">
        <div class="col-md-4 img-container">
          <img :src="imageUrl" class="img-fluid rounded-start thumbnail h-100" :alt="alternativeThumbEvent">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title title-font">{{name}}</h5>
            <p class="card-text text-muted itinerary-duration">{{duration}} - {{length}}</p>
            <p class="card-text itinerary-desc">{{shortDescription}}</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
  
</template>

<style scoped>
  a{
    text-decoration: none; 
    color: black;
  }

  .card:hover .row { background-color: var(--color1-light); }

  .card-body{
    padding: 16px;
    padding-bottom: 12px;
  }

  @media screen and (max-width: 767.5px){
    .img-container{
      height: min(20vh, 20vw) !important;
      overflow: hidden;
    }
    
    .thumbnail {  
      width: 100%;
      height: auto !important;
      object-fit: cover;
    }
  }

  .thumbnail {  
    object-fit: cover;
  }

  .card{
    border-color: #f22222;
  }

  .itinerary-desc{
    margin: 0;
  }
  .itinerary-duration{
    margin-bottom: 5px;
  }

  .card-title{
    margin: 0;
  }

  h5{
    font-size: 1.1rem;
  }

  @media screen and (max-width: 426px){
    .itinerary-desc{
      display: none;
    }

    .itinerary-duration{
      margin: 0;
    }

    .card-body{
      padding: 10 px
    }
  }

</style>

<script>
export default {
  name: 'ItinerarySideCard',
  props: {
    id: { // The id of the itinerary
      type: Number,
      required: true,
    },
    name: { // The name of the itinerary
      type: String,
      required: true,
    },
    imageUrl: { // An image representing the itinerary
      type: String,
      required: true,
    },
    imageAlternative: { // A string alternative to the image
      type: String,
      required: true,
    },
    duration: { // The duration of the itinerary
      type: String,
      required: true,
    },
    length: { // The lenght of the itinerary
      type: String,
      required: true,
    },
    shortDescription: { // A short description about the itinerary
      type: String,
      required: true,
    },
  },
}
</script>
