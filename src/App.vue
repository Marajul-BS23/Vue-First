<template>
  <div>
    <NavBar></NavBar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Toast />
  </div>
</template>

<script>
// import CardMain from "./components/CardMain.vue";
import NavBar from "./components/NavBar.vue";
import Toast from "primevue/toast";
export default {
  components: {
    // CardMain,
    NavBar,
    Toast,
  },
  computed: {},
  data() {
    return {
      oktime: new Date().toLocaleTimeString(),
    };
  },
  created() {
    setInterval(() => {
      this.oktime = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>
