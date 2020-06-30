import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import CourseStructure from './components/CourseStructure';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path ="/" component={Home}/>
      <Route path ="/:coursename" component={CourseStructure}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
