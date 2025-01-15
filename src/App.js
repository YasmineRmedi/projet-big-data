import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/DashboardPage1";
import Dashboard2 from "./pages/DashbordPage2";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/datacenter1" component={Dashboard} />
        <Route path="/dashboard/datacenter2" component={Dashboard2} />
      </Switch>
    </Router>
  );
}

export default App;
