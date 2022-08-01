import './createOffreStyle.css';
import {useState} from 'react'

function App() {

  const [formName, setFormName] = useState('')
  const [formPost, setFormPost] = useState('')
  const [formDesc, setFormDesc] = useState('')
  const [formFilePath, setFormFilePath] = useState('')
  const [formMail, setFormMail] = useState('')


  const [formData, setFormData] = useState({})

  const showResult = () => {
    document.querySelector('.formResultContainer').classList.add('showFormResultContainer')
    document.querySelector('.imageContainerOffreResult').classList.add('showImageContainerOffreResult')
    document.querySelector('.resultOpacityContainer').classList.add('showResultOpacityContainer')
  }

  return (
    <div className="createOffreComponent">
      <div className="offreContainer">
        <div className="formOffreContainer">

          <input type="text" placeholder=' name' onChange={(e)=>{
              setFormName(e.target.value)
          }} />
          <input type="text" placeholder=' post' onChange={(e)=>{
              setFormPost(e.target.value)
          }} />
          <input type="text" placeholder=' description' onChange={(e)=>{
              setFormDesc(e.target.value)
          }} />
          <input type="text" placeholder=' mail' onChange={(e)=>{
              setFormMail(e.target.value)
          }}  />
          <input type="file" placeholder=' image' onChange={(e)=>{
              setFormFilePath(e.target.value)
          }} />
          <button onClick={showResult}>ajouter offre</button>
        </div>
      </div>
      <div className="resultContainer">
        <div className="formResultContainer">
          <div className="resultOpacityContainer">
          <div className="imageContainerOffreResult">
            <img src='https://ourbabble.com/PF.Base/file/pic/photo/25fb268edc1e508a7b8eb2e527f4e355.png' alt="" />
          </div>
          <div className="infoResultContainer">
          <input type="text" value={`name : ${formName}`} readOnly/>
          <input type="text" value={`mail : ${formMail}`} readOnly/>
          <input type="text" value={`post : ${formPost}`} readOnly/>
          <input type="text" value={`descreption : ${formDesc}`} readOnly/>
          </div>
        </div>
          </div>
      </div>
    </div>
  );
}

export default App;
