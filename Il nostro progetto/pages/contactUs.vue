<template>
  <div id="backgroundImage">
      <br>
      <div class="text">
        <h3 class="title-font">VisitMantova</h3>
        <p>via example 111,<br>
        12345 Mantova</p>
        <p><b>Mail:</b> <a href = "mailto: example@mail.com">example@mail.com</a><br>
        <b>Tel:</b> <a href="tel:123-456-789">1234567890</a><br>
        <b>Fax:</b> 123456789</p>
      </div>
      <br>
  </div>
</template>

<style>

.text {
  width: 50%;
  margin: 0 auto;
  top: 300px;
  width: 30vw;
  height: 100%;
  border: 2px var(--color1) solid;
  padding: 10vh;
  background-color: var(--color2);
  min-width: 200px;
}

#backgroundImage { background-image: url("../static/images/palazzoDucale-cameraSposi2.jpg"); }

</style>

<script>
export default {
  name: 'ContactUsPage',
  // layout: 'header-only',
  components: {
  },
}
</script>
