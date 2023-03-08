import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";;

const AddUser = () => {
    let navigate=useNavigate();
  const data = { name: "", email: "" };

  const [users, setUsers] = useState(data);

  function handlechange(e) {
    setUsers({...users,[e.target.name]:[e.target.value]});
  }

  const handleSubmit =async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/user",users).then((res)=>{
        if(res?.data.status===200)
        {
            setUsers({ name: "", email: "" })
        }
        

    })
     navigate("/")

  };
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
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
