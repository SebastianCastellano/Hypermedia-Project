<template>
    <div id="selector">
      <nuxt-link :to="prevPageUrl">
        <div id="prevGrid">
          <img id="leftArrow" src="../static/icons/leftArrow.png"/>
          <p id="prev">Previous {{type}}</p>
          <p id="prevName">{{prevName}}</p>
        </div>
      </nuxt-link>
      <div id="spacer"></div>
      <nuxt-link :to="prevPageUrl">
        <div id="nextGrid">
          <img id="rightArrow" src="../static/icons/rightArrow.png"/>
          <p id="nextt">Next {{type}}</p>
          <p id="nextName">{{nextName}}</p>
        </div>
      </nuxt-link>
    </div>
</template>

<script>
export default {
  name: 'EventTitleBanner',
  props: {
    type: {
      type: String,
      required: true,
    },
    prevName: {
      type: String,
      required: true,
    },
    nextName: {
      type: String,
      required: true,
    },
    prevPageUrl: {
      type: String,
      required: true,
    },
    nextPageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
    #selector{
      display: flex;
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

    #prev{
      margin: 0;
      margin-top: 2vh;
      padding: 0;
      font-size: 90%;
    }

    #prevName{
      margin: 0;
      margin-bottom: 1vh;
      padding: 0;
      font-size: 150%;
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

    #next{
      margin: 0;
      margin-top: 2vh;
      padding: 0;
      font-size: 90%;
      text-align: right;
    }

    #nextName{
      margin: 0;
      margin-bottom: 1vh;
      padding: 0;
      font-size: 150%;
      text-align: right;
    }

    #spacer{
      flex: 2;
    }
</style>