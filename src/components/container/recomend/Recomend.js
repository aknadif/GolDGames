import axios from "axios";
import React, { Component } from "react";
import { Card } from "../../cards/Cards";
import "./Recomend.css";

export default class Recomend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      error: null,
      countA: 0,
      countB: 4,
    };
  }
  componentDidMount() {
    axios.get("/GamesController").then((result) => {
      this.setState({
        card: result.data,
      });
    });

    setInterval(this.plusCountA, 5000);
    setInterval(this.plusCountB, 5000);
  }
  plusCountA = () => {
    for (let i = 0; i < 1; i++) {
      if (this.state.countA <= this.state.card.length) {
        this.setState({
          countA: this.state.countA + 1,
        });
      }
      if (this.state.countA > this.state.card.length - 4) {
        this.state.countA = 0;
      }
    }
  };
  plusCountB = () => {
    for (let z = 0; z < 1; z++) {
      if (this.state.countB <= this.state.card.length) {
        this.setState({
          countB: this.state.countB + 1,
        });
      }
      if (this.state.countB >= this.state.card.length) {
        this.state.countB = 3;
      }
    }
  };

  render() {
    return (
      <div className="container-fluid mt-4 container-recomend">
        <div className="row ">
          <div className="col-sm-2">
            <div className="kategori">
              <h2>Recommend</h2>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row d-flex justify-content-evenly">
              {this.state.card.slice(this.state.countA, this.state.countB).map((card) => {
                let genre = card.genre;
                return <Card key={card.id} poster={card.poster} title={card.title} genre={genre} developer={card.developer} publisher={card.publisher} release_date={card.release_date} file_size={card.file_size} mirrors={card.mirrors} />;
              })}
            </div>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-show" onClick={this.plusCount}>
              Show More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Recomend.defaultProps = {
  kategori: "Kategori",
};
