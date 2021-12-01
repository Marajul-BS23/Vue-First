<template>
  <ConfirmDialog></ConfirmDialog>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset
        style="max-width: 375px; margin: 20px auto"
        :toggleable="true"
        :collapsed="false"
      >
        <template #legend> Course ({{ countCourse }}) </template>
        <CourseList
          :openModal="openModal"
          :deleteCourse="deleteCourse"
          :dataArray="dataArray"
        />
        <AddCourseForm :addCourse="addCourse" />

        <Dialog
          header="Edit Course"
          v-model:visible="displayModal"
          :style="{ width: '400px' }"
          :modal="true"
        >
          <form class="modalForm" @submit.prevent="editCourse">
            <InputText
              type="text"
              class="p-inputtext-sm"
              v-model.trim="editInput"
            />
            <Button
              class="p-button p-button-sm"
              label="Edit Course"
              type="submit"
            />
          </form>
        </Dialog>
      </Fieldset>
    </div>
  </div>
</template>
<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Fieldset from "primevue/fieldset";
import Dialog from "primevue/dialog";
import ConfirmDialog from "primevue/confirmdialog";
import CourseList from "../components/CourseList";
import AddCourseForm from "../components/AddCourseForm.vue";

export default {
  components: {
    Button,
    InputText,
    Fieldset,
    Dialog,
    ConfirmDialog,
    CourseList,
    AddCourseForm,
  },

  computed: {
    countCourse() {
      return this.dataArray.length;
    },
  },

  methods: {
    addCourse(newValue) {
      //After Submitting the form
      if (newValue != "") {
        // Push The value to the array
        this.dataArray.push(newValue);
      }
    },
    deleteCourse(index) {
      // after clicking the cross button

      // delete from data array
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.dataArray.splice(index, 1);
          this.$toast.add({
            severity: "warn",
            summary: "Delete Successful",
            life: 3000,
          });
        },
      });
    },
    editCourse() {
      this.dataArray[this.currentIndex] = this.editInput;
      this.displayModal = false;
      this.$toast.add({
        severity: "success",
        summary: "Edit Succesfull",
        life: 3000,
      });
    },
    openModal(index) {
      this.displayModal = true;
      this.editInput = this.dataArray[index];
      this.currentIndex = index;
    },
  },

  data() {
    return {
      newSubject: "",
      dataArray: ["C++", "Java", "Algorithm", "Data structure", "Math"],
      displayModal: false,
      editInput: "",
      currentIndex: 0,
    };
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
