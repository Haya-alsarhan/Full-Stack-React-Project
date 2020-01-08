import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FaDribbble } from "react-icons/fa";

export default function Banner({ Name, img, children }) {
  return (
    <div className="banner">
      <div className="row">
        <div className="col-md-3 col-sm-1 "> </div>
        <div className=" col-md-6 col-sm-10 ">
          <div className="row" id="main-block">
            <div className="col-md-2"> {Name}</div>
            <div className="col-md-8 ">{img}</div>
            <div className="col-md-8"></div>
            <div className="col-md-2 "></div>
          </div>

          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-1"> </div>
            <div className="col-md-8 col-sm-6 col-xs-10">{children}</div>
            <div className="col-md-2 col-sm-3 col-xs-1"></div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12"></div>
          </div>

          <div className="col-md-3 col-sm-3 col-xs-0"></div>
        </div>

        <div className="col-md-3 col-sm-3 col-xs-0"></div>
      </div>

      <div className="col-md-3 col-sm-3 col-xs-0"></div>
    </div>
  );
}
