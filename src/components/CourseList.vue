<template>
  <ul>
    <li
      style="padding: 5px; font-size: 17px"
      v-for="(item, index) in dataArray"
      :key="index"
    >
      {{ item }}

      <Button
        @click="deleteCourse(index)"
        class="p-button-rounded p-button-sm p-button-danger"
        style="margin: 0; padding: 0; height: 27px; width: 27px"
        icon="pi pi-times"
      />

      <Button
        @click="openModal(index)"
        class="p-button-rounded p-button-sm p-button-warning"
        style="margin-left: 5px; padding: 0px; height: 27px; width: 27px"
        icon="pi pi-pencil"
      />
    </li>
  </ul>
</template>

<script>
import Button from "primevue/button";
export default {
  props: {
    openModal: Function,
    deleteCourse: Function,
    dataArray: Array,
  },
  components: {
    Button,
  },
};
</script>

<style></style>
