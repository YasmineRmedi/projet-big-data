import React, { useEffect } from "react";

const DataNode10 = () => {
  useEffect(() => {
    // Redirige directement vers le lien
    window.location.href = `http://localhost:5601/app/discover#/view/be1c8b90-d39e-11ef-a8e2-8381e352648c?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2015-01-21T01:10:10.621Z',to:'2018-12-31T21:45:51.731Z'))&_a=(columns:!(Level,Time,Content),filters:!(),grid:(),hideChart:!f,index:'11a3bd48-6f5f-4fdb-aad3-2b1ca04e29eb',interval:auto,query:(language:kuery,query:''),sort:!(!(Date,desc)))`;
  }, []);

  return null; // Pas besoin de retourner quoi que ce soit
};

export default DataNode10;
