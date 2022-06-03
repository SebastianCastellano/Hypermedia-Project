<template>

<footer>
  <!-- This is the template of the footer -->
  <div class="vertical-center">
    <!-- Our info -->
      
      Website for the course of Hypermedia Applications - Polimi 2021/2022 - Group SoftMath 
      
    <!-- --- 10612772 - Carlo Ambrogi --- 10582405 - Sebastian Castellano --- 10573185 - Andrea De Bettin --- 10571386 - Lorenzo Guerrieri
  -->
  </div>
</footer>

</template>

<style scoped>

@import '~/static/style/main.css';

a {
  text-decoration: none;
  color: inherit;
}

footer {
    position: relative;
    color: var(--color2);
    background: var(--color1);
    margin-top: 100px; /* max(20vh, 200px) */
    margin-bottom: 0;
    margin-right: 0;
    height: 62px; /* 10vh */
    display: flex;
  justify-content: center;
}

.vertical-center {
  font-size: 1rem;
  margin: 0 0 0 2vw;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.footer-extension {
  min-height: 25px;
  background-color: var(--color1);
}

.team-info {
  position: absolute;
  right: 25px;
  color: lightgrey;
  font-size: 65%;
  margin-left: 5px;
  margin-right: 5px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

</style>
