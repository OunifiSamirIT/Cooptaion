import React from 'react'



export default function row({title, description, modedemploi, companyDescription, responsabilities, expYears}) {

return (
  <tr className='outerRow'>
            <td>{title}</td>
            <td>{description}</td>
            <td>{modedemploi}</td>
            <td>{companyDescription}</td>
            <td>{responsabilities}</td>
            <td>{expYears}</td>
    </tr>
  )
}
