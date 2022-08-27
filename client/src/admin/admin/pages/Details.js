import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputGroup from '../components/InputGroup'

function Details() {
 
  const [form, setForm] = useState({});
  
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState()
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    console.log({
      'email': email,
      'password': password,
      'firstname': firstName,
      'lastname': lastName,
    })
    e.preventDefault();
    axios.put(`/api/user/useredit/${id}`, {
      'email': email,
      'password': password,
      'firstname': firstName,
      'lastname': lastName,
    })
    .then(res=>{
      navigate('/admin')
    })
    .catch(err=>setErrors(err.response.data))
    
  }
  useEffect(() => {
    loadUsers();
  },);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:5000/api/user/useredit/${id}`);
    setForm(result.data);
  };
  // useEffect(async () => {
  //   await axios.get(`http://localhost:5000/api/user/useredit/${id}`).then((res) => {
  //     setForm(res.data);
  //   });
  // }, []);
  return (
    <div >
        <form onSubmit={onSubmitHandler} className="container">
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            onChangeHandler={(e)=>{
              setEmail(e.target.value)
              console.log(email)
            }}
            errors={errors.email} 
            // value={form.email}
            placeHOLDER={form.email }

          />
          <InputGroup
            label="Lastname"
            type="text"
            name="Lastname"
            onChangeHandler={(e)=>{
              setLastName(e.target.value)
              console.log(lastName)
            }}
            errors={errors.lastname}
            placeHOLDER={form.lastname }

          />
          <InputGroup
            label="Firstname"
            type="text"
            name="Firstname"
            onChangeHandler={(e)=>{
              setFirstName(e.target.value)
              console.log(firstName)
            }}
           
            placeHOLDER={form.firstname }
          />
          <InputGroup
            label="Age"
            type="text"
            name="Password"
            onChangeHandler={(e)=>{
              setPassword(e.target.value)
              console.log(password)
            }}
            errors={errors.password}
            placeHOLDER={form.password }

          />
          <button className="btn btn-primary" type="submit">update</button>
        </form>
      </div>
  )
}

export default Details