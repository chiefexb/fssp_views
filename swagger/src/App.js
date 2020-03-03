import React, { Component } from 'react';
import logo from './logo.svg';


import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";



class App extends Component {
 
    
  render() {
      

    return (
      <div className="App">

          <SwaggerUI url="/swagger.yaml"  
 
 />
      </div>
    );
  }
}

export default App;
