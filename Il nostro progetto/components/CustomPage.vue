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
  <div class="container mt-5">
    <h1 class="title-font page-title">{{ title }}</h1>
    <section class="overview-section flex-container">
      <div>
        <img :src="image" alt="prova" />
        <img :src="image" alt="prova" />
      </div>
      <p class="overview">{{ shortOverview }}</p>
    </section>
    <h1 class="intermediate-title title-font page-title">A glimse of history</h1>
    <section class="overview-section flex-container">
      <p class="overview">{{ shortOverview }}</p>
      <div>
        <img class="right-img" :src="image" alt="prova" />
        <img class="right-img" :src="image" alt="prova" />
      </div>
    </section>
  </div>
</template>

<style scoped>

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
</style>

<script>
export default {
  name: 'CustomPage',
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
