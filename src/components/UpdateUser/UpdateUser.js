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
    return (
        <div>
            <h2>Update Users</h2>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export default UpdateUser;