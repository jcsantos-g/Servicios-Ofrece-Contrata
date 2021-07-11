<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-indigo-10">
      <q-toolbar>
        <q-toolbar-title class="text-grey-4">NameApp</q-toolbar-title>
        <q-btn
          class="text-grey-4"
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-9 text-grey-10"
    >
      <q-scroll-area class="fit">
        <div class="q-pt-md" style="max-width: 250px">
          <q-list class="text-indigo-10">
            <!-- <q-item clickable v-ripple to="/" active-class="my-menu-link" exact>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>Inicio</q-item-section>
            </q-item> -->
            <!-- <q-separator spaced /> -->
            <q-item clickable v-ripple to="/Perfil" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>

              <q-item-section>Perfil</q-item-section>
            </q-item>
            <!-- <q-separator spaced /> -->
            <!-- <q-item
              clickable
              v-ripple
              to="/Servicios"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="saved_search" />
              </q-item-section>

              <q-item-section>Resultados</q-item-section>
            </q-item> -->
            <!-- <q-separator spaced /> -->
            <q-item
              clickable
              v-ripple
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>Salir</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <!-- Footer -->
    <q-footer elevated>
      <q-btn-group spread>
        <q-btn
          to="/"
          color="indigo-10"
          size="17px"
          icon="person_search"
          class="text-grey-4"
          label=""
        />
        <!-- <q-btn
          color="indigo-10"
          size="17px"
          icon="account_circle"
          class="text-grey-4"
          label=""
        /> -->
        <q-separator vertical color="indigo-8" />
        <q-btn
          to="/publicaciones"
          color="indigo-10"
          size="17px"
          icon="campaign"
          class="text-grey-4"
          label=""
        />
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss">
.my-menu-link {
  color: white;
  background: $indigo-10;
}
</style>
