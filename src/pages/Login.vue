<template>
  <div class=" ">
  <q-card class="contenido">
     <div class="col-6">
        <div class="absolute-full text-subtitle2 flex flex-center">
            <div class="q-pa-md login" style="max-width: 400px">
              <q-form>
                <div class="centro">
                  <img src="statics/app-logo-128x128.png" alt="">
                </div>
                <div>
                  <q-input
                  filled
                  v-model="promotores.cuenta"
                  label="Usuario *"
                  hint="Usuario"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                  />
                  <q-input
                  filled
                  v-model="promotores.password"
                  label="Contraseña *"
                  hint="Contraseña"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                  />
                </div>

                <br>
                <div class="centro">
                  <q-btn label="Iniciar" type="submit" color="primary" @click="principal"></q-btn>
                </div>
            </q-form>

            </div>
          </div>
        </div>
    </q-card>
  </div>
</template>
<script>
import { axiosInstance } from 'boot/axios'
export default {
  data () {
    return {
      bar2: false,
      promotor: [],
      IdPromotor: {},
      promotores: {
        id: '',
        nombre: '',
        apellidos: '',
        ci: '',
        direccion: '',
        celular: '',
        email: '',
        rol: 'PROMOTOR',
        cuenta: '',
        password: ''
      }
    }
  },
  mounted () {
    // this.setCursos()
    // this.listar()
  },
  methods: {
    comprobar (IdPromotor) {

    },
    loguiarse () {
      axiosInstance.post('promotores', {
        'usuario': this.promotores.usuario,
        'password': this.promotores.password
      }).then(response => {
        this.comprobar(response.data.response.id)
      })
        .catch(error => {
          console.log(error)
        })
    },
    principal () {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
.contenido{
  background-color: aqua;
}
.login{
  margin-top: 50%;
  background-color: aqua;
  align-self: auto;
  border:blue 4px solid;
  border-radius: 10px;
}
.centro{
  margin-top: 5px;
  margin-right: 20%;
  margin-left: 20%;
}
</style>
