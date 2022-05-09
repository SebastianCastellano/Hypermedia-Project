<template>
<div class="card-poi">
    <div class="title-font">Location Name</div>
    <img src="https://txc5xc6e.cdn.imgeng.in/custom/01505/foto/20201118170941-46.jpg?imgeng=/w_1140" alt="Bel monumento">
    <article class="short-description">
        Deliziosa residenza nobiliare del XVII secolo appena fuori le mura.
    </article>
</div>
</template>

<style scoped>

.card-poi {
    border: 2px solid var(--color1);
    height: 55vh;
    width: 45vh;
    padding: 4vh 3vh;
    margin: 1vh 1vw;
}

.title-font {
    text-align: center;
    padding: 0;
    font-size: 150%;
    margin-bottom: 2vh;
}

img {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    margin-bottom: 3vh;
    border: 1px solid var(--color1);
}

article {
    font-size: 110%;
}

.card-poi:hover {
    background-color: rgb(178, 34, 34, 0.1);
}

</style>

<script>
export default {
  name: 'CardPOI'
    /*
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/events/${this.id}`)
    },
  },
    */
}
</script>