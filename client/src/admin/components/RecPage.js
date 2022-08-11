import React from 'react';
import { useEffect } from 'react';
import './RecStyle.css'
import svg from '../image/svg.svg'
import animation from '../javascript/animationClass.js';

function RecPage() {

    // useEffect( ()=> {
    //     animation.animateCvFile()
    // }, [])

    return (


        <div className="recPage">
            <img id='bkgSvg' src={svg} alt="" />

            <div className="recForm">

                <h5>Recommendé par SAMIR OUNIFI</h5>

                <input type="text" placeholder="nom et prenom" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="telephone" />
                <input type="text" placeholder="url linkedIn" />
                <input type="submit" id="submitBtn" value="visualiser cv" />

                <footer>
                    {/* <p>copyright &copy;</p> */}
                </footer>
            </div>
            <div className="recCv">
                <div className="imageContainer">
                    <img id="fileCv" src="/images/85-modele-cv-exemplaire.jpg" alt="" />
                    {/* <div id="shadowBox"></div> */}
                </div>
                <div className="buttonContainer">
                    <input className="btnDec" type="submit" value="refuse" />
                    <input className="btnDec" type="submit" value="envoye" />
                </div>


            </div>
            


        </div>
    )
}


export default RecPage;