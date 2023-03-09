import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";


let getPosts = ()=>{
    let posts = ref([]);
    let error = ref('');

    let load =async()=>{
      try{
        // await new Promise((resolve,reject)=>{
        //   // resolve();
        //   setTimeout(resolve,2000);
        // });

        // json server

        // let response =await fetch('http://localhost:3000/posts/');
        // if(response.status===404){
        //   throw new Error(`not found url`);
        // }
        // let datas =await response.json();
        // posts.value = datas;

        // firebase collection fetch (version 8)
        // let res = await db.collection('posts').get();
        // posts.value = res.docs.map(doc=>{
        //return {id:doc.id,...doc.data()}
        //});


        // firebase collection fetch (version 9)
        let colResponse = collection(db,'posts');
        // console.log(colResponse);
        let documents  = await getDocs(colResponse);
          posts.value = documents.docs.map((doc)=>{
          return {id:doc.id, ...doc.data()}
        });

      }catch(err){
        console.log(err.message);
        error.value = err.message;
      }
    }
    return {posts,error,load};
}

export default getPosts;