import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore/lite";
import { ref } from "vue";

let getPost = (id)=>{

    let post = ref(null);
    let error = ref("");

    let load =async() =>{
       try{
        // await new Promise((resolve,reject)=>{
        //     setTimeout(resolve,2000);
        // });

        //json server

        // let response = await fetch('http://localhost:3000/posts/'+id);
        // if(response.status===404){
        //     throw new Error("not found that exact url");
        // }
        // let datas = await response.json();
        // post.value = datas;

        // let colResponse = collection(db,'posts');
        // let documents  = await getDocs(colResponse);
        // console.log(documents);
        
        // firebase
        // firebase collection fetch (version 9)
        const docRef = doc(db,'posts',id);
        // console.log(docRef);
        const docSnap = await getDoc(docRef);
        // console.log(docSnap.data());
        post.value = {id:docSnap.id,...docSnap.data()} 

        // firebase collection fetch (version 8)
    //    let doc = await db.collection("posts").doc(id).get();
    //    post.value = {id:docSnap.id,...docSnap.data()} 

        }catch(err){
            console.log(err.message);
            error.value = err.message;
        }
    }

    return {post,error,load};
}

export default getPost;