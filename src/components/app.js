import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
    <div className="app-container">
      <div className="header">
        <h1>Project Carousels</h1>
        <a href="#fries">Fries</a>
        <a href="#navbar">Navbar</a>
        <a href="#diagrams">Diagrams</a>
      </div>
        <div className="slider-container">
          <div id="fries" className="slider-container__slider">
          <h2>Fries</h2>
            <div className="autoplay">
              <div><img src="/assets/Project1B.PNG"></img></div>
              <div><img src="/assets/Project1A.PNG"></img></div>
              <div><img src="/assets/Project1C.PNG"></img></div>
            </div>
          </div>

          <div id="navbar" className="slider-container__slider">
            <h2>Navbar</h2>
            <div className="single-item">
              <div><img src="/assets/Project2A.PNG"></img></div>
              <div><img src="/assets/Project2B.PNG"></img></div>
              <div><img src="/assets/Project2C.PNG"></img></div>
            </div>
          </div>

          <div id="diagrams" className="slider-container__slider">
            <h2>Diagrams</h2>
            <div className="multiple-items">
              <div><img src="/assets/Project3A.PNG"></img></div>
              <div><img src="/assets/Project3B.PNG"></img></div>
              <div><img src="/assets/Project3C.PNG"></img></div>
              <div><img src="/assets/Project3D.PNG"></img></div>
              <div><img src="/assets/Project3E.PNG"></img></div>
              <div><img src="/assets/Project3F.PNG"></img></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
