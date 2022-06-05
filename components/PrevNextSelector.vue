<template>
  <!-- This component is the next / previous event selector -->
  <div id="selector">
    <!-- Previous event button -->
    <nuxt-link :to="prevPageUrl" v-if="prevPageUrl != null">
      <div id="prevGrid">
        <img id="leftArrow" alt="left arrow" src="../static/icons/leftArrow.png"/>
        <img id="leftArrowHover" alt="left arrow hover effect" src="../static/icons/leftArrowHover.png"/>
        <p id="prev">Previous {{type}}</p>
        <p id="prevName">{{prevName}}</p>
      </div>
    </nuxt-link>
    <div id="spacer"></div>
    <!-- Next event button -->
    <nuxt-link :to="nextPageUrl" v-if="nextPageUrl != null">
      <div id="nextGrid">
        <img id="rightArrow" alt="right arrow" src="../static/icons/rightArrow.png"/>
        <img id="rightArrowHover" alt="right arrow hover effect" src="../static/icons/rightArrowHover.png"/>
        <p id="next">Next {{type}}</p>
        <p id="nextName">{{nextName}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PrevNextSelector',
  props: {
    type: { // type is 'Event' (we use this component for events)
      type: String,
      required: true,
    },
    prevName: { // the name of the previuos event
      type: String,
      required: false,
    },
    nextName: { // the name of the next event
      type: String,
      required: false,
    },
    prevPageUrl: { // The previous event page
      type: String,
      required: false,
    },
    nextPageUrl: { // The next event page
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
    #selector{
      display: flex;
      align-items: center;
    }

    #prevGrid{
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

    #leftArrowHover{
      height: 5vh;
      grid-row: 1 /span 2;
      margin-top: auto;
      margin-bottom: auto;
      display: none;
    }

    #prevGrid:hover #leftArrow{
      display: none;
    }

    #prevGrid:hover #leftArrowHover{
      display: inline;
    }

    #nextGrid{
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

    #rightArrowHover{
      height: 5vh;
      grid-column: 2;
      grid-row: 1 /span 2;
      margin-top: auto;
      margin-bottom: auto;
      display: none;
    }

    #nextGrid:hover #rightArrow{
      display: inline;
    }

    #nextGrid:hover #rightArrowHover{
      display:block;
    }

    #spacer{
      flex: 2;
      min-width: 50px;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    @media screen and (max-width: 940px) {
      #next{
        margin: 0;
        margin-top: 2vh;
        padding: 0;
        font-size: 90%;
        text-align: right;
      }

      #nextName{
        margin-top: -5px;
        margin-bottom: 1vh;
        padding: 0;
        font-size: 100%;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #prev{
        margin: 0;
        margin-top: 2vh;
        padding: 0;
        font-size: 90%;
        text-align: left;
      }
  
      #prevName{
        margin-top: -5px;
        margin-bottom: 1vh;
        padding: 0;
        font-size: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    @media screen and (min-width: 940px) {
      #next{
        margin: 0;
        margin-top: 2vh;
        padding: 0;
        font-size: 90%;
        text-align: right;
      }

      #nextName{
        margin-top: -5px;
        margin-bottom: 1vh;
        padding: 0;
        font-size: 150%;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #prev{
        margin: 0;
        margin-top: 2vh;
        padding: 0;
        font-size: 90%;
        text-align: left;
      }

      #prevName{
        margin-top: -5px;
        margin-bottom: 1vh;
        padding: 0;
        font-size: 150%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
</style>
