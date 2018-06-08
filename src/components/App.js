import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import Gif from "./Gif";
import giphy from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "ri7xbZaJGVsys"
    }
  }

  search = (text) => {
    giphy("Hv6dMJoJq8x7GRwGOTfk4fTaZf038wVv").search({
      q: text,
      rating: 'g',
      limit: 10
    }, (err, res) => {
        this.setState({
          gifs: res.data
        });
    });
  }

  handleGifClick = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  render(){
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} handleClick={this.handleGifClick}/>
        </div>
      </div>
    )
  }
}

export default App;
