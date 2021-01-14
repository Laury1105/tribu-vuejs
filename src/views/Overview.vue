<template>
  <div>
    {{activePage}}
  </div>
</template>

<script>

export default {
  name: 'Overview',
  components: {
  },
  computed:{
    activePage(){
     return this.$store.state.activePage
    }
  }
}
</script>
