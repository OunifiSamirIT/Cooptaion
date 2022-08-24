



import '../Style.css'

import React, { useEffect, useState } from "react";

import countrydata from './Countrydata.json';
import Navslid from '../../components/Navbar'
import axios from "axios";
import Alert from "../../components/Alert";
import { useNavigate, useParams } from 'react-router-dom';

function CV() {


    return (
        <>      <div className="navv"><Navslid /></div>

            <div className='container'>


               
                    <div className='cvcv'>
                        <img id="fileCv" src="/images/85-modele-cv-exemplaire.jpg" alt="" />
                        {/* <div id="shadowBox"></div> */}
                    </div>
                   


               


            </div>
        </>

    )
}
export default CV;
