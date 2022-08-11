import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`"http://localhost:5000/api/user/`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.email}</li>
        <li className="list-group-item">user name: {user.lastname}</li>
        <li className="list-group-item">email: {user.firstname}</li>
        <li className="list-group-item">phone: {user.age}</li>
        <li className="list-group-item">website: {user.age}</li>
      </ul>
    </div>
  );
};

export default User;
