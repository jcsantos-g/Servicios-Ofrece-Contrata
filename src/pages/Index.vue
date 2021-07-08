<template>
  <div class="column my-font">
    <div class="row justify-center full-height full-width text-center">
        <h5>Encuentra Servicios y Apoyos</h5>
      </div>
    
    <div class="row justify-center full-height full-width text-center">
        <q-input filled type="search" hint="Buscar" label="Ej: albañil, carpintero">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="row justify-center full-height full-width text-center q-pa-md">
      <p class="q-mt-md">Categorías más populares</p>
      <q-card class="my-card q-mb-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Albañilería
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <q-card class="my-card q-mb-md">
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
      <q-card class="my-card q-mb-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2018/08/22/10/07/summer-3623282_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Jardinería
          </div>
        </q-img>
        <q-card class="my-card q-mb-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2020/08/10/06/52/cleaning-5476953_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Caseros
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2017/08/01/09/34/white-2563976_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Cristalería
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
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
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2017/09/19/22/10/tool-2766835_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Electricidad
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2016/03/09/15/22/painter-1246619_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Pintura
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2018/08/25/05/02/air-conditioner-3629396_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Climatización
          </div>
        </q-img>
        <!-- <q-card-section>
      </q-card-section> -->
      </q-card>
      <q-card class="my-card q-ma-md">
        <q-img
          src="https://cdn.pixabay.com/photo/2017/06/09/04/02/wood-working-2385634_960_720.jpg"
        >
          <div class="absolute-bottom text-h6">
            Carpintería
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
