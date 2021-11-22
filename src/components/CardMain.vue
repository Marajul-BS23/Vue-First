<template>
    <Card style="max-width:400px; margin:auto;">
        <template #title>
            

            List of Course {{countCourse}}
        </template>

        <template #content>
            <ul >
            <li style="padding:5px;font-size:20px;" v-for="(item,index) in dataArray" :key="index">{{item}}
                <Button @click="deleteCourse(index)" class="p-button-rounded p-button-sm p-button-danger" icon="pi pi-times"/>
                
            
            </li>
            </ul>
        </template>
        <template #footer>
            <form @submit.prevent="addCourse">
            <InputText type="text" v-model.trim="newSubject" />
            <Button class="p-button" label="Add Course" type="submit"/>
            </form>
        </template>
    </Card>
</template>
<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';


export default {
    components:{Card,Button,InputText},
      computed:{
    countCourse(){
      return this.dataArray.length;
    }
  },
  methods:{
    addCourse(){
      if(this.newSubject!=""){
        this.dataArray.push(this.newSubject);
       this.newSubject = "";
      }

    },
    deleteCourse(index){
      this.dataArray.splice(index,1);
    }
  },
  data()
  {
    return{
      name: "Marajul",
      newSubject:"Compiler Design",
      dataArray: ["C++","Java","Algorithm","Data structure", "Lool"],
    }
  }
}
</script>
