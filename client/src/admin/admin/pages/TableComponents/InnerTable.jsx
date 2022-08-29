import React from 'react'

export default function innerTable({recommandations}) {
  return (
    <details style={{width: "300px"}}>
    <summary>recomendation</summary>
  
    <table className='descriptionTable' >
        <thead className='headerRow'>
          <tr>
            <th>userEmail</th>
            <th>invitedEmail</th>
  
          </tr>
        </thead>
        <tbody>
         <td>{recommandations.userEmail}</td>
         <td>{recommandations.invitedEmail}</td>
        </tbody>
      </table></details>
  )
}
