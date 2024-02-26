"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


 function NewPage ({params}){

    const router = useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        if(params.id){
            fetch(`/api/task/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTitle(data.title);
                setDescription(data.description);
            });
        }  
    }, []);

    const onSubmit = async (e)=>{
        e.preventDefault()
        
     if (params.id){
      const res = await fetch(`/api/task/${params.id}`,{
        method: 'PUT',
        body: JSON.stringify({title, description}),
        headers: {
            'Content-Type': 'application/json',
        },
        
       })
       const data = await res.json()
      // console.log(data)
     }else{
        const res = await  fetch('/api/task',{
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
       
        const data = await res.json()
        console.log(data)
     }
     router.refresh()
    router.push('/');
    }

    return(
     <div className="h-screen flex justify-center">
        <form className="py-20" onSubmit={onSubmit}>
        <label htmlFor="title" className="flex justify-center items-center text-center py-3 w-full">Tarea</label>
        <input type="text" id="title" className="border p-2 mb-4 w-full rounded" placeholder="Titulo" onChange={(e)=>setTitle(e.target.value)}value={title}/>
        <textarea rows="3" id="description" className="border p-2 mb-4 w-full resize-none rounded" placeholder="Descripcion" onChange={(e)=>setDescription(e.target.value)}value={description}></textarea>
        <div className='flex '>
        <button type="submit" className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded mx-auto block">Create</button>

        {params.id && (
            <button type="button" className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded mx-auto block"
            onClick={async()=>{ const res= await fetch(`/api/task/${params.id}`,{method: "DELETE"})
               const data = await res.json()
               router.refresh()
               router.push("/")
        }}>Delete</button>
        )}
        </div>
        </form>


     </div>
    )
}

export default NewPage