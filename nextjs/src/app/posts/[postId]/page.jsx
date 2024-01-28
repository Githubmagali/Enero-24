import Posts from "../page"
import { Suspense } from "react"

async function loadPost(id){
   const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = res.json()

   return data
}

async function Page({params}){
   const post = await loadPost(params.postId)
    return(
        <div>
        <div>{post.title}</div>
        <p>{post.body}</p>
  <br />
        <h3>Otras publicaciones</h3>
        <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <Posts />
        </Suspense>
       
        </div>
    )
}

export default Page