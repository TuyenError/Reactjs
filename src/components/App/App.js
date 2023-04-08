import logo from './pn-logo.png';
import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import ShowCard from '../Content/ShowCard/ShowCard';

class App1 extends Component {
  render() {
    return (
      <div>
        Happy Birthday Mr Tuyen
      </div>
    );
  }
}


var Three = () => {
  <div>
    <i> Tên là Timmy </i>
  </div>
}

var Two = function () {
  return (
    <div>
      <u> Tôi tên là Cao Tuyen</u>
    </div>
  )
}

function One() {
  return <div>Chào bạn</div>
}

function App() {
  return (
    <div id="container">
      <Header></Header>
      <Footer></Footer>
      <Content></Content>
    </div>
  );
}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Passerelles Numériques VietNam
      </header>
    </div>


export default App;
