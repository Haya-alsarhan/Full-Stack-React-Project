import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

import { Link } from "react-router-dom";
import Mymap from "../Components/Mymap";
export default function Restaurant() {
  return (
    <div>
      <Navbar />
      <Hero hero="defaultHero">
        <Banner Name={<Mymap />}>
          <Link className="b">اقترح</Link>
        </Banner>
      </Hero>
    </div>
  );
}
