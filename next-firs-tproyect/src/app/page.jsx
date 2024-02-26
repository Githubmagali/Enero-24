import Users from "@/components/Users"
async function fetchUsers(){

  const respuesta = await fetch("https://reqres.in/api/users")
 const data = await respuesta.json()
 return data.data
}


async function HomePage(){

  const users =  await fetchUsers()
  return(
    <Users users={users}/>
  )
}

export default HomePage