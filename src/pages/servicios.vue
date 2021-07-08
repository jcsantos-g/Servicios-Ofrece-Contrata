<template>
  <div class="column my-font">
    <div class="row justify-center full-height full-width text-center">
      <h5>Servicios encontrados</h5>
    </div>
    <div class="row justify-center full-height full-width text-center q-pa-md">
      <!-- 1 -->
      <q-card class="my-card q-ma-md">
        <div class="q-pt-md q-gutter-sm">
          <q-avatar size="80px">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" />
          </q-avatar>
        </div>
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Juan Santos
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              El refugio
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <div class="text-subtitle1">
            Albañilería
          </div>
          <div class="text-caption text-grey">
            Paredes, repellos, pisos y más.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions class="flex-center">
          <q-btn color="primary" flat round icon="visibility">
            Ver
          </q-btn>
        </q-card-actions>
      </q-card>
      <!-- 2 -->
      <q-card class="my-card q-ma-md">
        <div class="q-pt-md q-gutter-sm">
          <q-avatar size="80px">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png" />
          </q-avatar>
        </div>
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Angel Ruiz
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              Ahuachapán
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <div class="text-subtitle1">
            Soldador
          </div>
          <div class="text-caption text-grey">
            Soldaduras, estructuras metalicas y más.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions class="flex-center">
          <q-btn color="primary" flat round icon="visibility">
            Ver
          </q-btn>
        </q-card-actions>
      </q-card>
      <!-- 3 -->
      <q-card class="my-card q-ma-md">
        <div class="q-pt-md q-gutter-sm">
          <q-avatar size="80px">
            <img src="https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_960_720.png" />
          </q-avatar>
        </div>
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Debora Melcacho
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              Atiquizaya
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <div class="text-subtitle1">
            Casero
          </div>
          <div class="text-caption text-grey">
            Cuido niños, lavo, plancho y más.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions class="flex-center">
          <q-btn color="primary" flat round icon="visibility">
            Ver
          </q-btn>
        </q-card-actions>
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
