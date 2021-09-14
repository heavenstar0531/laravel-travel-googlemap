import React from 'react';

const PlaceDetails = ({ place }) => {
  const { name } = place;
  return <div>{name}</div>;
};

export default PlaceDetails;
