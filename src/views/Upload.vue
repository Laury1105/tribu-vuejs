<template>
  <div class="upload-container">
    <input type="file" @change="OnFileSelected">
    <button @click="OnUpload">Upload</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Upload",
  data: function() {
    return { 
        selectedFile:null
      };
  },
  methods: {
    async uploadImage() {
      await axios
      .post("http://localhost:8081/add_image.php", this.file)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    },
    OnFileSelected(event){
      console.log(event.target.files[0])
     this.selectedFile = event.target.files[0]
    },
    async OnUpload(){
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:8081",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
      };
     await axios
      .post("http://localhost:8081/add_image.php", {file_name : this.selectedFile.name},{ headers })
      .then(response => console.log(response))
      .catch(err => console.log(err));
    } 
  },
  components:{
  }

};
</script>
