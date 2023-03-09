<template>
  <h1>Post List</h1>
  <!-- {{posts}} -->
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
// import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts'],
    setup(props){
        // console.log(props.posts[0].id);
        // onMounted(()=>console.log(`mounted`));
        // onUnmounted(()=>console.log(`unmounted`));
        // onUpdated(()=>console.log(`Updated`));
    }

}
</script>

<style>

</style>