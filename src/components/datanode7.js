import React, { useEffect } from "react";

const DataNode7= () => {
  useEffect(() => {
    // Redirige directement vers le lien
    window.location.href = `http://localhost:5601/app/discover#/view/10a72390-d39d-11ef-a8e2-8381e352648c?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2015-01-21T01:10:10.621Z',to:'2018-12-31T21:45:51.731Z'))&_a=(columns:!(Level,Content,Time),filters:!(),grid:(),hideChart:!f,index:'8e84a7fd-cbf3-4d80-8cab-e3a29e743aa6',interval:auto,query:(language:kuery,query:''),sort:!(!(Date,desc)))`;
  }, []);

  return null; // Pas besoin de retourner quoi que ce soit
};

export default DataNode7;
