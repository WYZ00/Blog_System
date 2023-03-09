<template>
  <!-- <h1>Detail {{id}}</h1> -->
  <div v-if="post" class="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <button class="delete" @click="deletePost">delete</button>
  </div>
  <div v-else>
    <SpinnerPart></SpinnerPart>
  </div>
</template>

<script>
import SpinnerPart from '../components/SpinnerPart'
import getPost from "../composables/getPost"
import {useRoute, useRouter} from "vue-router"
import { db } from '@/firebase/config'
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite'
export default {
  components: { SpinnerPart },
    props:['id'], //this.$route.params.id
    setup(props){
        let route = useRoute();
        let router = useRouter();
      // console.log(route.params.id);
        let {post,error,load} = getPost(route.params.id);
        load();
        let deletePost=async()=>{
          let id = props.id;
          // console.log(id);
          
          // firebase version 8
          //await db.collection('posts).doc(id).delete();

          // firebase version 9
          const docRef = doc(db,'posts',id);
          await deleteDoc(docRef);

          router.push('/');
          
        }
        return{post,error,deletePost};
    }
}
</script>

<style>
.post{
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  
  .post h2{
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }

  .post h2::before{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1.5deg);
    }

    .pill{
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }

    button.delete{
      margin: 30px auto;
    }
</style>