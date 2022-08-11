import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetailsOffre from "../components/RowDetailsOffre";
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import Alert from "../components/Alert";
import './Style.css'
import Navslid from '../components/Navbar'
import { FaSearch } from "react-icons/fa";

function ListesOffres() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  //search
  const [query, setQuery] = useState("")
  const [posts, setPost] = useState([]);
 

  


  /* find all users */
  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/offer/");
    setUsers(result.data.reverse());
  };
















  return (

    <div>
      <div className="navv"><Navslid /></div>

     

      <div className="container">









        <div className="mt-4">
          <h2>Gestion Offers</h2>

          

          <div className="container2">
       
         
          <input class="serach" placeholder="chercher par Titre "   onChange={event => setQuery(event.target.value)} /> 
         <span>   </span> <input placeholder="chercher par Post "   onChange={event => setQuery(event.target.value)} /><span>   </span> <FaSearch/>



        </div>

        </div>
        <div className="divtable">
          <table class="table border shadow">
            <thead class="table-dark">
              <tr>

                <th scope="col">Title</th>
                <th scope="col">description</th>
                <th scope="col">ModeEmploi</th>
                <th scope="col">Company</th>
                <th scope="col">responsabilities</th>
                <th scope="col">Skills</th>
                <th scope="col">Experiences</th>
                <th scope="col">recommandation</th>
                <th >Actions       </th>

              </tr>
            </thead>
            <tbody>
              {users.map(({ title, description, modedemploi, companyDescription, responsabilities,requiredSkills,expYears,recommandations }) => (
              <RowDetailsOffre
              Title={title}
              Description={description}
              ModeEmploi={modedemploi}
              Company={companyDescription}
              Responsabilities={responsabilities}
              Skills={requiredSkills}
              Experiences={expYears}
              REc={recommandations}
            
                
                
              />
            ))}

              

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

export default ListesOffres;
