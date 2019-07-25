<template>
  <q-page padding>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      class="caru"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores, possimus molestias officiis suscipit esse repellat earum rerum. Excepturi sunt veniam molestias sapiente neque quae facilis tenetur voluptatibus praesentium nihil?
    </p>
  </div>
    <div class="row">
      <div class="col-sm-6">
        <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
          <q-card-section>
            <div class="text-h6">Misión</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            <p>
              Nuestra misión, contribuir al desarrollo de la industria turística con el principal objetivo de ayudarla a crecer competitivamente y equilibrados económica, cultural y sostenibles.
            </p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-sm-6">
        <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
          <q-card-section>
            <div class="text-h6">Visión</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            <p>
              Capitalizamos nuestras experiencias y orientarla al desarrollo turístico de: estudiantes, profesionales, empresarios e instituciones publicas.
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
.caru {
  height: 150px;
}
.my-card {
  height: 300px;
  width: 190px;
  text-align: justify;
}

</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
