<template>
  <!-- This is the template of the title banner,
  a component used in an event page or in a point of interest page to visualize the name of the event / point of interest,
  a slideshow with the images of the event / point of interest,
  and other essential info about (for example, in case of the event, when the event is, where the event is, the price) -->
  <!-- This title banner is used also in an itinerary page -->
  <div>
    <div class="titleBanner">
      <div id="bannerText">
        <!-- The title of the event / point of interest / itinerary -->
        <h1 id="bannerTitle" class="title-font title">{{title}}</h1>
        <!-- The content of essential info about the event / point of interest / itinerary -->
        <div id="contentWrapper">
          <slot name="content"></slot>
        </div>
      </div>
      <!-- The media related to the event / point of interest / itinerary -->
      <div id="mediaWrapper">
        <slot name="media"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBanner',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
    @media screen and (max-width: 940px) {
      .titleBanner{
        display: block;
        background-color: #b2222200;
        position: relative;
      }

      #bannerText{
        background-color: #b22222;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      #mediaWrapper > *{
        margin-top: 20px;
      }

      #contentWrapper > *{
        margin-top: 2vh;
        padding-bottom: 2px;
      }

      #bannerTitle{
        margin-left: 10px;
        margin-right: 10px;
        color: #ffffff !important;
        text-align: center;
        font-size: calc(15px + 2vw);
      }
    }

    @media screen and (min-width: 940px) {
      .titleBanner{
        display: flex;
        flex-direction: row-reverse;
        background-color: #b22222;
      }

      #bannerText{
        margin: auto;
      }

      #contentWrapper > *{
        margin-top: 9vh;
        padding-bottom: 10px;
      }

      #bannerTitle{
        margin-left: 10px;
        margin-right: 10px;
        color: #ffffff !important;
        text-align: center;
        font-size: 3vw;
      }
    }
</style>
