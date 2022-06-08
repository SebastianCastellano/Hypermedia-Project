<template>
  <div id="backgroundImage">
      <br>
      <div class="text">
        <!-- VisitMantova's beautiful lettering -->
        <h3 class="title-font"><span class="capital-letter">V</span>isit<span class="capital-letter"
          >M</span
        >antova</h3>
        <!-- Contact info -->
        <p>Piazza Sordello, 45, 46100 Mantova</p>
        <p><b>Mail:</b> <a href = "mailto: VisitMantova@gmail.com">VisitMantova@gmail.com</a><br>
        <b>Tel:</b> <a href="tel:+39-362-558-9**">+39 362 5589**</a><br>
        <b>Facebook:</b> VisitMantova <br>
        <b>Instagram:</b> @VisitMantova </p>
      </div>
      <br>
  </div>
</template>

<!-- this is the contact us page -->

<style scoped>

.text {
  margin: 0 auto;
  margin-top: 25vmin;
  top: 300px;
  width: 75vmin;
  min-width: 150px;
  height: fit-content;
  min-height: 100px;
  padding: 5vmin;
  border: 2px var(--color1) solid;
  background-color: var(--color2);
  overflow: auto;
}

p, h3 {
  padding: 0;
  margin: 0;
  text-align: center;
}

p { font-size: 3vmin; }

h3 {
  margin-bottom: 15px;
  font-size: 5vmin;
}

.capital-letter {font-size: 150%;}

#backgroundImage {
  background-image: url("../static/images/palazzoDucale-cameraSposi4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  margin-bottom: 0;
  height: 100vh;
  width: 100%;
}

</style>

<script>
export default {
  name: 'ContactUsPage',
  head: {
    title: 'Contact Us | VisitMantova',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Find our contact information here.'
      }
      ],
  },
  layout: 'header-only',
  components: {
  },
}
</script>
