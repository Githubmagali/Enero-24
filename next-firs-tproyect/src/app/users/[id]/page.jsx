async function getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

 async function UserPage({params}){
   const user = await getUser(params.id);

    return <div className="flex items-center justify-center h-screen">
     <div className="bg-gray-200 text-center p-20 px-40 py-20 relative rounded-lg">
        <img src={user.avatar} alt="" className="absolute top-0 left-0 rounded-lg"/>
        <div className="mt-[-70px]">
        <h3 >{user.first_name} {user.last_name}</h3>
      <p>Email:  {user.email}</p>
        </div>
      
    </div>
    </div>
    
}

export default UserPage;