<template>
  <div id="mainDiv">
    <nav class="navbar navbar-expand-lg navbar-light px-3 header">
      <nuxt-link id="home-link" class="navbar-brand" to="/">
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
          <div>
            <!--  The following lines give error but without them the dropdown bar does not work
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            -->

            <div class="nav-link dropdown-div">
              <nuxt-link id="dropdown-list" :to="events[0].path">
                {{ events[0].name }}
              </nuxt-link>

              <button
                type="button"
                class="
                  btn btn-sm btn-secondary
                  dropdown-toggle dropdown-toggle-split
                "
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div class="dropdown-menu">
                <nuxt-link
                  v-for="(eventItem, eventItemIndex) of eventList"
                  :key="`eventItem${eventItemIndex}`"
                  class="dropdown-item"
                  :to="eventItem.path"
                  >{{ eventItem.name }}</nuxt-link
                >
              </div>
            </div>
          </div>

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

    <nav class="navbar navbar-expand-lg navbar-light px-3 header-holder">
      <div id="home-link" class="navbar-brand">
        <span class="capital-letter">V</span>isit<span class="capital-letter"
          >M</span
        >antova
      </div>

      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <div>
            <div class="nav-link dropdown-div">
              <nuxt-link id="dropdown-list" class="ex-nl" :to="events[0].path">
                {{ events[0].name }}
              </nuxt-link>
              <div
                class="
                  btn btn-sm btn-secondary
                  dropdown-toggle dropdown-toggle-split
                "
              ></div>
              <div class="dropdown-menu">
                <div
                  v-for="(eventItem, eventItemIndex) of eventList"
                  :key="`eventItem${eventItemIndex}`"
                  class="dropdown-item"
                >
                  {{ eventItem.name }}
                </div>
              </div>
            </div>
          </div>

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

    <!--
  <div class="place-holder">

  </div>
-->
  </div>
</template>

<style scoped>
nav {border-bottom: 2px solid var(--color2);}
</style>


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
      eventList: [
        {
          name: 'All Events',
          path: '/eventList',
        },

        {
          name: 'Summer Events',
          path: '/eventSummer',
        },
        {
          name: 'Winter Events',
          path: '/eventWinter',
        },
      ],
      headerList: [
        /*
        {
          name: 'Events',
          path: '/eventList',
        },
        */
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
      ],
    }
  },
}
</script>


<style scoped>
@import '~/static/style/main.css';

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
  margin-left: 2vw;
}

.nav-link {
  color: var(--color2) !important;
  font-size: 150%;
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


