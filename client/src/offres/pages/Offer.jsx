import * as React from 'react';
import { Link } from 'react-router-dom';

import { Favorite, FavoriteBorder, MoreVert, Share, Delete } from "@mui/icons-material";
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


const Post = props => {

  return (
    <Card sx={{ margin: 2 }}>

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
        title={props.title}
        subheader={props.date}
      />
      <CardMedia

        component="img"
        style={{ height: '20rem', objectFit: 'cover' }}

        image={props.image}
        alt={props.title}
      />
      <CardContent style={{ height: '5rem' }}>
        <Typography variant="body2" color="text.secondary">
          <div class="text">
            {props.description}
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
          <Link to={`/offers/${props.id}`}>
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { }} >Voir Plus</Button>
        </Link>
        <Button  sx={{ marginRight: 2 }} variant="outlined" onClick={() => { alert('clicked'); }} >Editer</Button>
       <ResponsiveIConButton/>
      </CardActions>
    </Card>
  );
};
export default Post;