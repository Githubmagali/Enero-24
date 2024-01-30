"use client"
import { useRouter } from 'next/navigation'



 function NewPage (){

    const router = useRouter()

    const onSubmit = async (e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        
     const respuesta= await  fetch('api/task',{
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await respuesta.json()
    console.log(data)
    router.push('/');
    }

    return(
     <div className="h-screen flex justify-center">
        <form className="py-20" onSubmit={onSubmit}>
        <label htmlFor="title" className="flex justify-center items-center text-center py-3 w-full">Tarea</label>
        <input type="text" id="title" className="border p-2 mb-4 w-full rounded" placeholder="Titulo"/>
        <textarea rows="3" id="description" className="border p-2 mb-4 w-full resize-none rounded" placeholder="Descripcion"></textarea>
        <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded mx-auto block">Crear</button>
        </form>
     </div>
    )
}

export default NewPage