import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import Overlay from '../Overlay/Overlay.js';
import Backdrop from '../../Images/index.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <aside className="leftColumn">
          <Navbar page="index" />
        </aside>
        <section className="centerColumn">
          <h1>Hello, my name is Inigo Montoya</h1>
          <p>You killed my father, prepare to die</p>
        </section>
        <aside className="rightColumn">
        </aside>
        <Overlay path={Backdrop} size="full"/>
      </main>
    );
  }
}

export default App;
