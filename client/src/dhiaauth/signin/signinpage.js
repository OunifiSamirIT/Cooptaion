import React from 'react';
import { useEffect,useState } from 'react';
import './signinpage.css'
//import svg from '../image/svg.svg'
import animation from './InputGroup';
import axios from 'axios';
import InputGroup from './InputGroup';


function SigninPage() {
    // const [form, setForm] = useState({});
    // const onChangeHandler = (e) => {
    //     setForm({
    //       ...form,
    //       [e.target.name]: e.target.value,
    //     });
        
    //   };
    //   const onSubmitHandler = (e)=>{
    //     e.preventDefault();
    //     axios.post('/auth', form)
    //     .then((res) => {
    //         setForm(res.data[0]);

    //     })
        
    //   }

    // useEffect( ()=> {
    //     animation.animateCvFile()
    // }, [])
    const [form, setForm] = useState({});
    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        
      };
      const onSubmitHandler = async (e)=>{
        e.preventDefault();
        

         await axios.post(
          "http://localhost:5000/api/user/login",form
        ).then((res)=>{
            console.log(res)
             
          });
      }

    return (


        

            <form className="recForm" onSubmit={onSubmitHandler}  >

                <h5>S'il vous plait connecter-vous pour acceder au espace utilisateur </h5>

                <InputGroup type="text"  placeholder="Email" name="email" onChangeHandler={onChangeHandler} />
                <InputGroup type="text" placeholder="Password" name="password"onChangeHandler={onChangeHandler} />
                
                
                <input   type="submit" id="submitBtn" value="se connecter " />
                 
                
            </form>
            
            


       
    )
}



export default SigninPage;