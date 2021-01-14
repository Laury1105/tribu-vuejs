<template>
  <div>
    {{activePage}}
  </div>
</template>

<script>

export default {
  name: 'Upload',
  components: {
  },
    computed:{
  activePage(){
     return this.$store.state.activePage
    }
  }
}
</script>
