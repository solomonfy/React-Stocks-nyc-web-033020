import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const stocksURL = "http://localhost:3000/stocks";

class MainContainer extends Component {
  state = {
    allStocks: [],
    portfolioStocks: [],
    filteredStocks: [],
    type: "",
  };

  componentDidMount() {
    fetch(stocksURL)
      .then((resp) => resp.json())
      .then((stocksArray) =>
        this.setState({
          allStocks: stocksArray,
        })
      );
  }

  buyStock = (id) => {
    let newArray = this.state.allStocks;
    // debugger;
    let foundStock = newArray.find((stock) => stock.id === id);
    // console.log(foundStock);
    if (!this.state.portfolioStocks.includes(foundStock)) {
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, foundStock],
      });
    }
  };

  sellStock = (id) => {
    // debugger;
    // console.log(id);
    let stockToBeSold = [...this.state.portfolioStocks].find(
      (stock) => stock.id === id
    );
    let newPortList = this.state.portfolioStocks.filter(
      (stock) => stock !== stockToBeSold
    );
    // console.log(stockToBeSold)
    this.setState({
      portfolioStocks: newPortList,
    });
  };

  filterStock = (type) => {
    // console.log(type.target.value);

    let toBeDisplayed = this.state.allStocks;
    switch (type) {
      case "All":
        this.setState({
          filteredStocks: toBeDisplayed,
        });
        break;
      case "Sportswear":
        this.setState({
          filteredStocks: toBeDisplayed.filter(
            (stock) => stock.type === "Sportswear"
          ),
        });
        break;
      case "Tech":
        this.setState({
          filteredStocks: toBeDisplayed.filter(
            (stock) => stock.type === "Tech"
          ),
        });
        break;
      case "Finance":
        this.setState({
          filteredStocks: toBeDisplayed.filter(
            (stock) => stock.type === "Finance"
          ),
        });
        break;

      default:
        console.log("Option not found");
        break;
    }
    // console.log(type);
  };

  sortStocks = (value) => {
    // console.log(value);
    if (value === "Price") {
      this.setState({
        filteredStocks: this.state.allStocks.sort((a, b) => a.price - b.price),
      });
    } else if (value === "Alphabetically asc") {
      this.setState({
        filteredStocks: this.state.allStocks.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      });
    } else {
      this.setState({
        filteredStocks: this.state.allStocks.sort((a, b) =>
          b.name.localeCompare(a.name)
        ),
      });
    }
  };

  render() {
    // console.log(this.state.filteredStocks);
    return (
      <div>
        <SearchBar
          filterStock={this.filterStock}
          sortStocks={this.sortStocks}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              allStocks={this.state.filteredStocks}
              buyStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolioStocks={this.state.portfolioStocks}
              sellStock={this.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
