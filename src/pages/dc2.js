import React from "react";
import "./dc2.css"; // Importez votre fichier CSS ici

const Dc2 = () => {
  return (
    <div className="container">
      <header className="header">
        <h2 className="main-title">Application de Monitoring Datacenter</h2>
        <h1 className="subtitle">Datacenter 2</h1>
        <div className="breadcrumb">
          Sélectionner un datanode et le visualiser
        </div>
      </header>

      <a href="/dashboard/all" className="view-all-button">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4h16v16H4z" />
          <path d="M4 9h16M4 14h16" />
          <path d="M9 4v16M14 4v16" />
        </svg>
        Voir toutes les données du Datacenter 2
      </a>

      <div className="nodes-grid">
        {Array.from({ length: 32 }).map((_, index) => (
          <a
            key={index}
            href={`/dashboard/node${index + 1}`}
            className="node-link"
          >
            <button className="node-button">
              <div className="node-title">
                <span className="status-indicator"></span>
                DataNode-{index + 1}
              </div>
              <div className="dashboard-preview">
                <div className="dashboard-preview-text">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9h18v10H3z" />
                    <path d="M7 4v5M17 4v5" />
                  </svg>
                  visualiser
                </div>
              </div>
            </button>
          </a>
        ))}
      </div>
      <a href={`/dashboard/namenode`} className="node-link">
        <button className="node-button">
          <div className="node-title">
            <span className="status-indicator"></span>
            NameNode
          </div>
          <div className="dashboard-preview">
            <div className="dashboard-preview-text">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9h18v10H3z" />
                <path d="M7 4v5M17 4v5" />
              </svg>
              visualiser
            </div>
          </div>
        </button>
      </a>
      <a href={`/dashboard/secondrynamenode`} className="node-link">
        <button className="node-button">
          <div className="node-title">
            <span className="status-indicator"></span>
            SecondryNameNode
          </div>
          <div className="dashboard-preview">
            <div className="dashboard-preview-text">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9h18v10H3z" />
                <path d="M7 4v5M17 4v5" />
              </svg>
              visualiser
            </div>
          </div>
        </button>
      </a>
    </div>
  );
};

export default Dc2;
