import React, { useState } from "react"
import { Box, Text, Flex } from "@theme-ui/components"
import { MapContainer, TileLayer, Marker, MapConsumer } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const zoomInLevel = 14

function LocationMarker({ city, setCity, currentCity }) {
  const icon = new L.Icon({
    iconUrl: require("../../images/map-pin.svg").default,
    iconRetinaUrl: require("../../images/map-pin.svg").default,
    iconAnchor: [18, 50],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(36, 50),
  })

  const activeIcon = new L.Icon({
    iconUrl: require("../../images/map-pin-active.svg").default,
    iconRetinaUrl: require("../../images/map-pin-active.svg").default,
    iconAnchor: [25, 70],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 70),
  })

  return (
    <Marker
      position={[city.coordinates.latitude, city.coordinates.longitude]}
      icon={currentCity.originalId === city.originalId ? activeIcon : icon}
      key={city.originalId}
      eventHandlers={{
        click: e => {
          setCity(city)
          e.target["_map"].flyTo(e.latlng, zoomInLevel, {})
        },
      }}
    />
  )
}

const LocationsMap = ({ locations }) => {
  const [currentCity, setCity] = useState(locations[0])
  const [map, setMap] = useState()
  const locationBounds = locations.map(city => [
    city.coordinates.latitude,
    city.coordinates.longitude,
  ])
  const bounds = locationBounds

  return (
    <Box sx={{ position: "relative" }}>
      <Flex
        sx={{
          flexDirection: ["column-reverse", "column-reverse", "row"],
          height: ["auto", "auto", "80vh"],
        }}
      >
        <Box
          sx={{
            minWidth: ["100%", "30%", "20%"],
            overflow: "scroll",
          }}
        >
          {locations.map(location => (
            <Box
              sx={{
                borderTop: "1px solid",
                position: "relative",
                borderColor: "#ccc",
                backgroundColor:
                  location.originalId === currentCity.originalId
                    ? "#fafafa"
                    : null,
                p: [3, 3, 4],
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#fafafa",
                },
                "&:last-child": {
                  borderBottom: "1px solid",
                  borderColor: "#ccc",
                },
              }}
              onClick={() => {
                map.panTo([
                  location.coordinates.latitude,
                  location.coordinates.longitude,
                ])
                setCity(location)
              }}
            >
              <Text
                as="p"
                variant="h6"
                sx={{
                  color:
                    location.originalId === currentCity.originalId
                      ? "primary"
                      : "dark",
                  margin: 0,
                }}
              >
                {location.name}
              </Text>
              <Box dangerouslySetInnerHTML={{ __html: location.body }} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: ["100%"],
            height: ["500px", "500px", "100%"],
            ".leaflet-container": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          {typeof window !== "undefined" && (
            <MapContainer scrollWheelZoom={false} bounds={bounds}>
              <TileLayer url="https://api.mapbox.com/styles/v1/effearredi/ckh22v39w1akj19qrukca8qk5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWZmZWFycmVkaSIsImEiOiJja2gyMm04bmgwOGtlMnFwY2p3bHVqeTNlIn0.8QQ7WsJCwbYntUj0K70tKw" />
              {locations.map(city => (
                <LocationMarker
                  city={city}
                  key={city.originalId}
                  setCity={setCity}
                  currentCity={currentCity}
                />
              ))}
              <MapConsumer>
                {map => {
                  setMap(map)
                  return null
                }}
              </MapConsumer>
            </MapContainer>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default LocationsMap
