import React from "react";
import { Link } from "react-router-dom";

const main = () => {
  return (
    <div>
      main<br></br>
      <Link to="/sub1">Sub1 컴포넌트로 이동</Link>
    </div>
  );
};

export default main;
