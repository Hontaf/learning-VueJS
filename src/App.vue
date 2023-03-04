<script setup>
import HeaderComponents from './components/HeaderComponents.vue';
import CardComponents from './components/CardComponents.vue'
import FooterComponents from './components/FooterCompoonents.vue'
import axios from "axios"
import {ref ,onMounted} from "vue"

const posts = ref([])

onMounted(()=>{
  axios.get("http://jsonplaceholder.typicode.com/posts?_page=1&_limit=36").then(
    response=>{
        posts.value = response.data
    }
  )
})

function deletePost(index){
      console.log(index);
      posts.value.splice(index,1)
  }
</script>

<template>

    <main>
      <section>
        <HeaderComponents />
      </section>
      <section>
      <div class="row">
        <div v-for =" (post,index) in posts" :key = "post.id" class="col-4" >
          <CardComponents :index ="index" :id = "post.id" :title =" post.title " :body = "post.body" @delete="deletePost" />
        </div>
      </div>
      </section>
    </main>
    <FooterComponents />
</template>
<style>

</style>