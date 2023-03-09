<template>
  <div class="home">
    <!-- <input type="text" v-model="search">
    <p>Search item - {{search}}</p>
    <div v-for="name in filteredNames" :key="name">
      {{name}}
    </div>
    <hr/>
    <br/>
    <hr/>
    <br/>
    <div v-if="showPosts">
      <PostsList :posts="posts"></PostsList>
    </div> -->
    <!-- <button @click="showPosts=!showPosts">Toggle Post lists</button>
    <button @click="posts.pop()">Delete</button> -->

    <!-- <hr/>
    <br/>
    <hr/>
    <br/> -->

    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0" class="layout">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <SpinnerPart></SpinnerPart>
    </div>



  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import SpinnerPart from '../components/SpinnerPart'
import PostsList from '../components/PostsList'
import { computed, ref } from 'vue'
import getPosts from "../composables/getPosts"

// @ is an alias to /src

export default {
  components: {
    TagCloud,
    SpinnerPart, PostsList },
  setup(){
    // let showPosts=ref(true);
    // let names =ref(['aung aung',`kyaw kyaw`,`su su`,`nu nu`]);
    // let search = ref('');
    // let posts=ref([
    //   {title:"post title 1",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora ipsam, fugit ea iure mollitia, nemo at expedita dolor aut obcaecati enim odio tempore sed quod quibusdam quisquam molestias pariatur reprehenderit deleniti provident consequatur minima! Possimus rem error optio doloribus, beatae quasi ea laborum debitis repellendus sint neque incidunt vel nemo quae dolore. Sequi, nulla. Velit consequuntur nihil aspernatur facere ducimus veritatis tempora molestias vero sapiente quas voluptatum nisi reprehenderit minus expedita fugiat distinctio consectetur repellendus cupiditate fugit, animi unde perferendis impedit provident. Praesentium deserunt, harum doloribus non officia labore nisi nulla perspiciatis alias laudantium reiciendis aut repudiandae aliquid perferendis.",id:1},
    //   {title:"post title 2",body:"lorem ipsum",id:2},
    // ]);
    let {posts,error,load} = getPosts();

    load();

    // let filteredNames=computed(()=>{
    //   return names.value.filter(name=>name.includes(search.value));
    // });

    return {posts,error};
  }
}
</script>
<style>
  .home{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>

