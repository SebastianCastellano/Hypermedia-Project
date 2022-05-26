<template>
    <footer>
        <div class="vertical-center">
            <nuxt-link to="/">
                Home page
            </nuxt-link>
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

</style>