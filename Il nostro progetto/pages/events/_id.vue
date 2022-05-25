<template>
  <div>
    <prev-next-selector
      type="Event"
      prevName="Event Name"
      :prevPageUrl="'/events/'+idprevEvent"
      nextName="Event Name"
      :nextPageUrl="'/events/'+idNextEvent"
    />
    <!--
    <div id="eventSelector">
      <div id="prevEventGrid">
        <img id="leftArrow" src="../../static/icons/leftArrow.png"/>
        <p id="prevEvent">Previous Event</p>
        <p id="prevEventName">Event Name</p>
      </div>
      <div id="spacer"></div>
      <div id="nextEventGrid">
        <img id="rightArrow" src="../../static/icons/rightArrow.png"/>
        <p id="nextEvent">Next Event</p>
        <p id="nextEventName">Event Name</p>
      </div>
    </div>
    -->
    <event-title-banner
      :eventName="name"
      :eventImagesUrl="imagesUrl"
      :imgAlternatives="imagesAlternative"
      :date="dateTime"
      :location="location"
      :price="price"
    />
    <div class="page-content">
      <p id="description">{{description}}</p>
      <div id="poiList">
        <h3 class="title-font poiTitle">The event takes place near: </h3>
        <div id="list">
          <event-template
          :poiId="poiId"
          :thumbnailPoi="thumbnailPoi"
          :alternativeThumbPoi="alternativeThumbPoi"
          :namePoi="namePoi"
          :shortDescriptionPoi="shortDescriptionPoi"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#eventSelector{
  display: flex;
}

#prevEventGrid{
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  width: fit-content;
  height: fit-content;
  padding-left: 2vw;
}

#leftArrow{
  height: 5vh;
  grid-row: 1 /span 2;
  margin-top: auto;
  margin-bottom: auto;
}

#prevEvent{
  margin: 0;
  margin-top: 2vh;
  padding: 0;
  font-size: 90%;
}

#prevEventName{
  margin: 0;
  margin-bottom: 1vh;
  padding: 0;
  font-size: 150%;
}

#nextEventGrid{
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  width: fit-content;
  height: fit-content;
  padding-right: 2vw;
}

#rightArrow{
  height: 5vh;
  grid-column: 2;
  grid-row: 1 /span 2;
  margin-top: auto;
  margin-bottom: auto;
}

#nextEvent{
  margin: 0;
  margin-top: 2vh;
  padding: 0;
  font-size: 90%;
  text-align: right;
}

#nextEventName{
  margin: 0;
  margin-bottom: 1vh;
  padding: 0;
  font-size: 150%;
  text-align: right;
}

#spacer{
  flex: 2;
}

.page-content{
  display: flex;
  margin-top: 7vh;
  margin-left: 5vw;
  margin-right: 5vw;
  align-items:flex-start;
}

.poiTitle{
  padding-top: 20px;
}

#poiList{
  flex: 2;
}

#list{
  margin-left: 10px;
}

#description{
  flex: 3;
  text-align: justify;
  text-justify:distribute;
  font-size: 120%;
  margin-right: 5vw;
}
</style>

<script>
import EventTemplate from '~/components/EventTemplate.vue'
import EventTitleBanner from '~/components/EventTitleBanner.vue'
import PrevNextSelector from '~/components/PrevNextSelector.vue'
export default {
  name: 'EventPage',
  components: {
    EventTemplate,
    EventTitleBanner,
    PrevNextSelector,
},
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/eventAndAssociatedPointOfInterest/' + id)
    const name = data[0].name
    const breadcrump = "breadcrump"
    const description = data[0].description
    const dateTime = data[0].date_s
    const location = data[0].location
    const price = data[0].price
    const imagesUrl = data[0].imagesUrl
    const imagesAlternative = data[0].imagesAlternative
    const videosUrl = data[0].videosUrl
    const videosAlternative = data[0].videosAlternative
    const poiId = data[0].id
    const thumbnailPoi = data[1].imagesUrl[0]
    const alternativeThumbPoi = data[1].imagesAlternative[0]
    const namePoi = data[1].name
    const shortDescriptionPoi = data[1].shortDescription
    const idPreviousEvent = data[2]
    const idNextEvent = data[3]
    return {
      name,
      breadcrump,
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
    }
  },
}
</script>
