import React, { useEffect } from "react";

const DataNode4 = () => {
  useEffect(() => {
    // Redirige directement vers le lien
    window.location.href = `http://localhost:5601/app/discover#/view/687da0f0-d39b-11ef-a8e2-8381e352648c?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2015-01-21T01:10:10.621Z',to:'2018-12-31T21:45:51.731Z'))&_a=(columns:!(),filters:!(),grid:(),hideChart:!f,index:'55d01c24-ff83-4ae2-a9c3-3b143d12111f',interval:auto,query:(language:kuery,query:''),sort:!(!(Date,desc)))`;
  }, []);

  return null; // Pas besoin de retourner quoi que ce soit
};

export default DataNode4;
