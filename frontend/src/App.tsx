import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="text-box">
                <h1>Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="turtle">
                <img src="./src/assets/turtle.png" alt="turtle" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App;
