<template>
  <!-- This is a component to visualize a card with an event (showing essential info about the event: image, name, date, short description)
  This component is used in a point of interest page to show all events in that point of interest -->
  <div class="card mb-3 w-100" style="max-width: 540px;">
    <nuxt-link :to="'/events/'+eventId">
      <div class="row g-0">
        <div class="col-md-4 img-container">
          <img :src="thumbnailEvent" class="img-fluid rounded-start thumbnail h-100" :alt="alternativeThumbEvent">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title title-font">{{nameEvent}}</h5>
            <p class="card-text text-muted event-date">{{periodEvent}}</p>
            <p class="card-text event-desc">{{shortDescriptionEvent}}</p>
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

  .event-desc{
    margin: 0;
  }
  .event-date{
    margin-bottom: 5px;
  }

  .card-title{
    margin: 0;
  }

  h5{
    font-size: 1.1rem;
  }

  @media screen and (max-width: 426px){
    .event-desc{
      display: none;
    }

    .event-date{
      margin: 0;
    }

    .card-body{
      padding: 10 px
    }
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
