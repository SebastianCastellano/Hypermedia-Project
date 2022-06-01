<template>
  <div>
    <div class="titleBanner">
      <div id="bannerText">
        <h1 id="bannerTitle" class="title-font title">{{title}}</h1>
        <div id="contentWrapper">
          <slot name="content"></slot>
        </div>
      </div>
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