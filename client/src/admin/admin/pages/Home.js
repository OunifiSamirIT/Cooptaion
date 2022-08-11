import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import Alert from "../components/Alert";
import './Style.css'
import Navslid from '../components/Navbar'
import { FaSearch } from "react-icons/fa";
import Alertdialoge from "../pages/AlertDialog"

function Home() {
//popup


  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  const [query, setQuery] = useState("")
  const [posts, setPost] = useState([]);

  ///////////popup
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    OnDelete();
  };

  const handleClose = () => {
    setOpen(false);

  };

  ////////////

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
  const OnDelete = (id) => {
   

      axios.delete(`http://localhost:5000/api/user/deleteOne/${id}`)
        .then(res => {
          setMessage(res.data.message)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 4000);
        })
    
  }


  /* find all users */
  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/user/");
    setPost(result.data.reverse());
  };
















  return (

    <div>
      <div className="navv"><Navslid /></div>


      
      <div className="container">








        <div className="container2">
          <h2>Gestion Users</h2>
         
          <input className="espace" placeholder="chercher par email !!"   onChange={event => setQuery(event.target.value)} /> 
         <span>   </span> <input placeholder="chercher par nom !!"   onChange={event => setQuery(event.target.value)} /><span>   </span>  <FaSearch/>



        </div>
        <div className="divtable">
          <table class="table border shadow">
            <thead class="table-dark">
              <tr>

                <th scope="col">Email</th>
                <th scope="col">Lastname</th>
                <th scope="col">Firstname</th>
                <th scope="col">Age</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>

              {posts &&
                posts.filter(post => {
                  if (query === '') {
                    return post;
                  } else if (post.email.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                  }else if (post.lastname.toLowerCase().includes(query.toLowerCase())){
                    return post;


                  }
                }).map(({ email, lastname, firstname, password, _id }) => (
                  <RowDetails
                    Email={email}
                    Lastname={lastname}
                    Firstname={firstname}
                    Password={password}
                    Id={_id}
                    OnDelete={OnDelete}
                    
                  />

                ))
                
              }


              {/* {
                  users.map((element, id) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{id + 1}</th>
                          <td>{element.email}</td>
                          <td>{element.firstname}</td>
                          <td>{element.lastname}</td>
                          <td>{element.password}</td>
                          <td className="d-flex justify-content-between">
                            <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                            <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                            <button className="btn btn-danger" onClick={() => OnDelete(element._id)}><DeleteOutlineIcon /></button>
                          </td>
                        </tr>
                      </>
                    )
                  })
                }
              
 */}




            </tbody>
          </table>
         
        </div>
      </div>
    </div>
    
    
  );
}

export default Home;
