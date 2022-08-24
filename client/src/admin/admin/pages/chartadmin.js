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
import React, { useEffect,useState } from 'react';
import axios from 'axios'
import Navslid from '../components/Navbar'

const Main = () => {
    const [posts, setPost] = useState([]);
    const [offres, setOffres] = useState([]);


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
       sx={{ p: 3,
             
             marginTop: 4,
             height: 100,
             background: 'linear-gradient(to right bottom, #80ecda, #59b5b5)',
             
             width: 260}}>
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










      <Paper elevation={3} sx={{ p: 3 ,height: 100,
             background: 'linear-gradient(to right bottom, #80ecda, #59b5b5)',

             width: 260,
            
             marginTop: 4 }}>
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


      <Paper elevation={3} sx={{ p: 3 ,height: 100,
             background: 'linear-gradient(to right bottom, #80ecda, #59b5b5)',

             width: 260,
            
             marginTop: 4 }}>
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
      sx={{ p: 3,
         gridColumn: 4,
         marginRight: '270px',
         gridRow: '1/4',
         width: '380px' }}>
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
                    secondary={ p?.createdAt}
                  />
                </ListItem>
                {i !== 3 && <Divider variant="inset" />}
              </Box>
            ))}
          </List>
        </Box>
      </Paper>
      {/* <Paper elevation={3} sx={{ p: 2, width:'80%', gridColumn: '1/3' }}>
      </Paper>
      <Paper elevation={3} sx={{ p: 2,width:'80%', gridColumn: '1/3' }}>
      </Paper> */}
    </Box></div></>
  );
};

export default Main;
