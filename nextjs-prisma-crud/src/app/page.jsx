import Link from "next/link";
import { prisma } from "./libs/prisma";
import TaskCard from "./components/TaskCard";

async function loadTasks(){
  //obteniendo la base de datos;
  //const respuesta = await fetch('http://localhost:3000/api/task');
  //const data = await respuesta.json()
 return await prisma.task.findMany()
  
}

async function HomePage(){
 const tasks = await loadTasks()



  return(
    <section className="container mx-auto">
   <div className="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
    {tasks.map(task =>(
      <TaskCard  task={task} key={task.id} />
    ))}
  </div>
  <div className="flex justify-center mt-10">
  <Link href="/new" className="p-4 bg-gray-400 rounded hover:bg-gray-500">Crear nueva tarea</Link>
  </div>
  </section>
  )
}


export default HomePage