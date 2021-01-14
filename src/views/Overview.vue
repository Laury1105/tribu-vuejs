<template>
  <div class="overview-container">
    <images v-for="image in images" v-bind='image' v-bind:key="image.id"/>
    <observer v-on:intersect="intersected"></observer>
  </div>
</template>

<script>
import axios from "axios";
import Observer from '../components/Observer';
import Images from '../components/Images';
export default {
  name: "Overview",
  components: {
    Observer, Images
  },
  computed:{
    activePage() {
      return this.$store.state.activePage;
    },
  },
  data() {
    return {
      page: 1,   
      images: [],
    };
  },
  methods:{
    async intersected(){
       const res = await fetch("http://localhost:8081/?page="+this.page++);
       const items = await res.json();
       const images = items.results.results.images;
       this.images = [...this.images, ...images];

     }
  }
};
</script>
