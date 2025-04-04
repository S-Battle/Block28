import {Route, Routes, Link } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Blue from './pages/Blue';
import Red from './pages/Red.';
import Purple from './pages/Purple';
import Black from './pages/Black';
import Green from './pages/Green';
function App() {
 

  return (
    <>

<div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/blue"} >Blue</Link>
          <Link to={"/red"} >Red</Link>
          <Link to={"/purple"} >Purple</Link>
          <Link to={"/black"} >Black</Link>
          <Link to={"/green"} >Green</Link>

      </div>
      <div id="main-section">
      <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/red" element={<Red />}></Route>
                <Route path="/blue" element={<Blue />}></Route>
                <Route path="/purple" element={<Purple />}></Route>
                <Route path="/black" element={<Black />}> </Route>
                <Route path="/green" element={<Green />}> </Route>
            </Routes>
      </div>
    </div>
     
    </>
  )
}

export default App
