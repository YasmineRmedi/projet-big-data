import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
  return (
    <div className="body">
     
      <div class="container">
        <h2 class="main-title">Application de Monitoring Datacenter Hadoop</h2>
        <h1>Choisir un Datacenter</h1>
        <div class="button-container">
          <a href="/dashboard/datacenter1" class="datacenter-link">
            <button class="datacenter-button">Datacenter 1</button>
          </a>
          <a href="/dashboard/datacenter2" class="datacenter-link">
            <button class="datacenter-button">Datacenter 2</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
