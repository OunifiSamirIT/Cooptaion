import * as React from 'react';

import { Favorite, FavoriteBorder, MoreVert, Share, Delete } from "@mui/icons-material";
import { useParams } from 'react-router-dom';
import {
  Button,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";

import Dialog from '../../shared/components/UIElements/Dialog';
import './Offer.css'
import ResponsiveIConButton from '../../shared/components/UIElements/ResponsiveIconButton';
 

const offers = [
    {
      id: 'off1',
      title: 'Dev JAVA',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems t offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you', 
      
    },
     {
      id: 'off2',
      title: 'Dev Mobile Flutter',
      image:
        'https://sannacode.com/storage/app/uploads/public/5ee/897/555/5ee8975550eff237186992.png',
        description: 'This offers seems to be good for you',
      
    },
    {
      id: 'off3',
      title: 'Dev JAVA SPRING',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be  good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you', 
      
    }
    ,{
      id: 'off4',
      title: 'Dev JAVA 3 ans Exper',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers ', 
      
    }
    ,{
      id: 'off5',
      title: 'Dev JAVA',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be  ', 
      
    },{
      id: 'off6',
      title: 'Dev Python 5 ans Exp',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be  ', 
      
    },
  ];

const OfferDetails = props => {
    const offerId = useParams().offerId;
    const loadedOffer = offers.filter(offer => offer.id === offerId);
    console.log("IIIIIIIIIIIIIIIIIDDDDDDDDDDDDDDDDDDDD");
    console.log(loadedOffer[0].id);
 
  return (
    <Card sx={{ width: '95%' , marginRight:'auto' , marginLeft:'auto', marginTop: '20px'}}>

      <CardHeader
        sx={{ bgcolor: "#d3d3d3" }}
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={loadedOffer[0].title}
        subheader={loadedOffer[0].date}
      />
      <CardMedia

        component="img"
        style={{ height: '30rem', objectFit: 'cover' }}

        image={loadedOffer[0].image}
        alt={loadedOffer[0].title}
      />
      <CardContent style={{ height: '15rem' }}>
        <Typography variant="body2" color="text.secondary">
          <div>
            {loadedOffer[0].description}
          </div>
        </Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions disableSpacing>
        <IconButton sx={{ marginRight: 1 }} aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton sx={{ marginRight: 2 }} aria-label="share">
          <Share />

        </IconButton>

        <Dialog title={"title"}
          text={"Après avoir supprimé cette offre, vous ne pouvez pas la récupérer, souhaitez-vous continuer ?"}
          child={<IconButton sx={{ marginRight: 2 }} aria-label="Delete">
            <Delete />
          </IconButton>} />
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { }} >Voir Plus</Button>
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { alert('clicked'); }} >Editer</Button>
       <ResponsiveIConButton/>
      </CardActions>
    </Card>
  );
};
export default OfferDetails;