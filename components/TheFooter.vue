<template>
  <footer>
    <!-- This is the template of the footer -->
    <div class="vertical-center">
      <!-- Our info -->
        <p class="footer-label">
          Website for the course of Hypermedia Applications - Polimi 2021/2022 - Group SoftMath <br><font color="lightgrey">Carlo Ambrogi, Sebastian Castellano, Andrea De Bettin, Lorenzo Guerrieri</font>
        </p>
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
  height: calc(82px + max(0px, 40px - 4vw)); /* height: 62px;   calc(120px - 3vw); */
  display: flex;
  justify-content: center;
}

.footer-label {
  font-size: 12px;
  text-align: center;
}

.vertical-center {
  margin: 0 0 0 2vw;
  position: absolute;
  top: calc(50% - 18px - (max(0px, 40px - 4vw) / 2));
}

</style>
