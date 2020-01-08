import React from "react";

export default class Gelocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0
    };
  }

  componentWillMount() {
    if (!!navigator.geolocation) {
      navigator.geolocation.watchPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        err => console.log(err),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  render() {
    const { lat, lng } = this.state;
    console.log(lat, lng);
    return;
  }
}
