import React, { Component } from "react";
import ThumbBox from "../thumbBox/thumbBox";
//import Charts from "../charts/charts";
import Linechart from "../charts/lineChart";
import DoughnutExample from "../charts/doughnut";
import PieExample from "../charts/piechart";

class Home extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <ThumbBox />
            <div class="row">
              <PieExample />
              <Linechart />
              <DoughnutExample />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
