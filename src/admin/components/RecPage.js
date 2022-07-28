import React from 'react';
import { useEffect, useState } from 'react';
import './RecStyle.css'
import svg from '../image/svg.svg'

function RecPage() {
    let [toggleInOutAnimation, setToggleInOutAnimation] = useState(true)
    let animateCvFile = () => {

        let myCvFile = document.getElementById('fileCv');
        let glassBg = document.getElementById('shadowBox');
        let myHideBtn = document.getElementById('xBtn')

        myCvFile.addEventListener('mousedown', function () {
            console.log('clicked')
            this.style.transform = "translateX(-400px) scale(0.8)"
            setInterval(() => {
                this.style.transform = "translateX(-400px) scale(1.4)"
                setInterval(() => {
                    glassBg.style.opacity = "1"
                    glassBg.style.pointerEvents = 'visible'
                    myHideBtn.style.transform = 'translateX(-100px) scale(5) rotate(-138deg)'
                }, 1000);
            }, 500);

            

        })

    }

    const showCandidatForm = () => {
        let myAcceptBtn = document.getElementById('acceptBtn');
        let myCondidatForm = document.getElementById('candidatureContainer');
        myAcceptBtn.addEventListener('click', () => {
            myCondidatForm.classList.add('showCandidatureContainer')

        })
    }
    
    const hideAll = () => {
        let myCondidatForm = document.getElementById('candidatureContainer');
        let myCvFile = document.getElementById('fileCv');
        let glassBg = document.getElementById('shadowBox');
        let myHideBtn = document.getElementById('xBtn')
        // myHideBtn.style.transform = 'translateX(100px) scale(0.1) rotate(0)'
        // console.log("clickeeeeeed")
        // myCvFile.classList.add('hideClass')
        // glassBg.classList.add('hideClass')
        // myHideBtn.classList.add('hideClass')
    }

    useEffect(() => {

        animateCvFile()
        let myAcceptBtn = document.getElementById('acceptBtn');
        let myCondidatForm = document.querySelector('.candidatureContainer');
        myAcceptBtn.addEventListener('click', () => {
            myCondidatForm.classList.add('showCandidatureContainer')
            console.log(myCondidatForm.class)

        })
    }, [])

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
                    <div id="shadowBox"></div>
                    <img id="fileCv" src="/images/85-modele-cv-exemplaire.jpg" alt="" />
                    <button id="xBtn" onClick={hideAll} >+</button>


                </div>


                <div className="candidatureContainer ">

<div className="recForm recForm2 ">

    <h2>Espace candidature</h2>

    <input type="text" placeholder="post candidature" />
    <input type="text" placeholder="session" />
    <input type="text" placeholder="contrat" />
    <input type="text" placeholder="Code inscription" />
    <textarea id="" cols="30" rows="10" placeholder='Description'></textarea>
    <input type="submit" id="submitBtn" value="enregitrer" />
        <a id='btnLink' href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCKBzzrSZLvBXJrvbGrSCnGZWDHlrwzNMLGMmxvTbRBGVfzwJBzbqWwPvlgGVVnbfSLcZftg" target={'_blank'}>envoyer mail</a>

    <footer>
        {/* <p>copyright &copy;</p> */}
    </footer>
</div>
</div>
                <div className="buttonContainer">
                    <button className="btnDec" > refuse</button>
                    <button className="btnDec" id='acceptBtn' onClick={showCandidatForm} > accepte </button>
                </div>


            </div>


        </div>
    )
}


export default RecPage;