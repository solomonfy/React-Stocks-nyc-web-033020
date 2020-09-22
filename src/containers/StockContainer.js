import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.allStocks.map((stock) => (
            <Stock
              stock={stock}
              key={stock.id}
              handleClick={this.props.buyStock}
            />
          ))
          //render the list of stocks here
        }
      </div>
    );
  }
}

export default StockContainer;
