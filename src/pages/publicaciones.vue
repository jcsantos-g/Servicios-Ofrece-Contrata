<template>
  <div class="column my-font">
    <div class="row justify-center full-height full-width text-center q-ma-xl text-weight-bold">
      <p class="titulo">Ofrece tus servicios!</p>
    </div>
    <!-- row -->
    <div
      class="row justify-center items-center full-height full-width text-center"
    >
      <q-btn
        no-caps
        color="indigo-6"
        icon="post_add"
        label="Publicar"
        @click="showDialog = true"
      />
    </div>
    <!-- row -->
    <div class="row fit">
      <div class="col-1"></div>
      <div class="col-10 bordes q-my-xl">
        <div class="text-center q-ma-md">
          <span class="subTitulo">Servicios Ofrecidos</span>
        </div>
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
                flat
                size="md"
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
                flat
                size="md"
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
                flat
                size="md"
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
    <q-dialog v-model="showDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Completa los datos</div>
        </q-card-section>

        <q-card-section style="max-height: 50vh" class="scroll q-pt-none">
          <!-- <q-input dense autofocus /> -->
          <q-btn-dropdown
            color="indigo-6"
            outline
            class="q-my-md full-width"
            label="Seleccione el servicio"
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Opcion 1</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Opcion 2</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Opcion 3</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-input outlined color="indigo-10" label="Label" class="q-my-md">
            <template v-slot:prepend>
              <q-icon name="event" />
            </template>
          </q-input>
          <q-input outlined color="indigo-10" label="Label" class="q-my-md">
            <template v-slot:prepend>
              <q-icon name="event" />
            </template>
          </q-input>
          <q-input outlined color="indigo-10" label="Label" class="q-my-md">
            <template v-slot:prepend>
              <q-icon name="event" />
            </template>
          </q-input>
          <q-input outlined color="indigo-10" label="Label" class="q-my-md">
            <template v-slot:prepend>
              <q-icon name="event" />
            </template>
          </q-input>
          <q-input
            filled
            type="textarea"
            color="indigo-10"
            label="Label"
            class="q-my-md"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn
            icon="cancel"
            color="red"
            outline
            label="Cancelar"
            v-close-popup
          />
          <q-btn
            icon="task_alt"
            color="green"
            outline
            label="Terminar"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: "Publicaciones",
  data() {
    return {
      showDialog: false
    };
  }
  // setup() {
  //   return {};
  // }
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
.subTitulo {
  font-size: 20px;
  color: $indigo-10;
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
  .subTitulo {
    font-size: 18px;
    color: $indigo-10;
  }
}
</style>
