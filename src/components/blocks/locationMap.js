//////https://tomchentw.github.io/react-google-maps/#marker

import _ from "lodash";
import React , {useState} from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import L from "leaflet"
import "leaflet/dist/leaflet.css"
const zoomInLevel = 14

function LocationMarker({ city, setCity, currentCity }) {
  const icon = {
    url: require("../../images/map-pin.svg").default,
    scaledSize : new window.google.maps.Size(24, 24),
  }

  const activeIcon = {
    url: require("../../images/map-pin-active.svg").default,
    scaledSize : new window.google.maps.Size(32, 32)
  }

  return (
    <Marker
      position={{ lat: city.coordinates.latitude, lng: city.coordinates.longitude}}
      icon={currentCity.originalId === city.originalId ? activeIcon : icon}
      key={city.originalId}
      onClick={ e => {
        setCity(city)
        // TO DO GO ON MAP POINT -FLY TO-
      }}
    />
  )
}

const LocationMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)( ({ locations }, props) => {
  
  const [currentCity, setCity] = useState(locations[0])

  return (
  <GoogleMap defaultZoom={zoomInLevel} defaultCenter={{ lat: currentCity.coordinates.latitude, lng: currentCity.coordinates.longitude }}>
      {locations.map(city => (
                <LocationMarker
                  city={city}
                  key={city.originalId}
                  setCity={setCity}
                  currentCity={currentCity}
                />
      ))}
  </GoogleMap>
  )
  }
);

export default LocationMap;