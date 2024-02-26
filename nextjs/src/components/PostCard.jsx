"use client"
import Link from "next/link"

//RCC (REACT CLIENT COMPONENT)
function PostCard({post}){
    return(
        <div className="bg-gray-100 p-10">
         <Link href={`/posts/${post.id}`}>
         <h3 className="text-xl font-bold mb-4">{post.id}-{post.title}</h3>
         </Link>
            <p >{post.body}</p>
            <button onClick={()=>{alert('funcionando')}}>Ejecutar</button>
        </div>
    )
}

export default PostCard