<template>
  <div>
    <event-poi-template :name="name" :breadcrump="breadcrump" :description="description" :dateTime="dateTime"
    :location="location" :price="price" :images="images" :videos="videos"/>
    <event-template :poiId="poiId" :thumbnailPoi="thumbnailPoi" :namePoi="namePoi" :shortDescriptionPoi="shortDescriptionPoi"/>
  </div>
</template>

<!--
<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
import EventTemplate from '~/components/EventTemplate.vue'
export default {
  name: 'EventPage',
  components: {
    EventPoiTemplate,
    EventTemplate,
  },
/*
  methods: {
    loadPoi: function () {
      axios.get('/api/pointOfInterest/' + poiId, {
        params: _.omit(this.selected, 'poiId')
      })
      .then((response) => {
        this.selected = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
*/
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    const name = data.name
    const breadcrump = "breadcrump"
    const description = data.description
    const dateTime = new Date(data.date).toLocaleDateString()
    const location = data.location
    const price = data.price
    const images = data.images
    const videos = data.videos
    const poiId = data.poiId

    const thumbnailPoi = "aaaaa"
    const namePoi = "aaaaa"
    const shortDescriptionPoi = "aaaaa"
    // sistemareeeeee
  
/*
const { dataPoi } = $axios.get('/api/pointOfInterest/' + poiId).then((response) => {
  const thumbnailPoi = response.images
  const namePoi = response.name
  const shortDescriptionPoi = response.shortDescription
  console.log(namePoi)
  return {
    thumbnailPoi,
    namePoi,
    shortDescriptionPoi,
  }
})
const thumbnailPoi = dataPoi.thumbnailPoi
const namePoi = dataPoi.namePoi
const shortDescriptionPoi = dataPoi.shortDescriptionPoi
*/

// SISTEMAREEEEE

// console.log(dataPoi)
// console.log(dataPoi.name)

// const response = loadPoi()
// const thumbnailPoi = response.thumbnailPoi
// const namePoi = response.namePoi
// const shortDescriptionPoi = response.shortDescriptionPoi

// const response = await $axios.get('/api/pointOfInterest/' + poiId)
  // const thumbnailPoi = response.thumbnailPoi
  // const namePoi = response.namePoi
  // const shortDescriptionPoi = response.shortDescriptionPoi

    // const aaares = aaa(route, $axios, poiId)
    // const thumbnailPoi = "ggg" // aaares.thumbnailPoi
    // const namePoi = "wddd" // aaares.namePoi
    // const shortDescriptionPoi = "jjyjy" // aaares.shortDescriptionPoi
    return {
      name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      images,
      videos,
      poiId,
      thumbnailPoi,
      namePoi,
      shortDescriptionPoi,
    }
  },
}
/*
async function aaa({route, $axios, poiId}){
  const { dataPoi } = await $axios.get('/api/pointOfInterest/' + poiId)
      console.log("wasd")
      console.log(dataPoi)
      const thumbnailPoi = dataPoi.images
      const namePoi = dataPoi.name
      const shortDescriptionPoi = dataPoi.shortDescription
      console.log(shortDescriptionPoi)
      return{
        thumbnailPoi,
        namePoi,
        shortDescriptionPoi,
      }
}
*/
</script>
-->

<script>
import EventPoiTemplate from '~/components/EventPoiTemplate.vue'
import EventTemplate from '~/components/EventTemplate.vue'
export default {
  name: 'EventPage',
  components: {
    EventPoiTemplate,
    EventTemplate,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/eventAndAssociatedPointOfInterest/' + id)
    const name = data[0].name
    const breadcrump = "breadcrump"
    const description = data[0].description
    const dateTime = new Date(data[0].date).toLocaleDateString()
    const location = data[0].location
    const price = data[0].price
    const images = data[0].images
    const videos = data[0].videos
    const poiId = data[0].poiId
    const thumbnailPoi = data[1].images[0]
    const namePoi = data[1].name
    const shortDescriptionPoi = data[1].shortDescription
    return {
      name,
      breadcrump,
      description,
      dateTime,
      location,
      price,
      images,
      videos,
      poiId,
      thumbnailPoi,
      namePoi,
      shortDescriptionPoi,
    }
  },
}
</script>
