// import React from 'react' ;
import './RecStyle.css'

function RecPage() {
    return (
        <div className="recPage">
            <div className="recNavBar">
                <h4>acceuil</h4>
                <h4>acceuil</h4>
                <h4>acceuil</h4>
            </div>
            <div className="recForm">
                <h5>Recommendé par SAMIR OUNIFI</h5>

                <input type="text" placeholder="nom et prenom" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="telephone" />
                <input type="text" placeholder="url linkedIn" />
                <input type="submit" id="submitBtn" value="visualiser cv" />
            </div>
            <div className="recCv">
                <div className="imageContainer"></div>
                <div className="buttonContainer">
                    <input className="btnDec" type="submit" value="refuse" />
                    <input className="btnDec" type="submit" value="envoye" />
                </div>


            </div>
        </div>
    )
}


export default RecPage;