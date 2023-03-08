import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";;

const EditUser = () => {
    let navigate=useNavigate();
    let {id}=useParams();
  const data = { name: "", email: "" };

  const [users, setUsers] = useState(data);

  function handlechange(e) {
    setUsers({...users,[e.target.name]:[e.target.value]});
  }

  const handleSubmit =async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/user/${id}`,users)
        navigate("/")
  };
  const LoderUser = async()=>{
  const result = await axios.get(`http://localhost:3000/user/${id}`)
  console.log(result,"result")
  setUsers(result?.data)
  }
  useEffect(()=>{
    LoderUser();
  },[])
  return (
    <div>
      <h1>Add Users</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={handlechange}
            value={users.name}
            name="name"
          /><br/>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={users.email}
            name="email"
            onChange={handlechange}
          />
        </div>
        <button type="submit" class="btn btn-warning">
          update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
