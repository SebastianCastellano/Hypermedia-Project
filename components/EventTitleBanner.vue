<template>
    <div class="eventBanner">
      <img class="eventMedia" :src="eventImagesUrl[0]" :alt="imgAlternatives[0]">
      <div id="bannerText">
        <h1 class="title-font title">{{eventName}}</h1>
        <div id="infoGrid">
          <div id="when">When:</div>
          <div id="where">Where:</div>
          <div id="cost">Price:</div>
          <div id="date">{{date}}</div>
          <div id="location">{{location}}</div>
          <div id="price">{{price}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'EventTitleBanner',
  props: {
    eventName: {
      type: String,
      required: true,
    },
    eventImagesUrl: {
      type: Array,
      required: true,
    },
    imgAlternatives: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
    .eventBanner{
      display: flex;
      background-color: #b22222;
    }

    .eventMedia{
      height: 40vh;
    }

    #bannerText{
      margin: auto;
    }

    .title-font{
      color: #ffffff;
      text-align: center;
    }

    #infoGrid{
      display: grid;
      grid-template-columns: auto auto auto;
      column-gap: 10px;
      width: fit-content;
      height: fit-content;
      background-color: #ffffff;
      column-gap: 2px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 9vh;
    }

    #infoGrid > div{
      padding-left: 40px;
      padding-right: 40px;
      background-color: #b22222;
      color: #ffffff;
      font-size: 120%;
    }
</style>