import React, {Component} from "react";


class Gif extends Component {
  handleClick = (e) => {
    this.props.onGifClick(this.props.id);
  }
  render(){
  const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img onClick={this.handleClick} src={src} alt="" className="gif"/>
    )
  }
}

export default Gif;
