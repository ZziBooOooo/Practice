import React, { Component } from "react";
import "../scss/media.scss";
import data from "../data/data.json";
import Content from "../component/Content";

const Media = () => {
  return (
    <>
      <div className="totalBox">
        <p className="title">MOVIES</p>
        <div>
          <Content datas={data.movies}></Content>
        </div>
      </div>
    </>
  );
};
export default Media;
