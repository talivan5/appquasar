<template>
  <div class="q-pa-md q-gutter-sm">
  <q-card class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
     <div class="col-6">
        <div class="absolute-full text-subtitle2 flex flex-center">
            <div class="q-pa-md" style="max-width: 400px">
              <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
              >
              <q-input
              filled
              v-model="name"
              label="Usuario *"
              hint="Usuario"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
              filled
              v-model="name"
              label="Contraseña *"
              hint="Contraseña"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <div>
                <q-btn label="Ingresar" type="submit" color="primary" class="btn btn-lg" to="/home"></q-btn>
              </div>
            </q-form>

            </div>
          </div>
        </div>
    </q-card>
  </div>
</template>
