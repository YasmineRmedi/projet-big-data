
import React from 'react';
import './DashbordPage.css';  // Import du fichier CSS pour le style

const Dashboard2 = () => {
  return (
    <div className="dashboard-container">
      <iframe
        src="http://localhost:5601/app/dashboards#/view/f765a3b0-caa6-11ef-a827-45bc509c252f?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2010-01-21T01:10:10.621Z',to:'2017-12-31T21:45:51.731Z'))&_a=(viewMode:edit)&show-top-menu=true&show-query-input=true&show-time-filter=true"
        className="dashboard-iframe"
        title="Datacenter 2 Dashboard"
      ></iframe>
    </div>
  );
};

export default Dashboard2;


