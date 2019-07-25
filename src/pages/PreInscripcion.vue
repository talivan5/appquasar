<template>
  <q-page padding>
      <div class="q-pa-md" style="max-width: 400px">

        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        >
          <q-input
          filled
          v-model="name"
          label="Nombre *"
          hint="Nombre y Apellido"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Coloque su nombre completo']"
          />
          <q-input
          filled
          v-model="email"
          label="Email *"
          hint="Correo Electronico"
          />
           <q-btn-dropdown color="primary" label="Curso">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
          <div>
            <q-btn label="Registrar" type="submit" color="primary"/>
            <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
  </q-page>
</template>

<script>
import { axiosInstance } from 'boot/axios'
export default {
  // name: 'PageName',
  data () {
    return {
      bar2: false,
      datos: [],
      inscripciones: {
        id: '',
        fecha: '',
        gestion: '',
        costo: '',
        descripcion: '',
        url_imagen: ''
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
      axiosInstance.get('inscripciones')
        .then((res) => {
          this.datos = res.data.response
        })
        .catch((err) => {
          console.error(err)
        })
    },
    detalle (seminario) {
      this.seminario.nombre = seminario.nombre
      this.seminario.descripcion = seminario.descripcion
      this.seminario.costo = seminario.costo
      this.seminario.fecha = seminario.fecha
      this.seminario.url_imagen = seminario.url_imagen
      console.log(seminario)
    }
    // ...mapActions('cursos', ['setCursos'])
  }

}
</script>

<style>
</style>
