import React from 'react';
import './Home.css';
import sagefront from './../../Assets/sagefront.png';
import koshahome from './../../Assets/Koshahome.png';
import calcfront from './../../Assets/CalcMenu.png';
import Animations from '../../Pages/Animations/Animations';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Athiza Mei Romero</h1>
                <p>UX Designer & Researcher dedicated to creating thoughtful, user-centered experiences through innovation and data-driven insights.</p>
            </header>
            <section className="home-projects">
                <div className="project-cards">
                    <div className="project-card">
                        <div className='image'>
                            <img src={sagefront} alt='Sage E-commerce Project' />
                        </div>
                        <div className='intro'>
                            <h1>Sage E-commerce</h1>
                            <h3>UI/UX / Research / Wireframing</h3>
                            <p>Revitalizing Heritage: A Digital Renaissance for Traditional Makers of Lebanon - A case study</p>
                            <Link to="/case-study/sage">
                                <button className="btn">View Case Study</button>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className='image'>
                            <img src={koshahome} alt='Kosha project' />
                        </div>
                        <div className='intro'>
                            <h1>Kosha - by Ajio</h1>
                            <h3>UI/UX / Research / Redesign
                            </h3>
                            <p>This project is mere a proposal for adding a Feature to the existing Ajio app</p>
                            <Link to="/kosha">
                                <button className="btn">View Case Study</button>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className='image'>
                            <img src={calcfront} alt='CalcMenu Project' />
                        </div>
                        <div className='intro'>
                            <h1>CalcMenu</h1>
                            <h3>UI/UX / Research / Wireframing</h3>
                            <p>Improving the first-time user experience in the recipe section for CalcMenu - Redesign</p>
                            <Link to="/case-study/calcmenu">
                                <button className="btn">View Case Study</button>
                            </Link>
                        </div>
                    </div>

                    
                </div>
            </section>

            <section className='animations'>
                <Animations />
            </section>
        </div>
    );
};

export default Home;
