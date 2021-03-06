import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[])

    //Delete User

   const handledeleteUser=id=>{
    const proced=window.confirm('Are You Want To delete');
    if(proced){
        const url=`http://localhost:5000/users/${id}`;
        fetch(url,{
         method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Delete Sucessfully')
                const newuser=users.filter(user=>user._id !==id);
                setUsers(newuser);
            }
            else{
                alert('Unbale To Delete')
            }
        })
    }


   }

    return (
        <div>
            <h2>Available Users:{users.length}</h2>
             <ul>
                 {
                     users.map(user=><li key={user._id}> {user.name} :: {user.email} 
                     <Link to={`users/update/${user._id}`}>
                     <button>Update</button> 
                     </Link>
                     <button onClick={()=>handledeleteUser(user._id)}>X</button></li>)
                 }
             </ul>
             
            
        </div>
    );
};

export default Users;