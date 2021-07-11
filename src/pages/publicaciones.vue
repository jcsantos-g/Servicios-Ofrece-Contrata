<template>
  <div class="column my-font">
    <div class="row justify-center full-height full-width text-center q-pt-md">
      <p class="titulo">Ofrece tus servicios!</p>
    </div>
    <!-- row -->
    <div class="row justify-center full-height full-width text-center">
      <q-btn no-caps color="indigo-10" icon="post_add" label="Publicar" />
    </div>
    <!-- row -->
    <div class="row fit">
      <div class="col-1"></div>
      <div class="col-10 bordes q-my-xl">
        <div class="text-center q-ma-md"><span>Servicios Ofrecidos</span></div>
        <div class="row justify-center text-center items-center q-mb-md">
          <!-- 1 -->
          <q-card class="my-card q-ma-md">
            <q-card-section class="bg-indigo-10 text-white">
              <div class="text-h6">Albañilería</div>
              <!-- <div class="text-subtitle2">Descripcion</div> -->
            </q-card-section>

            <q-separator />

            <q-card-actions align="center">
              <q-btn
                no-caps
                size="sm"
                color="indigo-6"
                label="Detalles"
                icon="info"
              ></q-btn>
            </q-card-actions>
          </q-card>
          <!-- 2 -->
          <q-card class="my-card q-ma-md">
            <q-card-section class="bg-indigo-10 text-white">
              <div class="text-h6">Albañilería</div>
              <!-- <div class="text-subtitle2">Descripcion</div> -->
            </q-card-section>

            <q-separator />

            <q-card-actions align="center">
              <q-btn
                no-caps
                size="sm"
                color="indigo-6"
                label="Detalles"
                icon="info"
              ></q-btn>
            </q-card-actions>
          </q-card>
          <!-- 3 -->
          <q-card class="my-card q-ma-md">
            <q-card-section class="bg-indigo-10 text-white">
              <div class="text-h6">Albañilería</div>
              <!-- <div class="text-subtitle2">Descripcion</div> -->
            </q-card-section>

            <q-separator />

            <q-card-actions align="center">
              <q-btn
                no-caps
                size="sm"
                color="indigo-6"
                label="Detalles"
                icon="info"
              ></q-btn>
            </q-card-actions>
          </q-card>
          <!-- FIN CARDS -->
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <!-- FIN ROW PRINCIPAL -->
  </div>
</template>
<script>
export default {
  name: "Publicaciones"
};
</script>

<style lang="scss" scoped>
.my-font {
  font-family: "Roboto Condensed", sans-serif;
}

.my-card {
  width: 100%;
  max-width: 250px;
}
.bordes {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: #c0c0c0;
}
.titulo {
  font-size: 60px;
}

@media (max-width: 1024px) {
  .titulo {
    font-size: 50px;
  }
}

@media (max-width: 767px) {
  .titulo {
    font-size: 30px;
  }
}
</style>
