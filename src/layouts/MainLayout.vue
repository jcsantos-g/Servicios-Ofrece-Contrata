<template>
  <q-layout view="hHh lPr fFf">
    <q-header elevated class="bg-grey-9">
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
        <q-list padding>
          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Calificar </q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Contactar </q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Acerca de </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <!-- Footer -->
    <q-footer elevated>
      <q-btn-group spread>
        <q-btn
          color="grey-9"
          size="17px"
          icon="person_search"
          class="text-grey-4"
          label=""
        />
        <q-btn
          color="grey-9"
          size="17px"
          icon="account_circle"
          class="text-grey-4"
          label=""
        />
        <q-btn
          color="grey-9"
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
  background: $light-blue-11;
}
</style>
