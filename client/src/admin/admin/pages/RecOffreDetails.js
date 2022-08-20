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

function offredetails() {
    //popup


    // const [users, setUsers] = useState([]);
    // const [form, setForm] = useState({});
    // const [errors, setErrors] = useState({});
    // const [message, setMessage] = useState("");
    // const [show, setShow] = useState(false);


    // const [query, setQuery] = useState("")
    // const [posts, setPost] = useState([]);

    // ///////////popup
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    //     OnDelete();
    // };

    // const handleClose = () => {
    //     setOpen(false);

    // };

    // ////////////

    // const onChangeHandler = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value,
    //     });

    // };

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/api/user/add', form)
    //         .then(res => {
    //             setMessage(res.data.message)
    //             /* hide form after save */
    //             setForm({})
    //             /* hide errors after save */
    //             setErrors({})
    //             setShow(true)
    //             setTimeout(() => {
    //                 setShow(false)
    //             }, 4000);
    //         })
    //         .catch(err => setErrors(err.response.data))

    // }

    // /* delete */
    // const OnDelete = (id) => {


    //     axios.delete(`http://localhost:5000/api/user/deleteOne/${id}`)
    //         .then(res => {
    //             setMessage(res.data.message)
    //             setShow(true)
    //             setTimeout(() => {
    //                 setShow(false)
    //             }, 4000);
    //         })

    // }


    /* find all users */
    //   useEffect(() => {
    //     loadUsers();
    //   });

    //   const loadUsers = async () => {
    //     const result = await axios.get("http://localhost:5000/api/user/");
    //     setPost(result.data.reverse());
    //   };
















    return (
        <div>
       <div className="navv"><Navslid /></div>
        <div class="registration-form">
      
        <form>
             <h3>Recommander par: Ala@gmail.com</h3>
        <div class="form-icon">
            <span><i class="icon icon-user">  </i></span>
        </div>
        <div class="form-group">
            <input type="text" class="form-control item" id="username" placeholder="Username" value="AHMED EZZAR"/>
        </div>
        <div class="form-group">
            <input type="text" class="form-control item" id="password" placeholder="Password" value="Developper Java"/>
        </div>
        <div class="form-group">
            <input type="text" class="form-control item" id="email" placeholder="Email" value="AHMED@gmail.com"/>
        </div>
        
        <div class="form-group">
            <button type="button" class="btn btn-block create-account" value="AHMED EZZAR">envoi invitaion</button>
        </div>
    </form>
    
</div>

</div>













                    );
}
export default offredetails;






























