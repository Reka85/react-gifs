import React, {Component} from "react";
import Gif from "./Gif";

class GifList extends Component {
  handleClick = (gifId) => {
    this.props.handleClick(gifId);
  }
  renderGifs = () => {
    return this.props.gifs.map((gif) => {
      return <Gif onGifClick={this.handleClick} id={gif.id} key={gif.id}/>
    })
  }
  render(){
    return(
      <div className="gif-list">
        {this.renderGifs()}
      </div>
    )
  }
}

export default GifList;
