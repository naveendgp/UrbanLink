import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import './map.css'
import "leaflet-routing-machine";

const RoutingControl = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "blue", opacity: 1, weight: 5 }],
      },
    }).addTo(map);
    
    return () => {
      map.removeControl(routingControl);
    };

  }, [map, start, end]);

  return null;
};

export default RoutingControl;
