import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("passive");
  const [active3, setActive3] = useState("passive");

  return (
    <div>
      <div class="topnav">
        <Link to="/">
          <p
            class={active1}
            onClick={() => {
              setActive1("active");
              setActive2("passive");
              setActive3("passive");
            }}
          >
            Home
          </p>
        </Link>
        <Link to="/appointment">
          <p
            class={active2}
            onClick={() => {
              setActive1("passive");
              setActive2("active");
              setActive3("passive");
            }}
          >
            Appointment
          </p>
        </Link>
        <Link to="/map">
          <p
            class={active3}
            onClick={() => {
              setActive1("passive");
              setActive2("passive");
              setActive3("active");
            }}
          >
            Our Location
          </p>
        </Link>
      </div>
    </div>
  );
}
