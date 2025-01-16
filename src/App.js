import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/DashboardPage1";
import Dashboard2 from "./pages/DashbordPage2";
import Dc2 from "./pages/dc2";
import DataNode1 from "./components/datanode1";
import DataNode3 from "./components/datanode3";
import DataNode2 from "./components/datanode2";
import DataNode5 from "./components/datanode5";
import DataNode6 from "./components/datanode6";
import DataNode7 from "./components/datanode7";
import DataNode8 from "./components/datanode8";
import DataNode9 from "./components/datanode9";
import DataNode10 from "./components/datanode10";
import DataNode4 from "./components/datanode4";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/datacenter1" component={Dashboard} />
        <Route path="/dashboard/datacenter2" component={Dc2} />
        <Route path="/dashboard/all" component={Dashboard2} />
        <Route path="/dashboard/node1" component={DataNode1} />
        <Route path="/dashboard/node2" component={DataNode2} />
        <Route path="/dashboard/node3" component={DataNode3} />
        <Route path="/dashboard/node4" component={DataNode4} />
        <Route path="/dashboard/node5" component={DataNode5} />
        <Route path="/dashboard/node6" component={DataNode6} />
        <Route path="/dashboard/node7" component={DataNode7} />
        <Route path="/dashboard/node8" component={DataNode8} />
        <Route path="/dashboard/node9" component={DataNode9} />
        <Route path="/dashboard/node10" component={DataNode10}/>
        
      </Switch>
    </Router>
  );
}

export default App;
