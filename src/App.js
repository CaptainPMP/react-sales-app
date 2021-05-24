import React from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import CourseSales from './CourseSales'

class App extends React.Component {
  render() {

    var courses = [
      {name: 'HTML&CSS', price: 3500, duration: "Five days a week for 1 month."},
      {name: 'PSD TO HTML', price: 2500, duration: "Five days a week for 1 month."},
      {name: 'JAVASCRIPT', price: 3500, duration: "Five days a week for 1 month."},
      {name: 'PHP&MYSQL', price: 3500, duration: "Five days a week for 1 month."}
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to CaptainPMP shop</h2>
          <p>See our Available courses below.</p>
        </div>
        <CourseSales items={courses}/>
      </div>
      
    );
  }
}

export default App;
