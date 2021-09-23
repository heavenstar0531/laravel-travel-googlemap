import './App.css';
import React, { Fragment, useEffect, useState } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/header.component';
import List from './components/List/list.component';
import Map from './components/Map/map.component';

import { getPlacesData } from './services';

function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState('');
  const [childClicked, setChildClicked] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (error) => {
        alert(
          'Please turn on your location access and refresh the page to continue.'
        );
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, bounds, coordinates]);

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
