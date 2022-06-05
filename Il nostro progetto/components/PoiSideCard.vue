<template>
  <!-- Component used to visualize a card with a point of interest (showing essential info about the point of interest: image, name, short description) -->
  <!-- This component is used in an event page (to visualize the point of interest where the event is hosted)
  and in an itinerary page (to visualize the points of interest belonging to the itinerary) -->
  <nuxt-link :to="'/pointsOfInterest/'+poiId">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4 img-container">
          <!-- An image representing the point of interest -->
          <img :src="thumbnailPoi" class="img-fluid rounded-start thumbnail h-100" :alt="alternativeThumbPoi">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <!-- Other little information about the point of interest -->
            <h5 class="card-title title-font">{{namePoi}}</h5>
            <p class="card-text">{{shortDescriptionPoi}}</p>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped>
  a{
    text-decoration: none; 
    color: black;
  }

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

  .card-text{
    margin-top: 5px;
  }

  .card-title{
    margin: 0;
  }

  h5{
    font-size: 1.1rem;
  }

  @media screen and (max-width: 426px){
    .card-text{
      display: none;
    }

    .card-body{
      padding: 10 px
    }
  }
</style>

<script>
export default {
  name: 'PoiSideCard',
  props: {
    poiId: { // The id of the point of interest
      type: Number,
      required: true,
    },
    thumbnailPoi: { // An image representing the point of interest
      type: String,
      required: true,
    },
    alternativeThumbPoi: { // A string alternative to the image
      type: String,
      required: true,
    },
    namePoi: { // The name of the point of interest
      type: String,
      required: true,
    },
    shortDescriptionPoi: { // A description of the point of interest
      type: String,
      required: true,
    },
  },
}
</script>
