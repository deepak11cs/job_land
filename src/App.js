import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Jobboard from './components/Jobboard';

class App extends React.Component {
 

  render(){
    return (
      <div className="container">
        <Navbar />
        <div id="main">
          <Banner />
          <Jobboard />
        </div>
      </div>
    );
  }
  
}

export default App;
