import React, { useState,useEffect } from 'react'
import OuterRow from './OuterRow'
import InnerTable from './InnerTable'
import axios from 'axios'
export default function Row({userEmail,  children}) {




     const [RecData, setRecData]  = useState({});

  return (
  <>
    <OuterRow 
           userEmail = {userEmail}
    />
   <InnerTable children={children}/>
  </>
  )
}
