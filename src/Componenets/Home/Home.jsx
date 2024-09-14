import React from 'react';
import './Home.css'; 
import sagefront from './../../Assets/sagefront.png'; 
import calcfront from './../../Assets/CalcMenu.png'; 
import jax from './../../Assets/jax.png';
import nicotrol from './../../Assets/nicotrol.png';  
import Animations from '../../Pages/Animations/Animations';


const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Athiza Mei Romero</h1>
                <p>I am a UI/UX designer who is curious about animations and enjoys the minimalistic designs that remain in this world.</p>
            </header>
            <section className="home-projects">
                <div className="project-cards">
                    <div className="project-card">
                        <div className='image'>
                        <img src={sagefront} alt='Project 1' />
                        </div>
                       <div className='intro'>
                       <h1>Sage E-commerce</h1>
                       <h3> UI/ UX / Research / Wireframing</h3>
                       <p>Revitalizing Heritage: A Digital Renaissance for Traditional Makers of Lebanon - A case study</p>
                       <button className="btn">View Case Study</button>
                       </div>
                    </div>

                    <div className="project-card">
                        <div className='image'>
                        <img src={calcfront} alt='Project 1' />
                        </div>
                       <div className='intro'>
                       <h1>CalcMenu</h1>
                       <h3>  UI/ UX / Research / Wireframing</h3>
                       <p>Improving the first time user experience  tabs in the recipe section for CalcMenu - A Case study</p>
                       <button className="btn">View Case Study</button>
                       </div>
                    </div>

                    <div className="project-card">
                        <div className='image'>
                        <img src={jax} alt='Project 1' />
                        </div>
                       <div className='intro'>
                       <h1>Jax online services</h1>
                       <h3> UI/ UX / Research / Wireframing</h3>
                       <p>Jax:Redefining Pet Care Services in India with User-Centric Design - A case study</p>
                       <button className="btn">View Case Study</button>
                       </div>
                    </div>

                    <div className="project-card">
                        <div className='image'>
                        <img src={nicotrol} alt='Project 1' />
                        </div>
                       <div className='intro'>
                       <h1>Nicotrol</h1>
                       <h3> Internship</h3>
                       <p>Redesigning the Nicotrol Website: A Case Study Focused on Enhancing User Experience of the guide </p>
                       <button className="btn">View Case Study</button>
                       </div>
                    </div>
                  </div>
            </section>

            <section className='animations'>
            <Animations/>
            </section>
        </div>
    );
};

export default Home;
