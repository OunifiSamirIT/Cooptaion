import React, { useState,useEffect } from 'react'
import OuterHeaderRow from './TableComponents/OuterHeaderRow'
import Row from './TableComponents/Row'
import './2table.css'
import axios from 'axios'

export default function Table() {


  const [node, setNode] = useState([]);
  //   {
  //     userEmail: "aa@gmail.com",
  //     parentEmail :"null",
  //     children:[
  //       {
  //         userEmail: "chilren1@gmail.com",
  //         parentEmail :"aa@gmail.com",
  //       },
  //       {
  //         userEmail: "chilren2@gmail.com",
  //         parentEmail :"aa@gmail.com",
  //       },
  //       {
  //         userEmail: "chilren3@gmail.com",
  //         parentEmail :"aa@gmail.com",
  //       }
  //     ],
      
  //   },
  //   {
  //   userEmail: "bb@gmail.com",
  //   parentEmail :"null",
  //   children:[
  //     {
  //       userEmail: "chilren1111@gmail.com",
  //       parentEmail :"bb@gmail.com",
  //     },
  //     {
  //       userEmail: "chilren2222@gmail.com",
  //       parentEmail :"bb@gmail.com",
  //     }
  //   ],}
  // ]);

  useEffect(() => {
    load();
  },[]);

  const load = async () => {
    const result = await axios.get("http://localhost:5000/api/node/getAllNodesData");
    setNode(result.data);
    console.log(result)
  };

  return (
    <table className='outerTable'>
        <OuterHeaderRow />
        <tbody>
          {node.map(n => <Row
            
            userEmail={n.userEmail}
            children={n.children}
          />)}
        </tbody>
    </table>
  )
}
