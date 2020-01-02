import React, { Component } from "react";

import Thumbnail from './components/Thumbnail'
import Score from './components/Score'



class App extends Component {
  state = {
    tiles: [
      '/img/BigFootBeach.jpg',
      '/img/BogFoot.jpg',
      '/img/Dragon.jpg',
      '/img/Dragonice.jpg',
      '/img/GraveDigger.jpg',
      '/img/OldSchoolGD.jpg',
      '/img/reddragon.jpg',
      '/img/Scooby-Doo-Air.jpg',
      '/img/Zombie.jpg'
    ],
    score: 0,
    topScore: 0
  };

  clickedTiles = [

  ];

  
  handleTileClick = (evt) => {

    console.log(evt);

    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;
      this.setState({ score: 0 });
      return;
    }

    const newScore = this.state.score + 1;

    const topScore = newScore > this.state.topScore ?
      this.state.score :
      this.state.topScore;
    this.clickedTiles.push(clickedTile);
    // console.log('score: ', this.state.score)

    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,

      score: newScore,
      topScore: topScore
    });


  }


  
  render() {
    return (
      <div className="App">
        <div className="col-12" id="header"></div>
        <Score score={this.state.score} topScore={this.state.topScore} />
        <div className="container-fluid pt-5" >
          <div className="row">

            {
              this.state.tiles.map((tile, idx) =>
                <Thumbnail
                  src={tile} key={idx} onClick={this.handleTileClick}
                />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
