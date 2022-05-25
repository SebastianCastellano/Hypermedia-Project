<template>
  <div>
    <section class="flex-container" id="first">
      <div class="column"></div>
      <div class="column text">
        <h3 class="title-font">
          The Beauty Of Mantova
        </h3>
        <p>
          The Gonzagas protected the arts and culture, and were hosts
          to several important artists such as Leone Battista Alberti, 
          Andrea Mantegna, Giulio Romano, Donatello, Peter Paul Rubens, 
          Pisanello, Domenico Fetti, Luca Fancelli and Nicolò Sebregondi. 
          Though many of the masterworks have been dispersed, the cultural 
          value of Mantua is nonetheless outstanding, with many of Mantua's 
          patrician and ecclesiastical buildings being uniquely important 
          examples of Italian architecture.
          <br><br>
          In 2008, Mantua's <em>centro storico</em> (old town) 
          was declared by UNESCO to be a World Heritage Site. 
          Mantua's historic power and influence under the Gonzaga 
          family has made it one of the main artistic, cultural, 
          and especially musical hubs of Northern Italy and the 
          country as a whole. Having one of the most splendid 
          courts of Europe of the fifteenth, sixteenth, and early 
          seventeenth centuries.[3] Mantua is noted for its 
          significant role in the history of opera; the city 
          is also known for its architectural treasures and artifacts, 
          elegant palaces, and the medieval and Renaissance cityscape. 
          It is the city where the composer Monteverdi premiered his 
          opera L'Orfeo and to where Romeo was banished in Shakespeare's 
          play Romeo and Juliet. It is the nearest town to the 
          birthplace of the Roman poet Virgil, who is commemorated 
          by a statue at the lakeside park "Piazza Virgiliana".
        </p>
      </div>
    </section>
    <section class="flex-container" id="second">
      <div class="column text">
        <h3 class="title-font">
          A glimpse of history
        </h3>
        <p>
          Ludovico Gonzaga, who had been Podestà of Mantua since 1318, 
          was duly elected Capitano del popolo. 
          The Gonzagas built new walls with five gates and renovated 
          the city in the 14th century; however, the political 
          situation did not settle until the third ruler of Gonzaga, 
          Ludovico III Gonzaga, who eliminated his relatives and centralised 
          power to himself. During the Italian Renaissance, 
          the Gonzaga family softened their despotic rule and further 
          raised the level of culture and refinement in Mantua. 
          Mantua became a significant center of Renaissance art and humanism. 
          Marquis Gianfrancesco Gonzaga had brought Vittorino da Feltre to 
          Mantua in 1423 to open his famous humanist school, the Casa Giocosa.
          <!--
          <br><br>
          Isabella d'Este, Marchioness of Mantua, married Francesco 
          II Gonzaga, Marquess of Mantua in 1490. 
          When she moved to Mantua from Ferrara (she was the daughter 
          of Duke Ercole the ruler of Ferrara) she created her famous 
          studiolo firstly in Castello di San Giorgio for which she 
          commissioned paintings from Mantegna, Perugino and Lorenzo Costa. 
          She later moved her studiolo to the Corte Vecchia and 
          commissioned two paintings from Correggio to join the five 
          from Castello di San Giorgio. It was unusual for a woman to 
          have a studiolo in 15th century Italy given they were 
          regarded as masculine spaces. Isabella was a vociferous 
          collector and such was her reputation that Niccolò da 
          Corregio called her 'la prima donna del mondo'.
          -->
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
          Main landmarks include: Palazzo Te, Palazzo Ducale, 
          Basilica di Sant'Andrea, Duomo, Rotonda di San Lorenzo, 
          Teatro di Bibiena, Palazzo Vescovile, Palazzo degli Uberti, 
          Palazzo d'Arco, Torre della Gabbia ("Cage Tower"), 
          Palazzo del Podestà, Palazzo della Ragione with the 
          Torre dell'Orologio.
          <br><br>
          Mantua is surrounded on three sides by artificial lakes, 
          created during the 12th century as the city's defence system. 
          These lakes receive water from the Mincio River, a tributary 
          of the Po River which descends from Lake Garda. The three 
          lakes are called Lago Superiore, Lago di Mezzo, and Lago 
          Inferiore ("Upper", "Middle", and "Lower" Lakes, respectively). 
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
