<template>
  <div>
    <!-- A box with the main info about the itinerary: title, duration, lenght, starting point -->
    <title-banner :title="name">
      <template v-slot:media>
        <img id="title-image" :src="imageUrl" :alt="imageAlternative">
        <!-- An image rapresenting the itinerary -->
      </template>
      <template v-slot:content>
        <div id="info">
          <div id="first">
            <div id="time">Duration:</div>
            <div id="duration">{{duration}}</div>
          </div>
          <div id="second">
            <div id="space">Length:</div>
            <div id="length">{{length}}</div>
          </div>
          <div id="third">
            <div id="start">Starting Point:</div>
            <div id="startingPoint">{{associatedPoiList[0].name}}</div>
          </div>
        </div>
      </template>
    </title-banner>
    <div class="page-content">
      <div id="page-body">
        <p id="description">{{description}}</p>
        <iframe :src="map" title="Map of the itinerary" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <!-- The map of the itinerary -->
      </div>
      <div id="side">
        <div class="list">
          <h3 class="title-font list-title">Inside {{name}}: </h3>
          <poi-side-card
            v-for="(poi, poiIndex) of associatedPoiList"
            :key="`poi-index-${poiIndex}`"
            :poiId="poi.id"
            :thumbnailPoi="poi.imagesUrl[0]"
            :alternativeThumbPoi="poi.imagesAlternative[0]"
            :namePoi="poi.name"
            :shortDescriptionPoi="poi.shortDescription"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- this is an itinerary page, a page to visualize a specific itinerary -->

<style scoped>
#title-image{
  height: 40vh;
  margin-left: auto;
  margin-right: auto;
}

iframe{
  margin-top: 5vh;
  height: 60vh;
  width: 100%;
  display: block;
}

#spacer{
  flex: 2;
}

#info{
      display: Flex;
      width: fit-content;
      height: fit-content;
      margin-left: auto;
      margin-right: auto;
}

#info > #first, #info > #second{
  border-right-color: #ffffff;
  border-right-style: solid;
  border-right-width: 2px;
}

#side{
  margin-left: 10px;
  flex: 2;
}

@media screen and (min-width: 940px){
  #descButton{
    display: none;
  }

  #info > div{
    padding-left: 2vw;
    padding-right: 2vw;
    color: #ffffff;
    text-align: center;
    font-size: calc(12px + 1vh);
  }

  .page-content{
    display: flex;
    margin-top: 7vh;
    margin-left: 5vw;
    margin-right: 5vw;
    align-items:flex-start;
  }

  #page-body{
    flex: 3 ;
    position: relative;
    margin-right: 5vw;
    height: 100%;
  }

  #description{
    text-align: justify;
    text-justify:distribute;
    font-size: 120%;
  }

  .list-title{
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 940px){
  #info > div{
    padding-left: 2vw;
    padding-right: 2vw;
    color: #ffffff;
    text-align: center;
    font-size: calc(10px + 25%);
  }

  .page-content{
    margin-top: 7vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  #description{
    flex: 3;
    text-align: justify;
    text-justify:distribute;
    font-size: 120%;
  }

  .list-title{
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 425px) {
  #title-image{
    height: auto;
    width: 100%;
  }
}
</style>

<script>
import PoiSideCard from '~/components/PoiSideCard.vue' // The component used to visualize a card with a point of interest,
import TitleBanner from '~/components/TitleBanner.vue' // A component used to visualize the name of the point of interest,
// (in this page we visualize as many cards as many points of interests are there in this itinerary)
export default {
  name: 'ItineraryTemplatePage',
  components: {
    PoiSideCard,
    TitleBanner
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraryAndAssociatedPointOfInterest/' + id) // we use this api to get all useful info about this itinerary
    const name = data[0].name
    const duration = data[0].duration
    const length = data[0].length
    const description = data[0].description
    const map = data[0].map
    const imageUrl = data[0].imageUrl
    const imageAlternative = data[0].imageAlternative
    return {
      name,
      duration,
      length,
      description,
      map,
      associatedPoiList: data[1],
      imageUrl,
      imageAlternative,
    }
  },
}
</script>
