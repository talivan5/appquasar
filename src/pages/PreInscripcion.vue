<template>
  <q-page padding>
      <div class="q-pa-md" style="max-width: 400px">

        <q-form
        class="q-gutter-md"
        >
          <q-input
          filled
          v-model="estudiante.nombres"
          label="Nombre *"
          hint="Nombre y Apellido"
          />
          <q-input
          filled
          v-model="estudiante.ap_materno"
          label="Apellido Materno *"
          hint="Apellido Materno"
          />
          <q-input
          filled
          v-model="estudiante.ap_paterno"
          label="Apellido Paterno *"
          hint="Apellido Paterno"
          />
          <div class="row">
          <div class="col-6">
          <q-input
          filled
          v-model="estudiante.ci"
          label="Carnet *"
          hint="Carnet Identidad"
          />
          </div>
          <div class="col-6">
          <q-input
          filled
          v-model="estudiante.celular"
          label="Celular *"
          hint="Celular"
          />
          </div>
          </div>

           <q-btn-dropdown color="primary" label="Curso">
          <q-list v-for="carrera in carreras" :key="carrera.id">
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>{{carrera.nombre}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
    </q-btn-dropdown>
          <div>
            <q-btn label="Registrar" type="submit" color="primary" @click="crearEstudiante()"/>
            <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
  </q-page>
</template>

<script>
import { axiosInstance } from 'boot/axios'

export default {
  data () {
    return {
      inscripciones: [],
      promotores: [],
      carreras: [],
      estudiantes: [],
      datoIdEstudiante: {},
      fecha: '',
      gestion: '',
      promotor_id: '',
      estudiante_id: '',
      idCarrera: '',

      errors: [],
      inscripcion: {
        id: '',
        fecha: '',
        gestion: '',
        estado: '',
        promotor_id: '',
        estudiante_id: '',
        carrera_id: ''
      },
      estudiante: {
        id: '',
        nombres: '',
        ap_materno: '',
        ap_paterno: '',
        ci: '',
        direccion: '',
        telefono: '',
        celular: '',
        fecha_nacimiento: '',
        email: ''
      }

    }
  },
  methods: {
    listar () {
      axiosInstance.get('inscripciones')
        .then((res) => {
          this.inscripciones = res.data.response
          this.promotores = res.data.response
        })
        .catch((err) => {
          console.error(err)
        })
    },
    listarCarrera () {
      axiosInstance.get('carrera')
        .then((res) => {
          this.carreras = res.data.response
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    crearInscripcion (IdEstudiante) {
      axiosInstance.post('inscripciones', {

        'fecha': '2019/11/11', // this.inscripcion.fecha,
        'gestion': '2019', // this.inscripcion.gestion,
        'estado': 0,
        'promotor_id': 1,
        'estudiante_id': IdEstudiante,
        'carrera_id': 3 // this.idCarrera
      }).then(response => {
        console.log('inscripcion' + response.data.response.id)
      })
        .catch(error => {
          console.log(error)
        })
    },
    crearEstudiante () {
      axiosInstance.post('usuarios', {
        'nombres': this.estudiante.nombres,
        'ap_materno': this.estudiante.ap_materno,
        'ap_paterno': this.estudiante.ap_paterno,
        'ci': this.estudiante.ci,
        'celular': this.estudiante.celular,
        'email': this.estudiante.email
      }).then(response => {
        this.crearInscripcion(response.data.response.id)
        // this.datoIdEstudiante = response.data.response.id
        // console.log(this.datoIdEstudiante)
        // alert('id es: ' + parseInt(this.datoIdEstudiante, 10))
      })
        .catch(error => {
          console.log(error)
        })
    }

    // finalizado () {
    //   this.crearEstudiante()
    //   setTimeout(function () {
    //     this.crear(this.datoIdEstudiante)
    //   }, 3000)
    // }
  },
  mounted () {
    // this.listar()
    this.listarCarrera()
    // this.fetch();
  }

}
</script>

<style>
</style>
