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
          <q-toggle v-model="accept" label="Esta de acuerdo con las condisiones" />

          <div>
            <q-btn label="Registrar" type="submit" color="primary"/>
            <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

}
</script>

<style>
</style>
