<template>
<div>
     <img class="image_overview" :src="`./images/`+ file_name">
</div>
</template>
<script>
export default{
    name: 'images',
    props: {
        file_name: String,
        id : String,
        0: String,
        1: String
    }
}
</script>