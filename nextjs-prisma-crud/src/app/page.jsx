import { prisma } from "./libs/prisma";

async function loadTasks(){
  //obteniendo la base de datos

  //const respuesta = await fetch('http://localhost:3000/api/task');
  //const data = await respuesta.json()
 return await prisma.task.findMany()
  
}


async function HomePage(){
 const tasks = await loadTasks()

  return(
    <section className="container mx-auto">
   <div className="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {tasks.map(task =>(
      <div key={task.id} className="p-3 bg-gray-300 rounded break-normal min-w-0">
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
    ))}
  </div>
  </section>
  )
}


export default HomePage