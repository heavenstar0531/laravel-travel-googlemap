import React, { Fragment } from 'react';
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
import Rating from '@material-ui/lab/Rating';

import useStyles from './placeDetails.styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  const {
    name,
    photo,
    price_level,
    ranking,
    awards,
    cuisine,
    address,
    phone,
    distance_string,
    web_url,
    website,
    rating,
    num_reviews,
  } = place;
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Fragment>
      {name && (
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
              {name} ({distance_string})
            </Typography>
            <Box display='flex' justifyContent='space-between' my={2}>
              <Rating name='read-only' value={Number(rating)} readOnly />
              <Typography component='legend'>
                {num_reviews} review{num_reviews > 1 && 's'}
              </Typography>
            </Box>
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
                <Box
                  my={1}
                  display='flex'
                  justifyContent='space-between'
                  key={award.display_name}
                >
                  <img src={award.images.small} alt={award.display_name} />
                  <Typography variant='subtitle2' color='textSecondary'>
                    {award.display_name}
                  </Typography>
                </Box>
              ))}
            {cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size='small'
                label={name}
                className={classes.chip}
              />
            ))}
            {address && (
              <Typography
                gutterBottom
                variant='subtitle2'
                color='textSecondary'
                className={classes.subtitle}
              >
                <LocationOnIcon /> {address}
              </Typography>
            )}
            {phone && (
              <Typography
                gutterBottom
                variant='subtitle2'
                color='textSecondary'
                className={classes.spacing}
              >
                <PhoneIcon /> {phone}
              </Typography>
            )}

            <CardActions>
              {web_url && (
                <Button
                  size='small'
                  color='primary'
                  onClick={() => window.open(web_url, '_blank')}
                >
                  Trip Advisor
                </Button>
              )}
              {website && (
                <Button
                  size='small'
                  color='primary'
                  onClick={() => window.open(website, '_blank')}
                >
                  Website
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Card>
      )}
    </Fragment>
  );
};

export default PlaceDetails;
