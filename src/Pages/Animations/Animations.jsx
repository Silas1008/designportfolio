import React from 'react';
import './Animation.css';
import portfolio1 from "../../Assets/portfolio1.gif"; 
import portfolio2 from "../../Assets/portfolio2.png"; 
import portfolio3 from "../../Assets/portfolio3.gif"; 
import portfolio5 from "../../Assets/portfolio5.png"; 
import portfolio4 from "../../Assets/portfolio4.gif"; 
import portfolio6 from "../../Assets/portfolio6.png"; 

function Animations() {
  return (
    <div className='animations'>
      <div className='firstrow'>
        <div className='container'>
          <img
            className='image'
            src={portfolio1}
            alt="Portfolio Animation"
          />
        </div>
        <div className='container'>
          <img
            className='image'
            src={portfolio2}
            alt="Portfolio Animation"
          />
        </div>
        <div className='container'>
          <img
            className='image'
            src={portfolio3}
            alt="Portfolio Animation"
          />
        </div>
      </div>

      <div className='secondrow'>
        <div className='container'>
          <img
            className='image'
            src={portfolio5}
            alt="Portfolio Animation"
          />
        </div>
        <div className='container'>
          <img
            className='image'
            src={portfolio4}
            alt="Portfolio Animation"
          />
        </div>
        <div className='container'>
          <img
            className='image'
            src={portfolio6}
            alt="Portfolio Animation"
          />
        </div>
      </div>
    </div>
  );
}

export default Animations;
