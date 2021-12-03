<template>
  <div>
    <NavBar></NavBar>

    <router-view></router-view>

    <Toast />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Toast from "primevue/toast";

export default {
  components: {
    NavBar,
    Toast,
  },
};
</script>
