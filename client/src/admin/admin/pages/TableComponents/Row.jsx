import React, { useState,useEffect } from 'react'
import OuterRow from './OuterRow'
import InnerTable from './InnerTable'
import axios from 'axios'
export default function Row({title, description, modedemploi, companyDescription, responsabilities, expYears, recommandations}) {




     const [RecData, setRecData]  = useState({});

     useEffect(() => {
      loadRecommondationEmail()
    },[]);



    const loadRecommondationEmail = async () => {
      const result = await axios.get(`http://localhost:5000/api/rec/rec/${recommandations[0]}`);
      // await result.data
      setRecData({
        userEmail:result.data.userEmail,
        
        invitedEmail:result.data.invitedEmail
      })
      console.log(result.data)
    };



  return (
  <>
    <OuterRow 
            title={title}
            description={description}
            modedemploi={modedemploi}
            companyDescription={companyDescription}
            responsabilities={responsabilities}
            expYears= {expYears}
    />
   <InnerTable recommandations={RecData}/>
  </>
  )
}
