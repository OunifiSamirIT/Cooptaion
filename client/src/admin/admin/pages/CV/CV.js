import '../Style.css'

import React, { useEffect, useState } from "react";

import countrydata from './Countrydata.json';
import Navslid from '../../components/Navbar'
import axios from "axios";
import Alert from "../../components/Alert";

function CV() {










    const [secteurid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
/////
    const [TitreProfile, setTitle] = useState('')
    const [PosteActuel, setposte] = useState('')
    const [Formation, setFormation] = useState('')
    const [Experience, setexperience] = useState('')
    const [Secteur, setsecteur] = useState('')
    const [Specialiter, setspecialiter] = useState('')
   
   //select option
    // const handleChange = (event) => {
    //     setSalarie(event.target.value);
    //     console.log(event.target.value)
    //     setForm({
    //       ...form,
    //       salarie: event.target.value,
    //   })
    // };
    
//////
    const handleSecter = (e) => {
        const getsecteurId = e.target.value;
        const getStatedata = countrydata.find(secteur => secteur.secteur_id === getsecteurId).states;
        setState(getStatedata);
        setCountryid(getsecteurId);
      
        // console.log(getStatedata)
       
        // console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Get Country id" + secteurid + " And " + stateid);
    }

    /////////////

    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

  

    const onSubmitHandler = (e) => {
        //to do not refresh the page (it's like a SPA)
        e.preventDefault();
        ///////////////////////////////////////
        axios.post('http://localhost:5000/api/cvtech/cvtech',

         {
            'TitreProfile': TitreProfile,
            'PosteActuel': PosteActuel,
            'Formation': Formation,
            'Experience': Experience,
            'Secteur': Secteur,
            'Specialiter': Specialiter,
          }

        ) .then(console.log('hhhhhhhhhhhhhhhhhhhhhh'))
    }














    return (
        <>      <div className="navv"><Navslid /></div>

            <div className='container'>
                <form onSubmit={
                    onSubmitHandler
                    // console.log({
                    //     TitreProfile,
                    //     PosteActuel,
                    //     Formation,
                    //     Experience,
                    //     Secteur,
                    //     Specialiter
                    // })
                }>


                    <div className="CV">
                        <div className="div1">
                            <label className='label0'>Titre de Profile</label>
                            <input type="text"
                                placeholder="Titre de Profile"
                                onChange={(e) => setTitle(e.target.value)} />



                        </div>

                        <div >
                            <label className='label3'>Poste Actuel</label>

                            <input type="text" 
                            placeholder="Password" 

                            onChange={(e) => setposte(e.target.value)}
                            
                            />

                        </div>
                    </div>





                    <div className="CV">

                        <div className='div1' >
                            <label className='label1'>Formation</label>
                            <input type="text"
                             placeholder="Formation"

                             onChange={(e) => setFormation(e.target.value)} />
                        </div>
                        <div >
                            <label className='label2'>Experiences</label>
                            <input type="text" 
                            placeholder="Experiences"

                            onChange={(e) => setexperience(e.target.value)} />
                        </div>
                    </div>



                    <div className="CV">
                        <div className="div1">
                            <label >Secteur</label>
                            <select className='selected1' onChange={(e) => {
                                setsecteur(document.querySelector('.selected1').options[e.target.value].text)
                                handleSecter(e)
                            }}>
                                <option value={secteurid} >--Select Secteur--</option>
                                {
                                    countrydata.map((getsecteur, index) => (
                                        <option value={getsecteur.secteur_id}
                                         key={index}>{getsecteur.secteur_name}</option>
                                    ))

                                }


                            </select>                    </div>
                        <div className="div1">
                            <label >Specialiter</label>
                            <select className='selected2' onChange={(e) => {
                                const myValue = document.querySelector('.selected2').options[document.querySelector('.selected2').selectedIndex].text ;
                                    console.log(myValue) ;
                                    setspecialiter(myValue)

                                }}>
                                <option value={stateid} >--Select Specialiter--</option>
                                {
                                    state.map((getstate, index) => (
                                        <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                    ))
                                }





                            </select>
                        </div>


                    </div>





                    <div className="form-group">
                        <div className="form-check">


                        </div>


                    </div>
                    <div>
                        <div ><label></label></div>
                        <input type="file" className='input1'
                        /></div>
                    <button type="submit" className="but">Save</button>
                </form></div>
        </>

    )
}
export default CV;
