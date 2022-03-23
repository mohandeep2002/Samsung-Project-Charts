import "./App.css";
import React, { Component } from "react";
import LineChart from "./Charts/LineChart";
import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import AllList from "./Charts/AllList";
import { render } from "@testing-library/react";
import BootStrapData from "./Charts/BootstrapData";

class App extends Component {
  render() {
    return (
      <div>
        <AllList />
        <DoughnutChart />
        <LineChart />
        <BarChart />
      </div>
    );
  }
}

export default App;
