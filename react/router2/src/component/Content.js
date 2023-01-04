import React, { Component } from "react";
import "../scss/media.scss";

const Content = ({ datas }) => {
  return (
    <div className="contentBox">
      {datas.map((data) => {
        return (
          <div>
            <div>
              <img src={data.photo}></img>
              <p>{data.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Content;
