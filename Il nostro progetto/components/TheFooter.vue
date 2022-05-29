<template>
<div>
  <footer>
    <div class="vertical-center">
        <nuxt-link to="/">
            Home page
        </nuxt-link>
    </div>
  </footer>
  <div class="footer-extension">
    <div class="team-info">
          SoftMath --- 10612772 - Carlo Ambrogi --- 10582405 - Sebastian Castellano --- 10573185 - Andrea De Bettin --- 10571386 - Lorenzo Guerrieri
    </div>
  </div>
</div>
    
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
    margin-top: 20vh;
    margin-bottom: 0;
    margin-right: 0;
    height: 10vh;
}

div {
    font-size: 110%;
}

.vertical-center {
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
}

</style>
