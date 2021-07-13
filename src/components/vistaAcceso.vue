<template>
  <div class="q-px-xl">
    <h5>Login/Registro</h5>
    <q-form class="q-gutter-md">
      <!-- <q-input label="Email" v-model="email" />
      <q-input label="Password" v-model="password" /> -->
      <div>{{ prueba }}</div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const prueba = ref(3);
    return { prueba };
  }
  // };
  // }
  // setup() {
  //   prueba = ref(3);
  //   const email = ref("");
  //   const password = ref("");
  //   return {
  //     prueba,
  //     email,
  //     password
  //   };
  // }
};
</script>
