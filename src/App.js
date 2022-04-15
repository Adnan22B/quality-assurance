import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ROUTES from "./routes"
import Header from "./components/Header"
import NewsLetter from "./components/NewsLetter"
import Footer from "./components/Footer"



function App() {
  return (
    <Router>
        <Header />
        <Routes>
          {ROUTES.map((item, index) => 
            <Route key={index} path={item.path} element = {<item.component />}  />
          )}
        </Routes>
        <NewsLetter />
        <Footer />
    </Router>
  );
}

export default App;
