<template>
  <div class="column my-font">
    <div class="row justify-center full-height full-width text-center">
      <h6>
        Te ayudamos a encontrar<br />
        el servicio que necesitas
      </h6>
    </div>

    <div class="row justify-center full-height full-width text-center">
      <!-- <div class=""> -->
      <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
        <q-toolbar class="bg-indigo-10 text-white rounded-borders">
          <q-icon name="search" style="font-size: 2em;"></q-icon>
          <q-space />

          <q-input
            style="width: 235px; max-width: 100%"
            dark
            dense
            standout
            input-class="text-left"
          >
            <template v-slot:append>
              <!-- <q-icon name="search" /> -->
              <q-icon name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
          </q-input>
        </q-toolbar>
      </div>
      <!-- </div> -->
      <!-- <q-input
        filled
        type="search"
        hint="Buscar"
        label="Ej: albañil, carpintero"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input> -->
    </div>

    <div class="row justify-center full-height full-width text-center q-pa-md">
      <!-- 1 -->
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Albañilería
            <q-btn
              no-caps
              size="sm"
              color="indigo-6"
              label=""
              icon="search"
              to="/servicios"
            ></q-btn>
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <!-- 2 -->
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2016/01/19/17/57/car-1149997_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Viajes
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <!-- 3 -->
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2018/08/22/10/07/summer-3623282_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Jardinería
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <!-- 4 -->
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2020/08/10/06/52/cleaning-5476953_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Hogar
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <!-- 5 -->
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Fontanería
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <!-- 6 -->
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Pintura
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageIndex"
};
</script>

<style lang="sass" scoped>
.my-font
  font-family: 'Roboto Condensed', sans-serif

.my-card
  width: 100%
  max-width: 300px
</style>
