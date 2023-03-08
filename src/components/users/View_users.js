import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate,useParams,Link} from "react-router-dom";;

const View_users = () => {
    let navigate=useNavigate();
    let {id}=useParams();

    const data = { name: "", email: "" };

    const [users, setUsers] = useState(data);

    const LoderUser = async()=>{
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        console.log(res,"result")
        setUsers(res?.data)
        }
        useEffect(()=>{
          LoderUser();
        },[])

  return (
    <div>
      <h1>Users</h1>
      <Link to="/" style={{"margin-right": "86%"}}>Back to Home</Link>
      <ul style={{"background-color":"antiquewhite"}}>
        <li>User Id :{id}</li><br/>
        <li> Name:{users.name}</li><br/>
        <li>User email:{users.email}</li><br/>
        <li>Username :{users.username} </li>
      </ul>
    </div>
  )
}

export default View_users
