import React from 'react';
import { useEffect, useState } from 'react';
// import './RecStyle.css'
import svg from '../image/svg.svg'
import axios from "axios";
import InputGroup from './InputGroup';
// import { useNavigate, useParams } from 'react-router-dom';


//backend


function RecPage() {

    //Backend
    const [form, setForm] = useState({});

    const [users, setUsers] = useState([]);

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };


    const onSubmitHandler = () => {
        
        axios.post('/Admin', form)
        .then((res) => {
            setForm(res.data[0]);

        })

    }








    let [toggleInOutAnimation, setToggleInOutAnimation] = useState(true)
    let animateCvFile = () => {

        let myCvFile = document.getElementById('fileCv');
        let glassBg = document.getElementById('shadowBox');
        let myHideBtn = document.getElementById('xBtn');

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
        // // await axios.get(`/Admin`).then((res) => {
        // //     setForm(res.data);
        //   })
        const Myback = async () => {

            await axios.get(`/Admin`).then((res) => {
                setForm(res.data[0]);

            })
        }

        Myback()
    }, [])



    //backend



    return (

        <div className="recPage">
            <img id='bkgSvg' src={svg} alt="" />

            <form className="recForm">

                <h5>Recommendé par SAMIR OUNIFI</h5>

                <input type="text" placeholder="nom et prenom"
                    onChangeHandler={onChangeHandler}
                    value={form.Firstname}

                />
                <input type="text" placeholder="email"

                    onChangeHandler={onChangeHandler}
                    value={form.Email} />
                <input type="text" placeholder="telephone"
                    onChangeHandler={onChangeHandler}
                    value={form.Age}
                />
                <input type="text" placeholder="url linkedIn"
                    onChangeHandler={onChangeHandler}
                    value={form.Age} />
                <input type="submit" id="submitBtn" value="visualiser cv" />

                <footer>
                    {/* <p>copyright &copy;</p> */}
                </footer>
            </form>
            <div className="recCv">
                <div className="imageContainer">
                    <div id="shadowBox"></div>
                    <img id="fileCv" src="/images/85-modele-cv-exemplaire.jpg" alt="" />
                    <button id="xBtn" onClick={hideAll} >+</button>


                </div>


                <div className="candidatureContainer ">

                    <form className="recForm recForm2 " onSubmit={onSubmitHandler}
                    >

                        <h2>Espace candidature</h2>


                        <InputGroup
                            type="text"
                            placeholder="post candidature"
                            
                            name="Post"
                            onChangeHandler={onChangeHandler}
                        />
                        <InputGroup
                            type="text"
                            placeholder="session"

                            name="Session"
                            onChangeHandler={onChangeHandler}
                        />
                        <InputGroup
                            type="text"
                            placeholder="contrat"

                            name="Contrat"
                            onChangeHandler={onChangeHandler}
                        />
                        <InputGroup
                            type="text"
                            placeholder="Code inscription"

                            name="Codeinvitation"
                            onChangeHandler={onChangeHandler}
                        />


                        <textarea id="" cols="30" rows="10" placeholder='Description'></textarea>
                        <input type="submit" id="submitBtn" value="enregitrer" />
                        <a id='btnLink' href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCKBzzrSZLvBXJrvbGrSCnGZWDHlrwzNMLGMmxvTbRBGVfzwJBzbqWwPvlgGVVnbfSLcZftg" target={'_blank'}>envoyer mail</a>


                    </form>


                    <footer>
                        {/* <p>copyright &copy;</p> */}
                    </footer>
                </div>
                <div className="buttonContainer">
                    <button className="btnDec" > refuse</button>
                    <button className="btnDec" id='acceptBtn' onClick={showCandidatForm} > accepte </button>
                </div>


            </div>

            <div className="leftNav">
                <div className="leftContainer">
                    <nav>
                        <ul>
                            <li>
                                <details>
                                    <summary>gestion de user</summary>
                                    <ul>
                                        <li>a</li>
                                        <li>b</li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>gestion des offre</summary>
                                    <ul>
                                        <li><a href="http://localhost:3000/CreateOffre" target="_blank" rel="noopener noreferrer">Create Offre  </a></li>
                                        <li>b</li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>recomendation</summary>
                                    <ul>
                                        <li> <a href="http://localhost:3000/list" target="_blank" rel="noopener noreferrer">consulter  </a> </li>
                                        <li>b</li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>gestion de cooptaion</summary>
                                    <ul>
                                        <li>a</li>
                                        <li>b</li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    )
}


export default RecPage;