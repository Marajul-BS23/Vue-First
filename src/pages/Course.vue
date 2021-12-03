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

        <CourseList />

        <AddCourseForm />
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
      return this.$store.state.dataArray.length;
    },
  },
};
</script>
