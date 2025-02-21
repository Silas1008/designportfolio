import React from 'react'
import "./Kosha.css"
import koshabanner from './../../Assets/koshabanner.png'
import firstvideo from './../../Assets/About fast fashion.mp4'
import intro from './../../Assets/Intro.mp4'
import koshasolution from './../../Assets/Solutions.jpg'
import solutions1 from './../../Assets/Solutionpoints1.jpg'
import participants from './../../Assets/participants.jpg'
import painpoints from './../../Assets/Painpoints.jpg'
import donation from './../../Assets/donation.mp4'
import information from './../../Assets/Information Architecture.jpg'
import wireframe from './../../Assets/wireframe1.png'
import wireframe2 from './../../Assets/wireframe2.png'
import votes from './../../Assets/votes.jpg'
import socialmedia from './../../Assets/socialmedia.mp4'
import flows from './../../Assets/Userflows.jpg'



function Kosha() {
  return (
    <div className='kosha'>
      
     <div className="koshabanner">
            <h1>
            Kosha : The Sustainable Fashion Donation <br></br>Feature for Ajio - A case study
          </h1>
            <img src={koshabanner} alt="Koshabanner" />
            <ul>
              <li>Time frame - 2 months</li>
              <li>Company - Personal Project.</li>
              <li>My role - UX Researcher/Designer</li>
              <li>In UI collaboration with Aryaman</li>
            </ul>
    
            <p>
  <b>Kosha</b> is your way to make a difference—right from the Ajio app. We know how easy it is to accumulate clothes, shoes, accessories, and blankets that you no longer use. Instead of letting them sit unused or end up in landfills, why not give them a <b>second life</b>? With Kosha, donating is seamless, rewarding, and impactful.
  <br /><br />
  Our goal is simple: to make it effortless for you to pass on your <b>pre-loved fashion items</b> to those who need them most—while earning rewards for your generosity. By blending technology, convenience, and social impact, Kosha helps you be part of a more <b>sustainable fashion movement</b>.
</p>

          
          </div>

          <div className='introvideo'>
          <video width="70%" controls>
                    <source src={intro} type="video/mp4" />
                  </video>
          </div>
          
          <div className='koshaproblem'>
          <h4>Problem statement</h4>

          <p>
          The <b>fast fashion cycle</b> constantly pushes new trends, making it hard for buyers and fashion enthusiasts to resist updating their wardrobes. As a result, clothes, shoes, and accessories pile up quickly, often worn only a few times before being discarded. Many of these items end up in <b>landfills</b>, contributing to <b>massive textile waste</b> that harms the environment.
          <br /><br />
          Despite growing awareness of <b>fashion waste</b>, the process of donating still comes with challenges. People often don’t know <b>where or how to donate</b>, worry about whether their contributions will reach those in need, or simply don’t have the time to drop off items. Some organizations accept donations, but <b>accessibility, convenience, and transparency</b> remain barriers—leading many to throw away items that could still be used.
        </p>
        

          <video width="70%" controls>
                    <source src={firstvideo} type="video/mp4" />
                  </video>
          
          </div>

          <div className="userfindings">
          <h2>What were our findings?</h2>
          <div className='stickynotes'>
          <div className="container">
          <h5>Participant 1</h5>
            <p>
            Users see fast fashion as a way to explore new trends but worry about how discarded items are recycled or if they end up rotting in warehouses.
            </p>
          </div>
          <div className="container">
          <h5>Participant 2</h5>
            <p>
            Users say excessive fashion fuels waste, pollution, and overconsumption. They urge brands to prioritize sustainability through recycling and donations
            </p>
          </div>
          <div className="container">
          <h5>Participant 3</h5>
            <p>
            The main concern is underage worker exploitation in fashion. Users urge companies to adopt sustainable practices, such as donating or selling items at lower prices.
            </p>
          </div>
          </div>
        </div>

        <div className='koshasolutions'>
        <h4>What is the solution?</h4>
        <p>Six participants were interviewed to explore potential solutions to this issue. Through qualitative insights, they shared their perspectives on addressing the challenges, highlighting key strategies for promoting sustainability and ethical practices in the fashion industry.</p>

        <p>Research highlights the importance of consumer education in fostering sustainable fashion choices, as informed consumers are more likely to adopt responsible habits. Strategies like social media campaigns, influencer partnerships, and interactive tools effectively raise awareness. Ethical concerns, particularly underage labor, persist in the fashion industry, emphasizing the need for transparent supply chains and ethical production. Participants advocate for recycling initiatives, ethical sourcing, and donation or resale programs to combat waste and exploitation.</p>

        <img src={participants} alt="Koshabanner" style={{ width: "70%" }}/>
       <img src={koshasolution} alt="Koshabanner" />
        

        <p>Another key approach is circular fashion and retailer responsibility, where brands actively reduce waste. Take-back programs allow consumers to return used clothing for recycling, resale, or repair, while secondhand marketplaces and clothing rental services provide alternatives to fast fashion.</p>

        <img src={solutions1} alt="Koshabanner" style={{ width: "30%" }} />
        </div>

        <div className='how'>
        <h4>How might we?</h4>
        <h2>The biggest questions is How might the feature be of any help?</h2>
        <p><b>Kosha streamlines the donation process</b> by integrating it into the Ajio app, making giving as easy as shopping. Users can <b>schedule pickups or drop off items</b> with just a few taps, reducing fashion waste effortlessly. To encourage frequent donations, Kosha offers <b>Ajio Coins, discounts, and exclusive perks</b>, turning sustainability into a habit rather than a one-time action. <b>Transparency builds trust</b>, as users receive real-time updates on where their donations go, reinforcing the value of responsible fashion consumption. Beyond donations, Kosha <b>educates and inspires</b> users through stories, challenges, and leaderboards, encouraging mindful shopping and sustainable fashion choices.</p>

        <img src={painpoints} alt="Koshabanner"/>

        <p>According to participant interviews, key barriers prevent individuals from donating fashion items. <b>Lack of transparency</b> leaves donors unsure if their contributions reach those in need or are discarded, and the absence of tracking discourages participation.
        <b>Inaccessible donation centers</b> and <b>complex drop-off processes</b> make disposal the easier choice, keeping donating a low priority.
        
        Skepticism around <b>trust and transparency</b> also prevents donations, as many question whether items truly help or are resold. Without tracking and accountability, people hesitate to donate.</p>

                <video width="70%" controls>
                    <source src={donation} type="video/mp4" />
                  </video>
                </div>
        
                <div className='what'>
                <h4>The what</h4>
                <h2>What can be done?</h2>
                <p>Integrating donation features into an app like Ajio can simplify the process and boost participation. A dedicated hub can enable easy pickups, drop-offs, and real-time tracking for transparency. Rewards like Ajio Coins and discounts can incentivize donations, while educational content fosters long-term sustainability habits. Using an existing platform ensures accessibility and engagement.</p>
                </div>

               <div className='IA'>
               <p>After conducting research, we began working on how the structure would take shape and what features were necessary to address these concerns effectively. This involved identifying key pain points, ensuring accessibility, and integrating solutions seamlessly into existing user behaviors to create a practical and engaging approach to sustainable fashion.</p>
               </div>

               <img src={information} alt="Koshabanner"/>

               <div className='wireframe'>
               <h4>Wireframes</h4>
               <h2>Adding it together.</h2>
              <div className='wireframeimg'>
              <img src={wireframe} alt="Koshabanner" style={{ width: "50%" }}/>
              <img src={wireframe2} alt="Koshabanner" style={{ width: "50%" }}/>
              </div>
    
              <img src={votes} alt="Koshabanner" style={{ width: "50%" }}/>

              <p>Users often rely on Facebook and Instagram to find donation drives but struggle with unclear information on where donations go. To address this, a donation progress bar and notifications were added to confirm when contributions reach their destination.

              The solution was shaped by participant insights, with users voting on key features based on their pain points. This ensured the approach was both relevant and effective.
              
              People learn about donation opportunities through social media, retail stores, websites, and word of mouth, but many find existing options inconvenient and unclear. Integrating donations into an app provides better visibility and accessibility for users.</p>

              <video width="70%" controls>
              <source src={socialmedia} type="video/mp4" />
            </video>
              
               </div>

               <div className='userflows'>
               <h4>Userflows</h4>
               <h2>How we try to make it convenient?</h2>
               <img src={flows} alt="Koshabanner" style={{ width: "100%" }}/>
               </div>
    </div>
  )
}

export default Kosha

