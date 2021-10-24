import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const[user,setUser]=useState({});
    const{id}=useParams();

    useEffect(()=>{
        const url=`http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    const handleUserName=e=>{
       const updateName=e.target.value;
       const updatedUser={name:updateName , email:user.email};
       setUser(updatedUser); 
    }
    const handleUserEmail=e=>{
      const updateEmail=e.target.value;
      //const updateUser={...user};
      //updateuser.email=updateEmail;
      const updatedUser={name:user.name , email:updateEmail};
       setUser(updatedUser); 

    }

    const handleUpdateUser=e=>{
        const url=`http://localhost:5000/users/${id}`;
        fetch(url,{
             method:'PUT',
             headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('Update SuccessFully');
                setUser({});
            }
        })
      e.preventDefault();
      
    }

    return (
        <div>
            <h2>Update Users</h2>
             <form onSubmit={handleUpdateUser}>
               <input type="text" onChange={handleUserName} value={user.name || ''} placeholder='Name' />
               <input type="email" onChange={handleUserEmail} value={user.email || ''} placeholder="Email" />
               <input type="submit" value="Update" />
             </form>
        </div>
    );
};

export default UpdateUser;