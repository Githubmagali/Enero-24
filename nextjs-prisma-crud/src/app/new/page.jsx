"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


 function NewPage ({params}){

    const router = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(()=>{
        if(params.id){
            fetch(`/api/task/${params.id}`)
            .then((respuesta) => respuesta.json())
            .then((data) => {
                setTitle(data.title)
                setDescription(data.description)
            })

        }
      
    }, [])

    const onSubmit = async (e)=>{
        e.preventDefault()
        
     if (params.id){
      const respuesta =await fetch(`/api/task/${params.id}`,{
        method: 'PUT',
        body: JSON.stringify({title, description}),
        headers: {
            'Content-Type': 'application/json',
        }
        
       })
       const data = await respuesta.json()
       console.log(data)

     }else{
        const respuesta= await  fetch('api/task',{
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(respuesta)
        const data = await respuesta.json()
        console.log(data)
     }
    router.push('/');
    }

    return(
     <div className="h-screen flex justify-center">
        <form className="py-20" onSubmit={onSubmit}>
        <label htmlFor="title" className="flex justify-center items-center text-center py-3 w-full">Tarea</label>
        <input type="text" id="title" className="border p-2 mb-4 w-full rounded" placeholder="Titulo" onChange={(e)=>setTitle(e.target.value)}value={title}/>
        <textarea rows="3" id="description" className="border p-2 mb-4 w-full resize-none rounded" placeholder="Descripcion" onChange={(e)=>setDescription(e.target.value)}value={description}></textarea>
        <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded mx-auto block">Crear</button>
        </form>
     </div>
    )
}

export default NewPage