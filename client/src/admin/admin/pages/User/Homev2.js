import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Style.css'
import Navslid from '../../components/Navbar'

const Home2 = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/user/");
    setUser(result.data.reverse());
  };

  // const deleteUser = async id => {
  //   await axios.delete(`http://localhost:3003/users/${id}`);
  //   loadUsers();
  // };

  return (
    <div>      <div className="navv"><Navslid /></div>

    <div className="container">

      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.lastname}</td>
                <td>{user.firstname}</td>
                <td>{user.age}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user._id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user._id}`}
                  >
                    Edit
                  </Link>
                  {/* <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></div>
  );
};

export default Home2;
