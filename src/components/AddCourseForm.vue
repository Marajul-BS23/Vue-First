<template>
  <form @submit.prevent="addCoursefromProp">
    <InputText
      type="text"
      class="p-inputtext-sm"
      v-model.trim="newSubjectValue"
    />

    <Button class="p-button p-button-sm" label="Add Course" type="submit" />
  </form>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
export default {
  components: {
    Button,
    InputText,
  },
  data() {
    return {
      newSubjectValue: "",
    };
  },
  methods: {
    addCoursefromProp() {
      if (this.newSubjectValue != "") {
        this.$store.commit("addCourse", this.newSubjectValue);
        this.newSubjectValue = "";
      }
    },
  },
};
</script>

<style></style>
