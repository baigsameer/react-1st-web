import React from "react";
import Nav from "./Components/Nav";
import Main from './Components/Main'
import Main2 from './Components/Main2'
import Footer from "./Components/Footer";
import "./Components/Navb.css"
function App() {
  return (
      <>
     <Nav></Nav>
    <Main></Main>
    <div>
      <h2 className="about">ABOUT</h2>
    </div>
    <Main2></Main2>
    <Footer></Footer>
      </>
  );
}

export default App;
