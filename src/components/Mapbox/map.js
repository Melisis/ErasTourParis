import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


mapboxgl.accessToken =
  "pk.eyJ1IjoibGNkZXNpZ25zIiwiYSI6ImNrbGdxcXQ1NDI3NmMydnRreTZwM3k0YnoifQ.gzPL-l7g-Dw2nOg4gdVb9w";

const App = () => {
  const mapContainer = useRef();

 
  useEffect(() => {
   
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard-beta",
      center: [2.229182,48.895226],
      pitch: 70, // allows us to view the map in 3D
      bearing: 40,
      zoom: 17,
    });

    
    map.on("style.load", () => {
      map.setConfigProperty("basemap", "lightPreset", "dusk");
    });

   
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default App;
