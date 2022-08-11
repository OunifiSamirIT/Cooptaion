import React from 'react';
import { useEffect,useState } from 'react';
import './authStyle.css'
//import svg from '../image/svg.svg'
import animation from '../signup/animationClass';
import axios from 'axios';
import InputGroup from './InputGroup';

import { Link } from 'react-router-dom';


function AuthPage() {
  

   
      
    
 
    const [form, setForm] = useState({});
    // const test = {
    //   "firstName": "Dhia",
    //   "lastName": "Mejri",
    //   "email": "x@gmail.com",
    //   "password": "0000",
    //   "sexe": "Homme",
    //   "isVerified" : true,
    //   "age": 15,
    //   "profession": "Network Engineer",
    //   "admin" : true
    // }
    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        
      };
      const onSubmitHandler = async (e)=>{
        e.preventDefault();
        

         await axios.post(
          "http://localhost:5000/api/user/signup",form
        ).then((res)=>{
          console.log(res.data)
        });
        // console.log(data)
        
        // console.log(form)
        // axios.get('/api/offer')
        // .then((res) => {
        //     setForm(res);

        // })
        
      }

    // useEffect( ()=> {
    //     animation.animateCvFile()
    // }, [])
    

     

    return (


        

            <form className="recForm" onSubmit={onSubmitHandler} >

                <h5>S'il vous plait register vous pour acceder au espace utilisateur </h5>

                <InputGroup type="text"  placeholder="nom " name="lastName" onChangeHandler={onChangeHandler} />
                <InputGroup type="text" placeholder="prenom" name="firstName" onChangeHandler={onChangeHandler}/>
                <InputGroup type="text" placeholder="email" name="email" onChangeHandler={onChangeHandler}/>
                <InputGroup type="text" placeholder="salarie" name="password" onChangeHandler={onChangeHandler}/>
                
                <input   type="submit" id="submitBtn" value="registrer" />


               
            </form>
            
            


       
    )
}


export default AuthPage;