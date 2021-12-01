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
          :deleteCourse="deleteCourse"
          :dataArray="dataArray"
          :editCourse="editCourse"
        />

        <AddCourseForm :addCourse="addCourse" />
      </Fieldset>
    </div>
  </div>
</template>
<script>
import Fieldset from "primevue/fieldset";
import ConfirmDialog from "primevue/confirmdialog";
import CourseList from "../components/CourseList";
import AddCourseForm from "../components/AddCourseForm.vue";

export default {
  components: {
    Fieldset,
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
      // after clicking the cross button  delete from data array
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
    editCourse(currentIndex, currentText) {
      this.dataArray[currentIndex] = currentText;
      this.$toast.add({
        severity: "success",
        summary: "Edit Succesfull",
        life: 3000,
      });
    },
  },

  data() {
    return {
      dataArray: ["C++", "Java", "Algorithm", "Data structure", "Math"],
    };
  },
};
</script>
