<template>
<div class="page container mt-5">
    <h1 class="title-font page-title"> {{ title[0] }} </h1>
    <section class="flex-container">
      <div>
        <img :src="images[0]" :alt="alternative[0]" />
        <img :src="images[1]" :alt="alternative[1]" />
      </div>
      <p> {{ text[0] }} </p>
    </section>
    <h1 class="intermediate-title title-font page-title"> {{ title[1] }} </h1>
    <section class="flex-container">
      <p> {{ text[1] }}</p>
      <div>
        <img :src="images[2]" :alt="alternative[2]" />
        <img :src="images[3]" :alt="alternative[3]" />
      </div>
    </section>
    <h1 class="intermediate-title title-font page-title"> {{ title[2] }} </h1>
    <section class="flex-container">
      <div>
        <img :src="images[4]" :alt="alternative[4]" />
        <img :src="images[5]" :alt="alternative[5]" />
      </div>
      <p> {{ text[2] }} </p>
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

.intermediate-title { margin-top: 50px; }

.img-right {
  max-height: 300px;
  width: 40vw;
  margin: 15px 0 15px 0;
}

</style>

<script>
export default {
  name: 'AboutMantova',
  props: {
    title: {
      type: Array,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    alternative: {
        type: Array,
        required: true,
    },
    text: {
      type: Array,
      required: true,
    },
  },
}
</script>