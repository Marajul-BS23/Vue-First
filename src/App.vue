<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>

  <!-- <div>
    <div>{{ oktime }}</div>
  </div> -->
</template>

<script>
// import CardMain from "./components/CardMain.vue";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    // CardMain,
    NavBar,
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
