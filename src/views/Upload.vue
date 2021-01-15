<template>
  <div class="upload-container">
        <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
            allow-multiple="true"
            accepted-file-types="image/jpeg, image/png"
            server="http://localhost:8081/add_image.php"
            v-bind="myFiles"/>
          <div class="upload-button">
            <button @click="uploadImage" >Upload</button>
          </div>
  </div>
</template>

<script>
import axios from "axios";
import vueFilePond from "vue-filepond";
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  name: "Upload",
  data: function() {
    return { 
      myFiles: "" 
      };
  },
  methods: {
    uploadImage() {
      alert("upload")
    }
/*    async uploadImage() {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:8081",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
      };
       await axios
      .post("http://localhost:8081/add_image.php", this.myFiles, {headers})
      .then(response => console.log(response))
      .catch(err => console.log(err));
    } */
  },
  components: {
    FilePond
  }
};
</script>