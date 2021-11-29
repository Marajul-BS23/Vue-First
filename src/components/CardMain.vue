<template>
  <div class="p-grid">
    <div class="p-col">
      <Fieldset style="max-width: 375px; margin: 20px auto">
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
          </li>
        </ul>

        <form @submit.prevent="addCourse">
          <InputText
            type="text"
            class="p-inputtext-sm"
            v-model.trim="newSubject"
          />

          <Button class="p-button" label="Add Course" type="submit" />
        </form>
      </Fieldset>
    </div>
  </div>
</template>
<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Fieldset from "primevue/fieldset";

export default {
  components: { Button, InputText, Fieldset },

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
      this.dataArray.splice(index, 1);
    },
  },

  data() {
    return {
      name: "Marajul",
      newSubject: "Compiler Design",
      dataArray: ["C++", "Java", "Algorithm", "Data structure", "Lool"],
    };
  },
};
</script>
