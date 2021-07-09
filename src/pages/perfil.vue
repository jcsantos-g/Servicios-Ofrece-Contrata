<template>
  <div class="column">
    <!-- ROW 1 -->
    <div
      class="row justify-center items-center text-center full-height full-width  q-pt-md"
    >
      <q-avatar
        class="q-mb-sm shadow-5 items-center"
        size="100px"
        round="round"
        color="blue-grey-10"
        icon="person"
        font-size="100px"
        text-color="white"
      >
        <!-- <q-img></q-img> -->
      </q-avatar>
    </div>
    <!-- ROW 2 -->
    <div class="row justify-center text-center q-py-md">
      <!-- <q-input rounded standout label="Acerca de..." /> -->

      <q-item-label class="text-indigo-10 text-h6 text-weight-bold"
        >Juan Carlos Santos Garcia</q-item-label
      >
    </div>
    <!-- ROW 2.1 -->

    <div class="row justify-center text-center q-pb-md">
      <q-item-label class="text-caption">Acerca de...</q-item-label>
    </div>
    <!-- ROW 3 -->
    <div class="row justify-center text-center">
      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-indigo-10 q-my-sm text-weight-bold"
              >Albañilería</q-item-label
            >
            <q-separator />
            <q-item-label class="text-caption text-grey-7 q-my-sm text-weight-bold"
              >Ubicacion</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal>
          <q-card-section class="col-6">
            <q-item-label class="text-indigo-10 text-subtitle1 q-my-md text-weight-bold"
              >Servicios</q-item-label
            >
            <q-list bordered>
              <q-item>
                <q-item-section>Servicio 1</q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>Servicio 2</q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>Servicio 3</q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>Servicio 4</q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>Servicio 5</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-card-section>
          <q-separator vertical />

          <q-card-section class="col-6">
            <q-item-label class="text-indigo-10 text-subtitle1 q-my-md text-weight-bold"
              >Contacto</q-item-label
            >
            <q-list bordered>
              <q-item>
                <q-item-section class="text-subtitle1 q-my-md text-weight-bold"
                  >Numero</q-item-section
                >
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>76338752</q-item-section>
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section class="text-subtitle1 q-my-md text-weight-bold"
                  >Correo</q-item-section
                >
              </q-item>
              <q-separator />
              <q-item>
                <q-item-section>correo@correo.com</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Perfil"
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
