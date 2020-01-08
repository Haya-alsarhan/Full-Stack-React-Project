import React, { Component, useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  Marker
} from "react-google-maps";
import Fetch from "../Components/Fetch.js";

function Map() {
  const [selectedrestaurant, setselectedrestaurant] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 24.713552, lng: 46.675297 }}
    >
      {this.state.items.map(restaurants => (
        <Marker
          key={restaurants.properties.id}
          position={{ lat: restaurants.uid[1], lng: restaurants.uid[0] }}
          onClick={() => {
            setselectedrestaurant(restaurants);
          }}
        />
      ))}
      {selectedrestaurant && (
        <InfoWindow
          position={{
            lat: selectedrestaurant.uid[1],
            lng: selectedrestaurant.uid[0]
          }}
        >
          <div>
            {selectedrestaurant.properties.name}
            {selectedrestaurant.properties.rate}
            {selectedrestaurant.properties.price}
            {selectedrestaurant.properties.link}
            {selectedrestaurant.properties.isOpen}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function Mymap() {
  return (
    <div style={{ width: "100vw", height: "50vh" }}>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places}"
        }
        loadingElement={<div style={{ height: "100%" }}></div>}
        containerElement={<div style={{ height: "100%" }}></div>}
        mapElement={<div style={{ height: "100%" }}></div>}
      />
    </div>
  );
}
