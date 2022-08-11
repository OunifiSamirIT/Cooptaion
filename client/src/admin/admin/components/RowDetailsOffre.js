import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Style.css';
function RowDetailsOffre({ Title, Description, ModeEmploi, Company, Responsabilities,Skills,Experiences,REc, Id, OnDelete }) {

  return (
    <tr>

      <th>{Title}</th>
      <td>{Description}</td>
      <td>{ModeEmploi}</td>
      <td>{Company}</td>
      <td>{Responsabilities}</td>
      <td>{Skills}</td>
      <td>{Experiences}</td>
      <td>{REc}</td>
      <td className="action">
      <span className="btn btn-success"><RemoveRedEyeIcon />
        <Link to={`/`} className="text-white">
          <i className="fas fa-edit"></i>
        </Link>
      </span>
        <span className="">




          <Link to={`/adminadd`} className="text-white">
            <button className="btn btn-primary" ><CreateIcon /></button>        </Link>
        </span>
        <button className="btn btn-danger" onClick={() => OnDelete(Id)}>
          <DeleteOutlineIcon />
        </button>
      </td>
    </tr>
  )
}

export default RowDetailsOffre