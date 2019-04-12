import React, { Component } from "react";
import ProfilePage from "./components/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ProfilePage />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
