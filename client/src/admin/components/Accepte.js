import React from 'react';
import './RecStyle.css'


function AccepteProfile() {

    return (
        <div className="recPage">
            {/* <img id='bkgSvg' src={svg} alt="" /> */}

            <div className="recFormAccepte">


                <h5>Candidature foulen ben foulen</h5>

                <input type="text" placeholder="nom et prenom" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="telephone" />
                <input type="text" placeholder="url linkedIn" />
                <input type="submit" id="submitBtn" value="Enregistrer" />

                <footer>
                    {/* <p>copyright &copy;</p> */}
                </footer>
            </div>
          
                <div className="recFormAccepte2">
                    <h5>Candidature foulen ben foulen</h5>

                    <input type="text" placeholder="nom et prenom" />
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="telephone" />
                    <input type="text" placeholder="url linkedIn" />
                    <br></br>
                    <div className="buttonContainer">
                        
                        <input className="btnDec" type="submit" value="envoye Mail" />
                    </div>

                </div>



         

        </div>
    )



}

export default AccepteProfile;