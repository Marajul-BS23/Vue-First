<template>

  <h1>Course of {{name}}</h1>
  
  <p>List of Course {{dataArray.length}}</p>

  <ul >
    <li v-for="(item,index) in dataArray" :key="index">{{item}}</li>
  </ul>

  <form @submit.prevent="addCourse">
    <input type="text" v-model.trim="newSubject">
    <button type="submit">Add Course</button>
  </form>

</template>



<script>
export default {
  methods:{
    addCourse(){
      if(this.newSubject!=""){
        this.dataArray.push(this.newSubject);
       this.newSubject = "";
      }

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

<style>

</style>