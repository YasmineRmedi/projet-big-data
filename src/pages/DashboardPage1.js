import React from 'react';
import "./DashbordPage.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <iframe
        src="http://localhost:5601/app/dashboards#/view/e4a86ec0-ca9b-11ef-a827-45bc509c252f?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2010-01-21T01:10:10.621Z',to:'2017-12-31T21:45:51.731Z'))&_a=(viewMode:edit)&show-top-menu=true&show-query-input=true&show-time-filter=true"
        className="dashboard-iframe"
        title="Datacenter Dashboard"
      />
    </div>
  );
};

export default Dashboard;

