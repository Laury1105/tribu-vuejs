<template>
  <div class="upload-container">
        <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
            allow-multiple="true"
            accepted-file-types="image/jpeg, image/png"
            v-on:init="uploadImage"
            v-bind:files="myFiles"/>
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
      console.log("Upload image" + this.myFiles);
    },
  },
  components: {
    FilePond,
  },
  computed: {
    activePage() {
      return this.$store.state.activePage;
    },
  },
};
</script>
