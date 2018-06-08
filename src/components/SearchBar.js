import React, {Component} from "react";

class SearchBar extends Component {
  changeHandle = (e) => {
    this.props.search(e.target.value);
  }
  render(){
    return(
      <input onChange={this.changeHandle} className="form-control form-search" type="text"/>
    )
  }
}

export default SearchBar;
