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
import SdCardIcon from '@mui/icons-material/SdCard';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import chart from './dashbord/Analytics'
//////////

import { PieChart, Pie, Cell, Tooltip } from 'recharts';


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
import { Group, MapsHomeWork, Title } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,Stack
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
/////////////////

const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
  const [cv, setCv] = useState([]);

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
    loadCV();





    let free = 0,
    lessThan15 = 0,
    between15And35 = 0,
    moreThan35 = 0;
  posts.forEach((room) => {
    if (room.lastname === 0) return free++;
    if (room.age < 15) return lessThan15++;
    if (room.email <= 35) return between15And35++;
    moreThan35++; });
  });

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/user/");
    setPost(result.data.reverse());
  };


  const loadoffre = async () => {
    const result = await axios.get("http://localhost:5000/api/offer/");
    setOffres(result.data.reverse());
  };

  const loadCV = async () => {
    const result = await axios.get("http://localhost:5000/api/cvtech/cvtech");
    setCv(result.data.reverse());
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
              // background: 'linear-gradient(#00d4ff, #6666d6)',
              background: '#07abbb',
              width: 260,
              boxShadow: '0px 2px 20px #181a1f',

              
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
            // background: 'linear-gradient(#40ddb0,#80a5ec)',
            background: '#66d6ba',

            width: 260,

              boxShadow: '0px 2px 20px #181a1f',
              marginTop: 4,
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
            // background: 'linear-gradient(#00d4ff, #59b5b5)',
            background: '#59b5b5',
            width: 260,

              boxShadow: '0px 2px 20px #181a1f',
              marginTop: 4,
          }}>
            <Typography variant="h6">Total CV Bank</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SdCardIcon sx={{ height: 30, width: 70, opacity: 0.3, mr: 1 }} />
              <Typography variant="h4">{cv.length}</Typography>
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
              <Typography> Users Recent</Typography>
              <List 
               sx={{
              float: 'left' ,
            width: '250px'          }} 
              >
                {posts.slice(0, 4).map((p, i) => (
                  <Box key={p._id}>
                    <ListItem>
                      
                       
                     
                      <ListItemText   
                        primary={p?.firstname}
                      />
                      
                      <ListItemText sx={{
                        width: '100px',
                        marginRight:'50px'
                       
                      }}  
                      primary={p?.lastname}
                    />
                     
                    
                    </ListItem>
                    
                    {i !== 3 && <Divider variant="inset" />}
                  </Box>
                ))}

                     
              </List>
              <List sx={{
              float: 'right',
              width: '80px',
                      }} >


              {cv.slice(0, 4).map((p, i) => (
                  <Box key={p._id}>
                    <ListItem>
                      
                      <ListItemText   
                        primary={p?.Specialiter}
                        sx={{ backgroundColor: 'red',
                        boxShadow: '2px 2px 0px #181a1f',
                        borderRadius: '5px',
                        opacity: 0.8,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'

                      }}
                      />
                    
                    </ListItem>
                    
                    {i !== 3 && <Divider variant="inset" />}
                  </Box>
                ))}
              </List>
            </Box>
            <Divider sx={{ mt: 3, mb: 3, opacity: 1.7 }} />
            <Box>
              <Typography> Offre Recent</Typography>
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
            





            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
     >
      <PieChart width={100} height={100} >
        <Pie
                    data={posts}
                    labelLine={false}
                    label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
        >
          {/* {posts.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} */}
          
        </Pie>
        <Tooltip />
      </PieChart>



      <Stack gap={2}>
        <Typography variant="h6">Rooms Cost</Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {COLORS.map((color, i) => (
            <Stack key={color} alignItems="center" spacing={1}>
              <Box sx={{ width: 20, height: 20, background: color }} />
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {posts[i]?.lastname}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
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
