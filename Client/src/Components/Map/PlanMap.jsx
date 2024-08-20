import React from "react";
import "./map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import RoutingControl from "./RoutingControl";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const PlanMap = ({latitude,Longitude,start,end}) => {
  return (
    <>
      <div className="PlanMap">
        <MapContainer
          center={[latitude, Longitude]}
          zoom={10}
          className="PlanMap-container"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <RoutingControl start={start} end={end} />
        </MapContainer>
      </div>
    </>
  );
};

export default PlanMap;
