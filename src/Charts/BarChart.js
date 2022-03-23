import React, { useState, useEffect, Component } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale);

class BarChart extends Component {
  state = {
    isLoading: true,
    groups: [],
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:6170/records/getAll");
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }
  render() {
    const { groups, isLoading } = this.state;
    console.log(groups);
    if (isLoading) {
      return <p>Loading... Please RUN API Server</p>;
    }
    var data = {
      labels: groups?.map((groups) => groups.teamName),
      datasets: [
        {
          data: groups?.map((groups) => groups.noOfDefects),

          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      scales: {},
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    };
    console.log(data);
    return (
      <div>
        <Bar data={data} height={290} options={options} />
      </div>
    );
  }
}

export default BarChart;
