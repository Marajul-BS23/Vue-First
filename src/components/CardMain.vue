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

        <form @submit.prevent="addCourse">
          <InputText
            type="text"
            class="p-inputtext-sm"
            v-model.trim="newSubject"
          />
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
          <Button
            class="p-button p-button-sm"
            label="Add Course"
            type="submit"
          />
        </form>
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

export default {
  components: { Button, InputText, Fieldset, Dialog, ConfirmDialog },

  computed: {
    countCourse() {
      return this.dataArray.length;
    },
  },

  methods: {
    addCourse() {
      //After Submitting the form
      if (this.newSubject != "") {
        // Push The value to the array
        this.dataArray.push(this.newSubject);
        this.newSubject = "";
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
      name: "Marajul",
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
