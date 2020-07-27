import React from "react";
import { Map, GoogleApiWrapper } from "google-map-react";

function Location() {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <div>
      <Map
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCPd9kPF9OS2gIPNRs6JW3zKtSxOvpLZRk",
})(Location);
