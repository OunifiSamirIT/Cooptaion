import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetailsOffre from "../components/RowDetailsOffre";
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import Alert from "../components/Alert";
import './Style.css'
import Navslid from '../components/Navbar'

import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

///

import { makeStyles } from '@material-ui/core/styles';

///////////////
import { tableCellClasses } from '@mui/material/TableCell';
import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,Typography
} from "@mui/material";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
////////////////////////
const useStyles = makeStyles((theme) => ({
 
  status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  }
}));
function ListesOffres() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [recc, setREC] = useState([]);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);



  //search
  const [query, setQuery] = useState("")
  const [posts, setPost] = useState([]);
 

  


  /* find all users */
  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/offer/");
    setUsers(result.data.reverse());
  };


  const loadRecommondationEmail = async (userId) => {
    const result = await axios.get(`http://localhost:5000/api/rec/rec/${userId}`);
    await result.data
    console.log(result.data)
  };


setTimeout(() =>  {
  loadRecommondationEmail('62f839e67bc6083d0ab3544b')


}, 0)


const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);

const handleChangePage = (_, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};






  return (

    <div className="ALLcontainer" >
      <div className="navv"><Navslid /></div>

     

      <div className="container">









        {/* <div className="mt-4">
          <h2>Gestion Offers</h2>

          

          <div className="container2">
       
         
          <input class="serach" placeholder="chercher par Titre "   onChange={event => setQuery(event.target.value)} /> 
         <span>   </span> <input placeholder="chercher par Post "   onChange={event => setQuery(event.target.value)} /><span>   </span> <FaSearch/>



        </div>

        </div>
        <div className="divtable">
          <table class="table border shadow">
            <thead class="table-dark">
              <tr>

                <th scope="col">Title</th>
                <th scope="col">description</th>
                <th scope="col">ModeEmploi</th>
                <th scope="col">Company</th>
                <th scope="col">responsabilities</th>
                <th scope="col">Skills</th>
                <th scope="col">Experiences</th>
                <th scope="col">recommandation</th>

                <th >Actions       </th>

              </tr>
            </thead>
            <tbody>
              
              {users.map(({ title, description, modedemploi, companyDescription, responsabilities,requiredSkills,expYears,recommandations }) => (
              <RowDetailsOffre
              Title={title}
              Description={description}
              ModeEmploi={modedemploi}
              Company={companyDescription}
              Responsabilities={responsabilities}
              Skills={requiredSkills}
              Experiences={expYears}
              REc={recommandations}
            
                
                
              />
            ))}

              

               




            </tbody>
          </table>
        </div> */}









<div >
          <h2>Gestion CV-TECK</h2>

          <input className="espace" placeholder="Entrer Title offre !!" onChange={event => setQuery(event.target.value)} />
          <span>   </span> <input placeholder="mode emploi !!" onChange={event => setQuery(event.target.value)} /><span>   </span>  <FaSearch />

          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead >
                <TableRow>
                  <StyledTableCell  align="left">Title</StyledTableCell>
                  <StyledTableCell  align="left" >description</StyledTableCell>
                  <StyledTableCell align="left">ModeEmploi</StyledTableCell>
                  <StyledTableCell align="left" >Company</StyledTableCell>
                  <StyledTableCell align="left">responsabilities</StyledTableCell>
                  <StyledTableCell align="left">Skills</StyledTableCell>
                  <StyledTableCell align="left">Experiences</StyledTableCell>
                  <StyledTableCell align="center">recommandation</StyledTableCell>
                  <StyledTableCell align="left" width="150">status        </StyledTableCell>

                  <StyledTableCell align="left" width="150">Actions        </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>




                {users &&
                  users.filter(u => {
                    if (query === '') {
                      return u;
                    } else if (u.title.toLowerCase().includes(query.toLowerCase())) {
                      return u;
                    } else if (u.modedemploi.toLowerCase().includes(query.toLowerCase())) {
                      return u;


                    }
                  }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(({ title, description, modedemploi, companyDescription, responsabilities,requiredSkills,expYears,recommandations,status }, index) => (
                      <TableRow key={index}>
                        <TableCell align="left">{title}</TableCell>
                        <TableCell align="left" width="1%">{description}</TableCell>

                        <TableCell align="left" width="1000">{modedemploi}</TableCell>
                        <TableCell align="left">{companyDescription}</TableCell>
                        <TableCell align="left">{responsabilities}</TableCell>
                        <TableCell align="left">{requiredSkills}</TableCell>
                        <TableCell align="left">{expYears}</TableCell>
                        <TableCell align="left">{recommandations}</TableCell>
                        <TableCell align="left"> <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((status === 'cloturee' && 'red') ||
                        (status === 'draft' && 'yellow') ||
                        (status === 'publiee' && 'green')||
                        (status === 'repondu' && 'blue'))
                    }}
                  >{status}</Typography></TableCell>
                      
                        {/* lhna kif nenzel 3al button fi tableu yheznii lel page fiha nom w l prnom ta3 l personne eli mrecomondih l user  */}
                        <Link to={`/CVPDF`} className="text-white"><IconButton aria-label="fingerprint" color="primary" >
                          <PersonSearchIcon />
                        </IconButton></Link>

                        
                       





                      </TableRow>
                    ))

                }


              </TableBody>
            </StyledTable>

            <TablePagination
              sx={{ px: 2 }}
              page={page}
              component="div"
              rowsPerPage={rowsPerPage}
              count={users.length}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ "aria-label": "Next Page" }}
              backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
          </Box></div>















      </div>
    </div>
  );
}

export default ListesOffres;
