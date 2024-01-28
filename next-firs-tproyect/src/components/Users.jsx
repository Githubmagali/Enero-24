//"use client"; se usa solo para cuando necesito un manejador de eventos ej onClick
import Link from "next/link";


function Users({users}){
    return(
        <ul className="">
   {users.map(user=>(
    <Link href={`/users/${user.id}`} key={user.id}>
    <li 
    className="bg-slate-200 mb-2 p-4 rounded-md flex justify-between"
    >
      <div>
        <h5 className="hover:text-gray-100 font-bold">{user.first_name} {user.last_name}</h5>
        <p className="text-slate-500 hover:text-gray-100">email:  {user.email}</p>
      </div>
      <img src={user.avatar} className="rounded-full w-20"/>
    </li>
    </Link>
   ))}
   </ul>
    )
}

export default Users;