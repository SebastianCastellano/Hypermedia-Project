<template>
  <div>
    <section class="flex-container" id="first">
      <div class="column"></div>
      <div class="column text">
        <h3 class="title-font">
          The Beauty Of Mantova
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales semper ante. Ut et velit eu enim suscipit varius non quis urna. Duis et pharetra lorem. Aenean ut accumsan nulla. In sagittis mauris fringilla ex dignissim posuere. Proin tempus varius egestas. Pellentesque convallis suscipit purus molestie mattis. Cras aliquet vehicula scelerisque. Etiam dignissim nisi ut justo lacinia maximus. Etiam odio tellus, gravida sed congue sed, auctor ac nunc. Phasellus quis massa non justo fringilla fringilla. Suspendisse at diam et metus pharetra placerat. Vivamus iaculis odio dignissim nisl pretium, sed interdum nulla consectetur. Donec eget enim euismod, cursus tortor sed, finibus
        </p>
      </div>
    </section>
    <section class="flex-container" id="second">
      <div class="column text">
        <h3 class="title-font">
          A glimpse of history
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales semper ante. Ut et velit eu enim suscipit varius non quis urna. Duis et pharetra lorem. Aenean ut accumsan nulla. In sagittis mauris fringilla ex dignissim posuere. Proin tempus varius egestas. Pellentesque convallis suscipit purus molestie mattis. Cras aliquet vehicula scelerisque. Etiam dignissim nisi ut justo lacinia maximus. Etiam odio tellus, gravida sed congue sed, auctor ac nunc. Phasellus quis massa non justo fringilla fringilla. Suspendisse at diam et metus pharetra placerat. Vivamus iaculis odio dignissim nisl pretium, sed interdum nulla consectetur. Donec eget enim euismod, cursus tortor sed, finibus
        </p>
      </div>
      <div class="column"></div>
    </section>
    <section class="flex-container" id="third">
      <div class="column"></div>
      <div class="column text">
        <h3 class="title-font">
          Why visit?
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales semper ante. Ut et velit eu enim suscipit varius non quis urna. Duis et pharetra lorem. Aenean ut accumsan nulla. In sagittis mauris fringilla ex dignissim posuere. Proin tempus varius egestas. Pellentesque convallis suscipit purus molestie mattis. Cras aliquet vehicula scelerisque. Etiam dignissim nisi ut justo lacinia maximus. Etiam odio tellus, gravida sed congue sed, auctor ac nunc. Phasellus quis massa non justo fringilla fringilla. Suspendisse at diam et metus pharetra placerat. Vivamus iaculis odio dignissim nisl pretium, sed interdum nulla consectetur. Donec eget enim euismod, cursus tortor sed, finibus
        </p>
      </div>
    </section>
    <!--
    <about-mantova-component :title="title" :image="image" :alternative="alternative" :text="text" />
    -->
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  border: 10px solid var(--color2);
  margin: 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: scroll;
}
.column {
  width: 35vw;
  height: 100%;
}

.text {
  border: 2px var(--color1) solid;
  padding: 1vh;
  padding-top: 5%;
  background-color: var(--color2);
  overflow: auto;
  text-overflow: ellipsis;
}

h3 {
  text-align: center;
  margin-bottom: 5vh;
}
p {
  text-align: justify;
  margin: 0 1vw;
}

#first { background-image: url("../static/images/palazzoDucale-cameraSposi3.jpg"); }
#second { background-image: url("../static/images/palazzoTe-soleLuna1.jpg"); }
#third { background-image: url("../static/images/skyline1.jpg"); }
</style>

<script>
// import AboutMantovaComponent from '~/components/AboutMantovaComponent.vue'
export default {
  name: 'AboutMantovaPage',
  layout: 'header-only',
  components: {
    // AboutMantovaComponent,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/aboutMantova')
    const title = data.title
    const image = data.image
    const alternative = data.alternative
    const text = data.text
    return {
      title,
      image,
      alternative,
      text,
    }
  },
}
</script>
