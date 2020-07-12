import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
          latitude: '',
          longitude: ''
    };
  }

  componentDidMount() {

    let currentComponent = this;

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      navigator.geolocation.getCurrentPosition(function (position) {
        currentComponent.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        console.log(currentComponent.state)
      })
    });
  }

  // displayMarkers = () => {
  //   return this.state.stores.map((store, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         id={index}
  //         position={{
  //           lat: store.latitude,
  //           lng: store.longitude,
  //         }}
  //         onClick={() => console.log("You clicked me!")}
  //       />
  //     );
  //   });
  // };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 38.85, lng: -76.99 }}
        >
          <Marker position={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }} />
          {/* {this.displayMarkers()} */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAB2Hzw2E7XcqZDbN1zJF_3GcJn-BQDsjU",
})(MapContainer);
