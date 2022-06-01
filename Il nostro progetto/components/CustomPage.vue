<template>
  <div>
    <!-- This is the template for the home page -->
    <!-- The home page is divided in different sections -->
    <section id="events">
      <nuxt-link to="/eventList">
        <!-- this is a link to the event list page -->
        <h1 id="first-section" class="title-font">Discover the next events</h1>
      </nuxt-link>
      <div class="downArrowContainer">
        <!-- This is an arrow to move more easly in the page (there are different arrows in this page
        and you can move between the sections in this page by scrolling or using arrows) -->
          <a href="#points" class="arrowDownLink">
              <img src="../static/icons/downArrow.png" alt="down arrow" class="arrowDown"/>
              <img src="../static/icons/downArrowHover.png" alt="down arrow hover effect" class="arrowDownHover"/>
          </a>
      </div>
    </section>
    <section id="points">
      <div class="upArrowContainer">
        <a href="#events" class="arrowUpLink">
          <img src="../static/icons/upArrow.png" alt="up arrow" class="arrowUp"/>
          <img src="../static/icons/upArrowHover.png" alt="up arrow hover effect" class="arrowUpHover"/>
        </a>
      </div>
      <nuxt-link to="/pointsOfInterestList">
        <!-- this is a link to the points of interest list page -->
        <h1 class="title-font">The treasures Mantova contains</h1>
      </nuxt-link>
      <div class="downArrowContainer">
        <a href="#itineraries" class="arrowDownLink">
          <img src="../static/icons/downArrow.png" alt="down arrow" class="arrowDown"/>
          <img src="../static/icons/downArrowHover.png" alt="down arrow hover effect" class="arrowDownHover"/>
        </a>
      </div>
    </section>
    <section id="itineraries">
      <div class="upArrowContainer">
        <a href="#points" class="arrowUpLink">
          <img src="../static/icons/upArrow.png" alt="up arrow" class="arrowUp"/>
          <img src="../static/icons/upArrowHover.png" alt="up arrow hover effect" class="arrowUpHover"/>
        </a>
      </div>
      <nuxt-link to="/itineraryList">
        <!-- this is a link to the itineraries list page -->
        <h1 class="title-font">Let us guide you into beauty</h1>
      </nuxt-link>
      <div class="downArrowContainer">
        <a href="#services" class="arrowDownLink">
          <img src="../static/icons/downArrow.png" alt="down arrow" class="arrowDown"/>
          <img src="../static/icons/downArrowHover.png" alt="down arrow hover effect" class="arrowDownHover"/>
        </a>
      </div>
    </section>
    <section id="services">
      <div class="upArrowContainer">
        <a href="#itineraries" class="arrowUpLink">
          <img src="../static/icons/upArrow.png" alt="up arrow" class="arrowUp"/>
          <img src="../static/icons/upArrowHover.png" alt="up arrow hover effect" class="arrowUpHover"/>
        </a>
      </div>
      <nuxt-link to="/servicesList">
        <!-- this is a link to the service list page -->
        <h1 class="title-font">Everything you might need</h1>
      </nuxt-link>
      <div class="downArrowContainer">
        <a href="#about" class="arrowDownLink">
          <img src="../static/icons/downArrow.png" alt="down arrow" class="arrowDown"/>
          <img src="../static/icons/downArrowHover.png" alt="down arrow hover effect" class="arrowDownHover"/>
        </a>
      </div>
    </section>
    <section id="about">
      <div class="upArrowContainer">
        <a href="#services" class="arrowUpLink">
          <img src="../static/icons/upArrow.png" alt="up arrow" class="arrowUp"/>
          <img src="../static/icons/upArrowHover.png" alt="up arrow hover effect" class="arrowUpHover"/>
        </a>
      </div>
      <nuxt-link to="/aboutMantova">
        <!-- this is a link to the page about mantova -->
        <h1 class="title-font">Why is Mantova so special?</h1>
      </nuxt-link>
    </section>
  </div>
</template>

<style scoped>

section {
  display: block;
  margin: 0;
  height: 100vh;
  width: 100%;
  border-top: 1px solid white;
  border-bottom: 4px solid white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#first-section{
  margin-top: 45vh;
  margin-bottom: -2vh;
}

h1 {
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: var(--color2);
  background-color: var(--color1-main);
  border: 2px solid var(--color1);
  font-size: 8vmin;
  width: fit-content;
  max-width: 100%;
  /*white-space: nowrap;*/
}

.downArrowContainer {
  margin-top: 25vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.upArrowContainer {
  margin-top: 15vh;
  margin-bottom: 25vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.arrowDown{
  height: 8vmin;
}


.arrowDownHover{
  height: 8vmin;
  display: none;
}

.arrowDownLink:hover .arrowDown{
  display:none;
}

.arrowDownLink:hover .arrowDownHover{
  display: inline;
}

.arrowUp{
  height: 8vmin;
}

.arrowUpHover{
  height: 8vmin;
  display: none;
}

.arrowUpLink:hover .arrowUp{
  display:none;
}

.arrowUpLink:hover .arrowUpHover{
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

</style>

<script>
export default {
  name: 'CustomPage',
  layout: 'header-only',
}
</script>
