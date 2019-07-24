<template>
<div>
  <q-page padding>
   <q-card class="">
      <q-item v-for="curso in cursos" :key="curso.id">
        <q-item-section avatar @click="bar2 = true">
          <q-avatar>
            <img :src="curso.url_imagen" @click="detalle(curso)">
          </q-avatar>
        </q-item-section>

        <q-item-section @click="detalle(curso)">
          <q-item-label>{{ curso.nombre }}</q-item-label>
          <q-item-label caption>{{ curso.descripcion }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </q-page>
  <div>
    <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="text-h6">Detalles</div>
        </q-card-section>
        <q-card-section v-for="semi in seminario.nombre" :key="semi.id">
          {{ semi.nombre }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</div>
</template>

<script>
import { axiosInstance } from 'boot/axios'
// import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      bar2: false,
      cursos: [],
      seminario: {
        nombre: '',
        fecha: ''
      }
    }
  },
  mounted () {
    // this.setCursos()
    this.listar()
  },
  // computed: {
  //   ...mapState('cursos', ['cursos'])
  // },
  methods: {
    listar () {
      axiosInstance.get('seminarios')
        .then((res) => {
          this.cursos = res.data.response
        })
        .catch((err) => {
          console.error(err)
        })
    },
    detalle (seminario) {
      this.seminario.nombre = seminario.nombre
      console.log(seminario)
    }
    // ...mapActions('cursos', ['setCursos'])
  }
}
</script>
<style>
</style>
