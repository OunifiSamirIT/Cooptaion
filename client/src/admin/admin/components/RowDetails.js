import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
//
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function RowDetails({ Email, Lastname, Firstname, Password, Id, OnDelete }) {



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true)
    OnDelete()
    
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <tr algin="center">

      
      <td className="gap__actions">
      {/* <span className="badge bg-info">
        <Link to={`/users/edit/${Id}`} className="text-white"> </Link>      
        
           <button className="btn btn-success" ><RemoveRedEyeIcon /></button>
 
      </span> */}
        <span className="">




          <Link to={`/users/edit/${Id}`} className="text-white"><button className="btn btn-primary" ><BuildCircleIcon /></button></Link>
        </span>



        

        <button className="btn btn-danger"  onClick={handleClickOpen}  >
          <DeleteOutlineIcon />
        </button>


        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Supprimer Utilisateur !!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           voulez vous vraiment supprimer cette Utilisateur !!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={() => OnDelete(Id)}  autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>

      </td>
    </tr>
    
  )
}

export default RowDetails