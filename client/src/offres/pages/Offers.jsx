import { Box, Stack, Skeleton } from "@mui/material";
import Grid from '@mui/material/Grid';

import React, { useState } from "react";
import Offer from "./Offer.jsx";

 


const Feed = props => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  if (props.items.length === 0) {
    return (
      <Offer/>
    );
  }
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
         
        <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.items.map((offre, index) => (
          <Grid   item xs={12} sm={12} md={6} key={index}>
            <Offer
            key={offre.id}
            id={offre.id}
            image={offre.image}
            title={offre.title}
            description={offre.description}
            />     
          </Grid>
        ))}
      </Grid>
      )}
    </Box>
  );
};

export default Feed;