import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Componenets/Navbar/Navbar.jsx";
import Footer from "./Componenets/Footer/Footer.jsx";
import Home from "./Componenets/Home/Home.jsx";
import Sage from "./Pages/Sage/Sage.jsx";
import Nicotrol from "./Pages/Nicotrol/Nicotrol.jsx";
import CalcMenu from './Pages/CalcMenu/CalcMenu';
import Jax from "./Pages/Jax/Jax.jsx";
import About from "./Pages/About/About.jsx";
import Animations from './Pages/Animations/Animations.jsx';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="animation" element={<Animations/>}/>
                    <Route path="/case-study/sage" element={<Sage />} />
                    <Route path="/case-study/nicotrol" element={<Nicotrol />} />
                    <Route path="/case-study/calcmenu" element={<CalcMenu />} />
                    <Route path="/case-study/jax" element={<Jax />} />
                </Routes>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;
