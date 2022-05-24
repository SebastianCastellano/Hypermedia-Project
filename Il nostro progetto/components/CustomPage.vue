<template>
  <!--
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-4 title-font page-title">{{ title }}</h1>
      <img :src="image" alt="prova" />
      <hr class="my-4" />
      <p class="lead">{{ shortOverview }}</p>
    </div>
  </div>
  -->
  <div> 
    
    <section id="events">
      <nuxt-link to="/eventList">
        <h1 class="title-font">Discover the next events</h1>
      </nuxt-link>
      <div class="arrowContainer">
          <a href="#points" class="arrowDownLink">
              <img src="../static/icons/downArrow.png" class="arrowDown"/>
              <img src="../static/icons/downArrowHover.png" class="arrowDownHover"/>
          </a>
      </div>
    </section>
    <nuxt-link to="/pointsOfInterestList">
      <section id="points">
        <h1 class="title-font">The treasures Mantova contains</h1>
      </section>
    </nuxt-link>
    <nuxt-link to="/itineraryList">
      <section id="itineraries">
        <h1 class="title-font">Let us guide you into beauty</h1>
      </section>
    </nuxt-link>
    <nuxt-link to="/servicesList">
      <section id="services">
        <h1 class="title-font">Everything you might need</h1>
      </section>
    </nuxt-link>
    <nuxt-link to="/aboutMantova">
      <section id="about">
        <h1 class="title-font">Why is Mantova so special?</h1>
      </section>
    </nuxt-link>
  </div>
  
  <!--
  <div class="container mt-5">
    <h1 class="title-font page-title">{{ title }}</h1>
    <section class="overview-section flex-container">
      <div>
        <img :src="image" alt="prova" />
        <img :src="image" alt="prova" />
      </div>
      <p class="overview">{{ shortOverview }}</p>
    </section>
    <h1 class="intermediate-title title-font page-title">A glimpse of history(mancano gli alt)</h1>
    <section class="overview-section flex-container">
      <p class="overview">{{ shortOverview }}</p>
      <div>
        <img class="right-img" :src="image" alt="prova" />
        <img class="right-img" :src="image" alt="prova" />
      </div>
    </section>
  </div>
  -->
</template>

<style scoped>

section {
  display: block;
  margin: 0;
  height: 100vh;
  padding-top: 35vh;
  border: 5px solid white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

h1 {
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  text-align: center;
  color: var(--color2);
  background-color: var(--color1-main);
  border: 2px solid var(--color1);
  font-size: 300%;
  width: fit-content;
}

.arrowContainer {
  margin-top: 25vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.arrowDownHover{
  display: none;
}

.arrowDownLink:hover .arrowDown{
  display:none;
}

.arrowDownLink:hover .arrowDownHover{
  display: inline;
}

#events { background-image: url("../static/images/palazzoDucale-cameraSposi2.jpg");}
#points { background-image: url("../static/images/palazzoTe-giganti1.jpg"); }
#itineraries { background-image: url("../static/images/piazzaVirgiliana2.jpg"); }
#services { background-image: url("../static/images/mappaAntica1.jpg"); }
#about { background-image: url("../static/images/skyline1.jpg"); }

a {
  text-decoration: none;
  color: inherit;
}

h1:hover{
  color: var(--color1);
  background-color: rgb(255, 255, 255, 0.8);
}

/*
section { display: flex; }
.title-font { text-align: center; }

img {
  max-height: 300px;
  width: 40vw;
  margin: 15px 5vw 15px 0;
}

p {
  padding-top: 1%;
  margin-right: 5vw;
  text-align: justify;
}

.intermediate-title {
  margin-top: 50px;
}

.img-right {
  max-height: 300px;
  width: 40vw;
  margin: 15px 0 15px 0;
}
*/
</style>

<script>
export default {
  name: 'CustomPage',
  layout: 'header-only',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    shortOverview: {
      type: String,
      required: true,
    },
  },
}
</script>
