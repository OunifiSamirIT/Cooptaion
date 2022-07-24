// import React from 'react' ;
import './RecStyle.css'
import Logo from "./ll.jpg"

function RecPage() {
    return (
        
        <div className="recPage">
            <div className="recNavBar">
<div className="imgContainer">
<img src={Logo} alt="" />

</div>
                <nav>
                    <ul>
                        <li>
                    <a href="http://">Acceuil</a>

                        </li>
                        <li>
                    <a href="http://">Offre</a>
                            
                        </li>
                        <li>
                        <a href="http://">Room</a>

                        </li>
                    </ul>
                    
                </nav>

                    <button className="logOutBtn">Log out</button>
            </div>
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
                    <img src="/images/85-modele-cv-exemplaire.jpg" alt="" />
                    <div id="shadowBox"></div>
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