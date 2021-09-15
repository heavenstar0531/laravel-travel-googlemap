import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab';

import useStyles from './placeDetails.styles';

const PlaceDetails = ({ place }) => {
  const { name, photo, price_level, ranking, awards } = place;
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          photo
            ? photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant='h6'>
          {name}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {price_level}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {ranking}
          </Typography>
        </Box>
        {awards
          ?.filter((item, index) => index < 3)
          .map((award) => (
            <Box my={1} display='flex' justifyContent='space-between'>
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant='subtitle2' color='textSecondary'>
                {award.display_name}
              </Typography>
            </Box>
          ))}
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
