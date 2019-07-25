<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
     <q-toolbar>
         <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Promotores
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Promotores apk</q-item-label>
        <q-item clickable tag="a" target="_blank" @click="icon = true">
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Información
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="close" style="color:black"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color:black">Cerrar</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">Información de la Aplicación</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-full text-subtitle2 flex flex-center">
                Caption
              </div>
            </q-img>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-white text-danger">
        <q-tabs
          inline-label
          class="bg-primary text-white shadow-2"
           >
          <q-route-tab
                name="home"
                icon="home"
                to="/"
                exact
                label="Home" />
          <q-route-tab
                name="curso"
                icon="laptop"
                to="/curso"
                exact
                label="Cursos" />
          <q-route-tab
                name="registro"
                icon="done"
                to="/incripcion"
                exact
                label="Registrar" />
        </q-tabs>
      </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      icon: false,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
