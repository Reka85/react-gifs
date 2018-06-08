import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import GifList from "./GifList";

class App extends Component {
  search = (text) => {
    console.log(text);
  }
  render(){
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    )
  }
}

export default App;
