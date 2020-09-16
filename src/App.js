import React, {Component} from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import './App.css';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        
          <NavBar/>

        <Footer/>
      </div>
    );
  }
}

export default App;
