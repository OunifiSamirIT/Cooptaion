  import axios from 'axios' ;
  import React, { useEffect, useState }  from 'react' ;



  export default function MyCvList() {
    
const [d, setD] = useState({})

    useEffect( () => {
        
      
        getMyData()
        
    }, [] )
    
    const  getMyData = async () => {
        const data = await axios.get('http://localhost:5000/api/cvtech/cvtech')
        setD(data.data)
        console.log(d)   
    }
    
    
    return (
        <div  className='container'>
            <p>hello</p>
        </div>
    )
  }