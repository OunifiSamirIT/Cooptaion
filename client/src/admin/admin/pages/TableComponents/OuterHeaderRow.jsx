import React from 'react'



export default function row({title, description, modedemploi, companyDescription, responsabilities, expYears}) {


return (
    <thead className='OuterHeaderRow'>
      <tr>
        <th>title</th>
        <th>description</th>
        <th>modede</th>
        <th>Description</th>
        <th>responsabilities</th>
        <th>exp</th>
      </tr>
    </thead>
  )
}
