import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Choisir un Datacenter</h1>
      <div>
        <Link to="/dashboard/datacenter1">
          <button>Datacenter 1</button>
        </Link>
        <Link to="/dashboard/datacenter2">
          <button>Datacenter 2</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
