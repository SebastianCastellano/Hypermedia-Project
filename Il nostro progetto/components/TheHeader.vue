<template>
  <!-- This is the template of the header -->
  <div id="mainDiv">
    <nav class="navbar navbar-expand-lg navbar-light px-3 header">
      <nuxt-link id="home-link" class="navbar-brand" to="/">
        <!-- The beautiful VisitMantova lettering; it's also a link to the home page -->
        <span class="capital-letter">V</span>isit<span class="capital-letter"
          >M</span
        >antova
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li
            v-for="(navItem, navItemIndex) of headerList"
            :key="`navItem${navItemIndex}`"
            class="nav-item"
          >
            <nuxt-link :to="navItem.path" class="nav-link">
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- This second div below is the same as above, serves as a placeholder in order to avoid text overlapping caused
    by position:fixed in the div above-->
    <nav class="navbar navbar-expand-lg navbar-light px-3 header-holder">
      <div class="navbar-brand">
        <span class="capital-letter">V</span>isit<span class="capital-letter"
          >M</span
        >antova
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li
            v-for="(navItem, navItemIndex) of headerList"
            :key="`navItem${navItemIndex}`"
            class="nav-item"
          >
            <div class="nav-link">
              {{ navItem.name }}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  <!-- end of the second header -->
  </div>
</template>


<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      events: [
        {
          name: 'Events',
          path: '/eventList',
        },
      ],
      headerList: [
        // All landmarks link present in the header
        {
          name: 'Events',
          path: '/eventList',
        },
        {
          name: 'Points of interest',
          path: '/pointsOfInterestList',
        },
        {
          name: 'Itineraries',
          path: '/itineraryList',
        },
        {
          name: 'Services',
          path: '/servicesList',
        },
        {
          name: 'About Mantova',
          path: '/aboutMantova',
        },
        {
          name: 'Contact us',
          path: '/contactUs',
        },
      ],
    }
  },
}
</script>

<style scoped>
nav {border-bottom: 2px solid var(--color2);}

li {
  white-space: nowrap;
  font-size: 1.5vw;
}

@media screen and (max-width: 991px){
  li {
    font-size: 15px;
  }
}

@import '~/static/style/main.css';

nav {border-bottom: 2px solid var(--color2);}
a {
  text-decoration: none;
  color: inherit;
}

.ex-nl {
  text-decoration: none;
  color: inherit;
}

.header {
  padding-top: 0px;
  padding-bottom: 0px;
  background: var(--color1);
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 5;
}

.header-holder {
  padding-top: 0px;
  padding-bottom: 0px;
}

#home-link {
  font-family: var(--title-font);
  color: var(--color2);
  font-size: 150%;
  margin-left: 1vw;
}

#home-link:hover {
  text-decoration: underline;
}

.capital-letter {
  font-size: 150%;
}

li,
.dropdown-div {
  margin-left: 1.5vw;
}

.nav-link {
  color: var(--color2) !important;
  font-size: min(130%,30px);
}

li:hover .nav-link {
  text-decoration: underline;
}

.dropdown-div:hover #dropdown-list {
  text-decoration: underline;
}

.place-holder {
  z-index: -100;
  background-color: blue;
  width: 100%;
  height: 2cm;
}
</style>
