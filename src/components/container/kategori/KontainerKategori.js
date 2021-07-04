import axios from "axios";
import React, { Component } from "react";
import { Card } from "../../cards/Cards";
import "./KontainerKategori.css";

class Kontainer_Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
    };
  }
  componentDidMount() {
    axios.get("/GamesController").then((result) => {
      let kategori = this.props.kategori;
      this.setState({
        card: result.data.filter(function (item) {
          return item.genre.includes(kategori);
        }),
      });
    });
  }
  render() {
    return (
      <div className="container-fluid mt-4 container-kategori">
        <div className="row">
          <div className="col-sm-1">
            <button className="btn btn-show">Show More</button>
          </div>
          <div className="col-sm-9">
            <div className="row d-flex justify-content-evenly">
              {this.state.card.slice(0, 4).map((card) => {
                let genre = card.genre;
                return <Card key={card.id} poster={card.poster} title={card.title} genre={genre} developer={card.developer} publisher={card.publisher} release_date={card.release_date} file_size={card.file_size} mirrors={card.mirrors} />;
              })}
            </div>
          </div>
          <div className="col-sm-2">
            <div className="kategori-2">
              <h1>{this.props.kategori}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Kontainer_Kategori.defaultProps = {
  kategori: "Kategori",
};

export default Kontainer_Kategori;
