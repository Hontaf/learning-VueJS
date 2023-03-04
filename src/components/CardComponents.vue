<script setup>
    defineProps(['index','id','title','body'])
    defineEmits(["delete"])

</script>

<template>

    <div class="pad">
        <div class="card bg-card" >
            <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ body }}</p>
            <a href="#" class="btn btn-primary">See More</a>
            <a href="#" @click="$emit('delete',index)" class="btn btn-danger fl-g">Delete</a>
          </div>
        </div>
    </div>

</template>
<style>
    .bg-card{
        background-color: lightcyan !important ;
    }
    .pad{
        padding: 5px;
    }
    .fl-g{
        float: right !important;
    }
</style>