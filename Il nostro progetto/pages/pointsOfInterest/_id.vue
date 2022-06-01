<template>
  <div>
    <!--<prev-next-selector v-if="idPreviousEvent==-1 && idNextEvent!=-1"
      type="Event"
      :nextName="nameNextEvent"
      :nextPageUrl="'/events/'+idNextEvent"
    />
    <prev-next-selector v-else-if="idPreviousEvent!=-1 && idNextEvent==-1"
      type="Event"
      :prevName="namePreviousEvent"
      :prevPageUrl="'/events/'+idPreviousEvent"
    />
    <prev-next-selector v-else-if="idPreviousEvent!=-1 && idNextEvent!=-1"
      type="Event"
      :prevName="namePreviousEvent"
      :prevPageUrl="'/events/'+idPreviousEvent"
      :nextName="nameNextEvent"
      :nextPageUrl="'/events/'+idNextEvent"
    />-->
    <!-- Here there are the main info of the point of interest: the name, the opening times, where the point of interest is and the price -->
    <title-banner :title="name">
      <template v-slot:media>
        <slide-show :imagesUrl="imagesUrl" :imgAlternatives="imagesAlternative" height="40vh" width="71vh" :keepRatio="false" />
      </template>
      <template v-slot:content>
        <div id="info">
          <div id="first">
            <div id="when">When:</div>
            <div id="date">{{dateTime}}</div>
          </div>
          <div id="second">
            <div id="where">Where:</div>
            <div id="location">{{location}}</div>
          </div>
          <div id="third">
            <div id="cost">Price:</div>
            <div id="price">{{price}}</div>
          </div>
        </div>
      </template>
    </title-banner>
    <!-- Description of the point of interest -->
    <div class="page-content">
      <p id="description">{{description}}</p>
      <div id="side">
        <!-- A list of cards of the events witch take place in this point of interest -->
        <div class="list">
          <div v-if="associatedEventList[0]">
            <h3 class="title-font list-title">Events hosted in {{name}}: </h3>
            <poi-template
            v-for="(event, eventIndex) of associatedEventList"
            :key="`event-index-${eventIndex}`"
            :eventId="event.id"
            :thumbnailEvent="event.imagesUrl[0]"
            :alternativeThumbEvent="event.imagesAlternative[0]"
            :nameEvent="event.name"
            :shortDescriptionEvent="event.shortDescription"
            :periodEvent="event.date_s"/>
          </div>
        </div>
        <div class="list">
          <div v-if="associatedItineraryList[0]">
            <h3 class="title-font list-title">Itineraries including {{name}}: </h3>
            <card-itinerary
            v-for="(itinerary, itineraryIndex) of associatedItineraryList"
            :key="`itinerary-index-${itineraryIndex}`"
            :id="itinerary.id"
            :name="itinerary.name"
            :duration="itinerary.duration"
            :length="itinerary.length"
            :shortDescription="itinerary.shortDescription"
            :imageUrl="itinerary.imageUrl"
            :imageAlternative="itinerary.imageAlternative"
            />
    </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- this is a point of interest page, a page to visualize a specific point of interest -->

<style scoped>
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
}

@media screen and (max-width: 940px){
  #info > div{
    padding-left: 2vw;
    padding-right: 2vw;
    color: #ffffff;
    text-align: center;
    font-size: calc(10px + 25%);
  }
}

#info > #first, #info > #second{
  border-right-color: #ffffff;
  border-right-style: solid;
  border-right-width: 2px;
}

@media screen and (min-width: 940px) {
  .page-content{
    display: flex;
    margin-top: 7vh;
    margin-left: 5vw;
    margin-right: 5vw;
    align-items:flex-start;
  }

  #description{
    flex: 3;
    text-align: justify;
    text-justify:distribute;
    font-size: 120%;
    margin-right: 5vw;
  }

  .list-title{
    padding-top: 30px;
  }
}

@media screen and (max-width: 940px) {
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
}

#side{
  margin-left: 10px;
  flex: 2;
}
</style>

<script>
import PoiTemplate from '~/components/PoiTemplate.vue' // The component used to visualize a card with an event
// import PrevNextSelector from '~/components/PrevNextSelector.vue'
import TitleBanner from '~/components/TitleBanner.vue' // A component used to visualize the name of the point of interest,
// a slideshow with the images of the point of interest,
// and other essential info about the point of interest (opening times, where the point of interest is, the price)
export default {
  name: 'EventPage',
  components: {
    PoiTemplate,
    // PrevNextSelector,
    TitleBanner,
},
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pointOfInterestAndAssociatedEventsAndAssociatedItineraries/' + id) // we use this api to get all useful info about this point of interest
    const name = data[0].name
    const description = data[0].description
    const dateTime = data[0].times
    const location = data[0].location
    const price = data[0].price
    const imagesUrl = data[0].imagesUrl
    const imagesAlternative = data[0].imagesAlternative
    const videosUrl = data[0].videosUrl
    const videosAlternative = data[0].videosAlternative
    return {
      name,
      description,
      dateTime,
      location,
      price,
      imagesUrl,
      imagesAlternative,
      videosUrl,
      videosAlternative,
      associatedEventList: data[1],
      associatedItineraryList: data[2]
    }
  },
}
</script>
