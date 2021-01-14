<template>
  <div class="overview-container">
    <scroll-loader :loader-method="getImageList" :loader-disable="disable">
    </scroll-loader>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Overview",
  mounted() {
    this.getImageList();
  },
  computed: {
    activePage() {
      return this.$store.state.activePage;
    },
  },
  methods: {
    getImageList() {
      axios
        .get("https://api.unsplash.com/photos", {
          params: {
            page: this.page++,
            per_page: this.pageSize,
            client_id:
              "e874834b096dcd107c232fe4b0bb521158b62e486580c988b0a75cb0b77a2abe",
          },
        })
        .then((res) => {
          res.data && (this.images = [...this.images, ...res.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    page(value) {
      this.disable = value > 10;
    },
  },
};
</script>
