import './App.css';
import React, { Fragment } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/header.component';
import List from './components/List/list.component';
import Map from './components/Map/map.component';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
