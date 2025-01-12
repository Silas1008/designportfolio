import React from 'react';
import './Home.css';
import sagefront from './../../Assets/sagefront.png';
import calcfront from './../../Assets/CalcMenu.png';
import jax from './../../Assets/jax.png';
import nicotrol from './../../Assets/nicotrol.png';
import Animations from '../../Pages/Animations/Animations';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Athiza Mei Romero</h1>
                <p>
                    I am a UI/UX designer who is curious about animations and enjoys the minimalistic designs that remain in this world.
                </p>
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
                            <img src={calcfront} alt='CalcMenu Project' />
                        </div>
                        <div className='intro'>
                            <h1>CalcMenu</h1>
                            <h3>UI/UX / Research / Wireframing</h3>
                            <p>Improving the first-time user experience in the recipe section for CalcMenu - A case study</p>
                            <Link to="/case-study/calcmenu">
                                <button className="btn">View Case Study</button>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className='image'>
                            <img src={jax} alt='Jax Project' style={{marginRight:'140px'}}/>
                        </div>
                        <div className='intro'>
                            <h1>Jax Online Services</h1>
                            <h3>UI/UX / Research / Wireframing</h3>
                            <p>Jax: Redefining Pet Care Services in India with User-Centric Design - A case study</p>
                            <Link to="/case-study/jax">
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
