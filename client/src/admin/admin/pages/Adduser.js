import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";
import Navslid from '../components/Navbar'
import './Style.css'


function HomeAdd() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/user/add', form)
      .then(res => {
        setMessage(res.data.message)
        /* hide form after save */
        setForm({})
        /* hide errors after save */
        setErrors({})
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000);
      })
      .catch(err => setErrors(err.response.data))

  }

  /* delete */
  const OnDelete = (id__) => {
    if (window.confirm("are you sure to delete this user")) {

      axios.delete('http://localhost:5000/api/user/${id__}')
        .then(res => {
          setMessage(res.data.message)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 4000);
        })
    }
  }



















  return (
    <div>
      <div className="navv"><Navslid /></div>

      <div className="containeradduser">
        <h2 >Gestion Administrateur</h2>

        <Alert message={message} show={show} />
        <div className="mt-4">
        </div>
        <div >
          <form onSubmit={onSubmitHandler} className="container">
            <InputGroup
              label="Email"
              type="text"
              name="email"
              onChangeHandler={onChangeHandler}
              errors={errors.email}
            />
            <InputGroup
              label="Age"
              type="text"
              name="password"
              onChangeHandler={onChangeHandler}
              errors={errors.password}
            />
            <InputGroup
              label="Firstname"
              type="text"
              name="firstname"
              onChangeHandler={onChangeHandler}
              errors={errors.firstname}
            />
            <InputGroup
              label="lastname"
              type="text"
              name="lastname"
              onChangeHandler={onChangeHandler}
              errors={errors.Lastname}
            />
            <button className="btn btn-primary" type="submit">Add user</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default HomeAdd;
