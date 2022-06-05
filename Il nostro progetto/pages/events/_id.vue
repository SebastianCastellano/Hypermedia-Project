<template>
  <div>
    <!-- This is a selector to go to previous / next event (ordered by date) -->
    <prev-next-selector v-if="idPreviousEvent==-1 && idNextEvent!=-1"
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
    />
    <!-- Here there are the main info of the event: the name, the date / time, where the event is and the price -->
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
    <!-- Description of the event -->
    <div class="page-content">
      <p id="description">{{description}}</p>
      <div id="poiList">
        <h2 class="title-font" id="poiTitle">The event takes place near: </h2>
        <div id="list">
          <!-- A card of the point of interest where the event takes place -->
          <poi-side-card
          :poiId="poiId"
          :thumbnailPoi="thumbnailPoi"
          :alternativeThumbPoi="alternativeThumbPoi"
          :namePoi="namePoi"
          :shortDescriptionPoi="shortDescriptionPoi"/>
        </div>
      </div>
    </div>
    <!-- The videos of the event -->
    <!-- To embed a youtube video-->
    <div class="video-visualizer">
      <iframe
        v-for="(video, videoIndex) of videosUrl"
        :key="`video-index-${videoIndex}`"
        :src="video"
        :title="videosAlternative[videoIndex]">
      </iframe>
    </div>
  </div>
</template>

<!-- this is an event page, a page to visualize a specific event -->

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

.video-visualizer{
  transform: translate(25px, 0px);
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

  #poiTitle{
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

  #poiList{
    padding-top: 30px;
  }
}

#poiList{
  flex: 2;
}

#list{
  margin-left: 10px;
}
</style>

<script>
import PoiSideCard from '~/components/PoiSideCard.vue' // A component used to visualize a card with a point of interest
// (it is used to visualize the point of interest where the event takes place)
import PrevNextSelector from '~/components/PrevNextSelector.vue' // the component used to visualize the next / previous event buttons
import TitleBanner from '~/components/TitleBanner.vue' // A component used to visualize the name of the event,
// a slideshow with the images of the event, and other essential info about the event (when the event is, where the event is, the price)
export default {
  name: 'EventPage',
  components: {
    PoiSideCard,
    PrevNextSelector,
    TitleBanner,
},
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/eventAndAssociatedPointOfInterest/' + id) // we use this api to get all useful info about this event
    const name = data[0].name
    const description = data[0].description
    const dateTime = data[0].date_s
    const location = data[0].location
    const price = data[0].price
    const imagesUrl = data[0].imagesUrl
    const imagesAlternative = data[0].imagesAlternative
    const videosUrl = data[0].videosUrl
    const videosAlternative = data[0].videosAlternative
    const poiId = data[1].id
    const thumbnailPoi = data[1].imagesUrl[0]
    const alternativeThumbPoi = data[1].imagesAlternative[0]
    const namePoi = data[1].name
    const shortDescriptionPoi = data[1].shortDescription
    const idPreviousEvent = data[2]
    const idNextEvent = data[3]
    const namePreviousEvent = data[4]
    const nameNextEvent = data[5]
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
      poiId,
      thumbnailPoi,
      alternativeThumbPoi,
      namePoi,
      shortDescriptionPoi,
      idPreviousEvent,
      idNextEvent,
      namePreviousEvent,
      nameNextEvent,
    }
  },
}
</script>
