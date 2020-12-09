import React, {Component} from 'react';
import './App.css'
import Header from "./components/header/Header";


class App extends Component {

  // state = {inputValue: ''}
  // setTitle = (value) => {
  //   this.setState({inputValue: value})
  // }

  render() {
    return (
        <div>
          <Header/>
          {/*{<input type="title" onChange={e => this.setTitle(e.target.value)}/>}*/}
        </div>
    );
  }
}

export default App;