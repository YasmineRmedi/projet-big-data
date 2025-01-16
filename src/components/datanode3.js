import React, { useEffect } from "react";

const DataNode3 = () => {
  useEffect(() => {
    // Redirige directement vers le lien
    window.location.href = `http://localhost:5601/app/discover#/view/28cae840-d39c-11ef-a8e2-8381e352648c?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2015-01-21T01:10:10.621Z',to:'2018-12-31T21:45:51.731Z'))&_a=(columns:!(),filters:!(),grid:(),hideChart:!f,index:'7b2a7d5d-05a4-45af-a744-1ec08a67dc62',interval:auto,query:(language:kuery,query:''),sort:!(!(Date,desc)))`;
  }, []);

  return null; // Pas besoin de retourner quoi que ce soit
};

export default DataNode3;
