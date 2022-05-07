<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand" id="home-link" href="/">
      <span class="capital-letter">V</span>isit<span class="capital-letter">M</span>antova
    </a>
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

    <div class="collapse navbar-collapse" id="navbarToggler">
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
</template>

<style scoped>
    
@import '~/static/style/main.css';

.header {
  padding-top: 0px;
  padding-bottom: 0px;
  background: var(--color1);
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

li {
  margin-left: 8.5vw;
}

.nav-link {
  color: var(--color2) !important;
  font-size: 150%;
}

li:hover .nav-link {
  text-decoration: underline;
}
</style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        /*
        {
          name: 'Home',
          path: '/',
        },
        */
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
          path: '/itineraries',
        },
        {
          name: 'Services',
          path: '/services',
        },
      ],
    }
  },
}
</script>
