import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  console.log("users", users);
//   const [pagination, setPagination] = useState(1);
  //   console.log("pagination",pagination);

  const loadusers = async () => {
 await axios
      .get("http://localhost:3000/user")
      ?.then((res) => {
        if (res?.status === 200) {
            setUsers(res?.data);

        }
      });
  };

  const deleteUser =async(id)=>{
   await axios.delete(`http://localhost:3000/user/${id}`)
   loadusers();
  }

  useEffect(() => {
    loadusers();
  }, []);

  return (
    <div className="py-4">
      <h1>Welcome to home</h1>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sl no.</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 &&
            users?.map((user, index) => (
              <tr>
                {console.log("user", user)}
                <th scope="row">{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>view</Link>
                  <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                  <Link className="btn btn-outline-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item" onClick={() => setPagination(1)}>
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item" onClick={() => setPagination(2)}>
            <a class="page-link" href="#">
              2
            </a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Home;
