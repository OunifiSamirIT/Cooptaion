import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import Alert from "../components/Alert";
import './Style.css'
import Navslid from '../components/Navbar'
import { FaSearch } from "react-icons/fa";
import Alertdialoge from "../pages/AlertDialog"
///////////////
import { tableCellClasses } from '@mui/material/TableCell';
import {

  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
//////
import { Group, MapsHomeWork } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';



/////
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


function Home() {
  //popup


  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  const [query, setQuery] = useState("")
  const [posts, setPost] = useState([]);
  const [offres, setOffres] = useState([]);

  ///////////popup
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    OnDelete();
  };

  const handleClose = () => {
    setOpen(false);

  };

  ////////////

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/user/add', form)
      .then(res => {
        setMessage(res.data.message)
        /* hide form after save */
        setForm({})
        /* hide errors after save */
        setErrors({})
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000);
      })
      .catch(err => setErrors(err.response.data))

  }

  /* delete */
  const OnDelete = (id) => {


    axios.delete(`http://localhost:5000/api/user/deleteOne/${id}`)
      .then(res => {
        setMessage(res.data.message)
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000);
      })

  }


  /* find all users */
  useEffect(() => {
    loadUsers();
    loadoffre();

  });

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/user/");
    setPost(result.data.reverse());
  };


  const loadoffre = async () => {
    const result = await axios.get("http://localhost:5000/api/offer/");
    setOffres(result.data.reverse());
  };




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

    
    <>
      <div className="navv"><Navslid /></div>
      <div className='dash'>
        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            gridTemplateColumns: 'repeat(4,1fr)',
            gridAutoRows: 'minmax(100px, auto)',
            gap: 4,
            textAlign: 'center',
            flexDirection: 'column',
          }}
        >
          <Paper elevation={3}
            sx={{
              p: 3,

              marginTop: 4,
              height: 100,
              background: 'linear-gradient(to right bottom, #80ecda, #59b5b5)',

              width: 260
            }}>
            <Typography variant="h6" >Total Users</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                justifyContent: 'center',
              }}
            >
              <Group sx={{ height: 30, width: 70, opacity: 0.3, mr: 1 }} />
              <Typography variant="h4">{posts.length}</Typography>
            </Box>
          </Paper>










          <Paper elevation={3} sx={{
            p: 3, height: 100,
            background: 'linear-gradient(to right bottom, #80ecda, #59b5b5)',

            width: 260,

            marginTop: 4
          }}>
            <Typography variant="h6">Total Offre</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MapsHomeWork sx={{ height: 30, width: 70, opacity: 0.3, mr: 1 }} />
              <Typography variant="h4">{offres.length}</Typography>
            </Box>
          </Paper>


          <Paper elevation={3} sx={{
            p: 3, height: 100,
            background: 'linear-gradient(to right bottom, #80ecda, #59b5b5)',

            width: 260,

            marginTop: 4
          }}>
            <Typography variant="h6">Total Offre</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MapsHomeWork sx={{ height: 30, width: 70, opacity: 0.3, mr: 1 }} />
              <Typography variant="h4">{offres.length}</Typography>
            </Box>
          </Paper>





          <Paper elevation={4}
            sx={{
              p: 3,
              gridColumn: 4,
              marginRight: '270px',
              gridRow: '1/4',
              width: '380px'
            }}>
            <Box>
              <Typography>Recently added Users</Typography>
              <List>
                {posts.slice(0, 4).map((p, i) => (
                  <Box key={p._id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt={p?.firstname} src={p?.password} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={p?.password}
                      />
                    </ListItem>
                    {i !== 3 && <Divider variant="inset" />}
                  </Box>
                ))}
              </List>
            </Box>
            <Divider sx={{ mt: 3, mb: 3, opacity: 0.7 }} />
            <Box>
              <Typography>Recently added Offre</Typography>
              <List >
                {offres.slice(0, 4).map((p, i) => (
                  <Box key={p._id} >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          alt={p?.title}
                          variant="rounded"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={p?.description}
                        secondary={p?.createdAt}
                      />
                    </ListItem>
                    {i !== 3 && <Divider variant="inset" />}
                  </Box>
                ))}
              </List>
            </Box>
          </Paper>





          <Paper elevation={5} sx={{ p: 2, width: '150%', gridColumn: '1/3' }}>
        
        <div className="container2">
          <h2>Gestion Users</h2>

          <input className="espace" placeholder="chercher par email !!" onChange={event => setQuery(event.target.value)} />
          <span>   </span> <input placeholder="chercher par nom !!" onChange={event => setQuery(event.target.value)} /><span>   </span>  <FaSearch />

          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead >
                <TableRow>
                  <StyledTableCell align="left">   Email</StyledTableCell>
                  <StyledTableCell align="left" >Lastname</StyledTableCell>
                  <StyledTableCell align="left">Firstname</StyledTableCell>
                  <StyledTableCell align="left">Age</StyledTableCell>
                  <StyledTableCell align="center" width="150">Actions        </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>


                {/* <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.company}</TableCell>
                <TableCell align="center">{subscriber.date}</TableCell>
                <TableCell align="center">{subscriber.status}</TableCell>
                <TableCell align="center">${subscriber.amount}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell> */}


                {posts &&
                  posts.filter(post => {
                    if (query === '') {
                      return post;
                    } else if (post.email.toLowerCase().includes(query.toLowerCase())) {
                      return post;
                    } else if (post.lastname.toLowerCase().includes(query.toLowerCase())) {
                      return post;


                    }
                  }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(({ email, lastname, firstname, password, _id  },index) => (
                      <TableRow key={index}>
                        <TableCell align="left" width="350">{email}</TableCell>
                        <TableCell align="left">{lastname}</TableCell>
                        <TableCell align="left">{firstname}</TableCell>
                        <TableCell align="left">{password}</TableCell>
                        
                        <RowDetails Id={_id}
                          OnDelete={OnDelete} />
                        {/* <RowDetails
                    Email={email}
                    Lastname={lastname}
                    Firstname={firstname}
                    Password={password}
                    Id={_id}
                    OnDelete={OnDelete}
                    
                  /> */}
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
              count={posts.length}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ "aria-label": "Next Page" }}
              backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
          </Box></div>

          </Paper>
          {/* <Paper elevation={3} sx={{ p: 2,width:'80%', gridColumn: '1/3' }}>
       </Paper> */}
        </Box>
      </div></>
  );
}

export default Home;
