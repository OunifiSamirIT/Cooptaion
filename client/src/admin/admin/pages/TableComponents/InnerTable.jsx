import React from 'react'

export default function innerTable({children}) {
  return (
    <details style={{width: "300px"}}>
    <summary>FILS</summary>
  
    <table className='descriptionTable' >
        <thead className='headerRow'>
          <tr>
            <th>userEmail</th>
            <th>parentEmail</th>
  
          </tr>
        </thead>
        <tbody>
          {
            children.map( child => (
              <tr> 
            <td>{child.userEmail}</td>
            <td>{child.parentEmail}</td  >
              </tr>
            ))
          }
        </tbody>
      </table></details>
  )
}
