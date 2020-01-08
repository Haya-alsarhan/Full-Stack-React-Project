import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default class Home extends React.Component {
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
    const { p } = this.props;
    const { lat, lng } = this.state;
    console.log(lat, lng);
    return (
      <div>
        <Navbar />
        <Hero hero="defaultHero">
          <Banner img={<img src={logo} alt="wainnakel" />}>
            <Link to="./Restaurant" className="b">
              اقترح
            </Link>
          </Banner>
        </Hero>
      </div>
    );
  }
}
