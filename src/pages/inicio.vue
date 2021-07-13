<template>
  <div class="column my-font">
    <div
      class="row justify-center full-height full-width text-center q-ma-md text-weight-bold"
    >
      <p class="titulo">
        Te ayudamos a encontrar<br />
        el servicio que necesitas
      </p>
    </div>

    <div class="row justify-center full-height full-width text-center">
      <!-- <div class=""> -->
      <div class="buscador q-gutter-y-md column">
        <q-toolbar class="bg-indigo-6 text-white rounded-borders">
          <q-icon name="search" style="font-size: 2em;"></q-icon>
          <q-space />

          <q-input
            class="buscador2"
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
      <q-card class="my-card q-ma-md cursor-pointer">
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
              to="/busquedas"
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
  name: "Inicio"
};
</script>

<style lang="scss" scoped>
.my-font {
  font-family: "Roboto Condensed", sans-serif;
}
.my-card {
  width: 100%;
  max-width: 300px;
}
.titulo {
  font-size: 40px;
}
.buscador {
  width: 500px;
  max-width: 100%;
}
.buscador2 {
  width: 435px;
  max-width: 100%;
}

@media (max-width: 1024px) {
  .buscador {
    width: 400px;
  }
  .buscador2 {
    width: 335px;
  }
  .titulo {
    font-size: 35px;
  }
}

@media (max-width: 767px) {
  .buscador {
    width: 300px;
  }
  .buscador2 {
    width: 235px;
  }
  .titulo {
    font-size: 25px;
  }
}
</style>
