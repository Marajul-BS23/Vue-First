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
  <Dialog
    header="Edit Course"
    v-model:visible="displayModal"
    :style="{ width: '400px' }"
    :modal="true"
  >
    <form class="modalForm" @submit.prevent="editCourseTemp">
      <InputText type="text" class="p-inputtext-sm" v-model.trim="editInput" />
      <Button class="p-button p-button-sm" label="Edit Course" type="submit" />
    </form>
  </Dialog>
</template>

<script>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
export default {
  props: {
    deleteCourse: Function,
    dataArray: Array,
    editCourse: Function,
  },
  components: {
    Button,
    Dialog,
    InputText,
  },
  data() {
    return {
      displayModal: false,
      editInput: "",
      currentIndex: 0,
    };
  },
  methods: {
    openModal(index) {
      this.displayModal = true;
      this.editInput = this.dataArray[index];
      this.currentIndex = index;
    },
    editCourseTemp() {
      this.editCourse(this.currentIndex, this.editInput);
      this.displayModal = false;
      this.editInput = "";
    },
  },
};
</script>

<style>
.modalForm {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
