
import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <div>
        <Navbar title="NewsToday"/>

        <Routes>
        <Route exact path="/" element= {<News key="a" category="business"/>} />
        <Route exact path="/sports" element={<News key="b"category="sports"/>}/>
        <Route exact path="/entertainment" element={<News key="c" category="entertainment"/>}/>
        <Route exact path="/health" element={<News key="d" category="health"/>}/>
        <Route exact path="/science" element={<News key="e"category="science"/>}/>
       
  
        </Routes>
    </div>

    </BrowserRouter>
    )
  }
}


