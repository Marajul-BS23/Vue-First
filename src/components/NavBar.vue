<template>
  <Menubar :model="items">
    <template #start>
      <div style="display: flex; margin: auto 10px">
        <img
          src="../assets/logo.svg"
          alt=""
          style="height: 40px; width: 40px"
        />
        <router-link
          to="/"
          style="font-size: 25px; text-decoration: none; color: black"
          >Vue Practice</router-link
        >
      </div>
    </template>
    <template #item="{ item }">
      <router-link
        :to="item.link"
        style="margin: auto 10px; text-decoration: none; color: black"
        :icon="item.icon"
        >{{ item.label }}
      </router-link>
    </template>
    <template #end> </template>
  </Menubar>
</template>

<script>
import Menubar from "primevue/menubar";
export default {
  components: { Menubar },
  data() {
    return {
      items: [
        {
          label: "Course",
          icon: "pi pi-fw pi-trash",
          link: "/course",
        },
        {
          label: "Calender",
          icon: "pi pi-fw pi-trash",
          link: "/calender",
        },
      ],
    };
  },
};
</script>

<style></style>
