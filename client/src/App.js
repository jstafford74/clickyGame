import React, { Component } from "react";

import Thumbnail from './components/Thumbnail'
import Score from './components/Score'



class App extends Component {
  state = {
    tiles: [
      'https://vignette.wikia.nocookie.net/monstertruck/images/0/0a/AUT-14-RK1739-01P.JPG/revision/latest/scale-to-width-down/185?cb=20160104024211',
      'https://vignette.wikia.nocookie.net/monstertruck/images/e/ea/Shattered.jpg/revision/latest/scale-to-width-down/185?cb=20150206013820',
      'https://vignette.wikia.nocookie.net/monstertruck/images/8/82/Truck-1.jpg/revision/latest/scale-to-width-down/185?cb=2015082018115',
      'https://vignette.wikia.nocookie.net/monstertruck/images/6/6e/21232026_10154918738928193_26059027075219651_n.jpg/revision/latest/scale-to-width-down/185?cb=20170903214753',
      'http://www.chinonthetank.com/wp-content/uploads/2013/04/1280px-Monster_mutt_truck-150x150.jpg',
      'http://www.chinonthetank.com/wp-content/uploads/2013/04/1280px-Monster_mutt_truck-150x150.jpg',
      'https://www.rccaraction.com/wp-content/uploads/2014/08/KBHPClod-180x180.jpg',
      'https://games.torrentsnack.com/wp-content/uploads/2012/11/Monster-Jam-Path-of-Destruction-PS3-150x150.jpg',
      'https://carsintrend.com/wp-content/uploads/2017/10/2018-ford-f-250-features-150x150.jpg'
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
        <Score score={this.state.score} topScore={this.state.topScore} />
        {
          this.state.tiles.map((tile, idx) =>
            <Thumbnail
              src={tile} key={idx} onClick={this.handleTileClick}
            />)
        }

      </div>
    );
  }
}

export default App;
