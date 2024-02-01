"use client"

import { useRouter } from "next/navigation";


function TaskCard({task}){

    const router = useRouter();
     
  
    return(
        <div key={task.id} className="p-3 bg-gray-300 rounded break-normal min-w-0 
         hover:bg-gray-400 hover:cursor-pointer"
         onClick={() => router.push('/task/edit/' + task.id)}
         >           
        <h3 className="font-bold p-4">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-xs pt-4 md:ml-80">{new Date(task.createAt).toLocaleDateString()}</p>
      </div>
     
    )

}


export default TaskCard;
    
