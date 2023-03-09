<template>
  <form action="" @submit.prevent="addPost">
    <label for="title">Title</label>
    <input id="title" name="title" type="text" v-model="title" required>

    <label for="body">Body</label>
    <textarea name="body" id="body" v-model="body" required></textarea>

    <label for="tag">Tags(Hit enter for add tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">

    <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
    </div>

    <button>add post</button>

  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { db } from '@/firebase/config';
export default {
    setup(){
        let router = useRouter();
        let title = ref('');
        let body = ref('');
        let tag = ref('');
        let tags = ref([]);

        let handleKeydown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value='';
        }

        let addPost=async()=>{

            // json server
        //    await fetch("http://localhost:3000/posts",{
        //     method:"POST",
        //     headers:{
        //         "Content-type":"application/json"
        //     },
        //     body:JSON.stringify(
        //         {
        //             title:title.value,
        //             body:body.value,
        //             tags:tags.value
        //         }
        //     )
        //    });

        

        
        let newpost = {
            title:title.value,
            body:body.value,
            tags:tags.value,
            created_at:serverTimestamp()
        }

        // firebase 8
        //await db.collection('posts').add(newpost)
        
        // firebase 9
        let res = await addDoc(collection(db,'posts'),newpost);
        // console.log(res);

            // redirect user to home page
            router.push('/');
           
        }

        return {title,body,tag,tags,handleKeydown,addPost};
    }
}
</script>

<style>
    form{
        max-width: 480px;
        margin: 0 auto;
        text-align: left;
    }

    input,textarea{
        display: block;
        margin: 10px 0;
        width: 100%;
    }

    textarea{
        height: 160px;

    }

    label{
        display: inline-block;
        margin-top: 30px;
        position: relative;
        font-size: 20px;
        color: white;
        margin-bottom: 10px;
    }

    label::before{
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

    button{
        display: block;
        margin-top: 30px;
        background: #ff8800;
        color: white;
        border: none;
        padding: 8px 16px;
        font-size: 18px;
        cursor: pointer;
    }

    button:active{
        color: #ddd;
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
</style>