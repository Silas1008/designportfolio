import "./Jax.css"
import jaxbanner from "./../../Assets/jaxbanner.png"
import process from "./../../Assets/process.png";
import singlewalk from "./../../Assets/singlewalk.png";
import multiplewalk from "./../../Assets/multiplewalk.png";
import one from "./../../Assets/one.png"
import two from "./../../Assets/two.png"
import three from "./../../Assets/three.png";
import four from "./../../Assets/four.png"
import profile from "./../../Assets/profile.png"
import vet from "./../../Assets/vet.png"
import compete from "./../../Assets/compete.png"
import case1 from "./../../Assets/case1.png";
import case2 from "./../../Assets/case2.png";
import case3 from "./../../Assets/case3.png";

const Jax = () => {
  return (
    <div className='jax'>
    <div className="sageheader">
    <h1>
    A case study and app design, <br></br>Jax: Revolutionizing Pet Care Services for India's Pet Owners
    </h1>
  </div>

  <div className="jaxbanner">
  <img src={jaxbanner} alt=""/>
        <ul>
          <li>Time frame - 3 Months</li>
          <li>Kodego - Bootcamp project</li>
          <li>My role - UI/UX Designer - Frontend</li>
        </ul>
      </div>

      <div className="jaxintro">
      <h4>Reader's note</h4>
      <p>This is one of the projects that I had designed during my Bootcamp, the purpose of the project was to find a purpose for products that can help the users in a way or two in their daily lives.</p>
      </div>

      <div className="aboutjax">
      <h4>About Jax</h4>
      <p>When the <b>pandemic hit</b>, I found myself transitioning from working as an <b>assistant interior designer to walking dogs</b>. Living in a gated community in the heart of <b>Bangalore—an IT hub—pet ownership is incredibly common</b>. Out of every <b>10</b> people I met, <b>7</b> were working in IT, and <b>5</b> of those had <b>pets at home</b>. As a fellow pet owner, balancing work and caring for my dog became a <b>daily challenge</b>. This sparked the idea for Jax.

      During the pandemic, <b>pet owners were actively seeking services to care for their pets while they adjusted to the new normal of working from home</b>. With this shift, the demand for reliable pet services skyrocketed. Now, as remote work continues to grow, not everyone is fortunate enough to have their hands free to manage the needs of their pets. Jax was born to bridge that gap, providing services for those juggling work and pet care.</p>
      </div>

      <div className="process">
       <h4>The process</h4>
      <div className="processimg">
      <img src={process} alt=""/>
      </div>
      </div>

      <div className="prosol">
      <div className="container">
      <h4>The problem</h4>
      <h3>Lack of Reliable and Convenient Pet Care Services</h3>
      <p>Pet owners often struggle to find trustworthy and readily available services for dog walking, pet sitting, and vet appointments. This can lead to inconsistent care, last-minute hassles, or even safety concerns.</p>
      </div>

      <div className="container">
      <h4>The Solution</h4>
      <h3>Solution with Jax</h3>
      <p>Jax provides a reliable platform where users can easily book verified dog walkers, pet sitters, and vet appointments. The app ensures that all service providers are vetted, and users can view ratings and reviews before making a booking, offering peace of mind.</p>
      </div>
      </div>

      <div className="walking">
      <img src={singlewalk} alt=""/>
      <img src={multiplewalk} alt=""/>
      </div>

      <div className="targetusers">
      <h4>Target Users</h4>
      </div>

      <div className="users">
      <div className="top">
      <img src={one} alt=""/>
      <div className="mid">
      <p><b>Young professionals</b> who work long hours or travel frequently and require flexible, on-demand pet care options. Also, families who want safe and trusted services for their pets.</p>

      <p><b>Individuals living in cities or urban areas</b> who have busy lifestyles and need reliable services like dog walking, pet sitting, and vet appointments.</p>
      </div>
      <img src={two} alt=""/>
      </div>

      <div className="top">
      <img src={three} alt="" style={{width: '330px'}}/>
      <div className="mid">
      <p><b>Older adults </b>who may need assistance with physically demanding tasks like dog walking but still want to ensure their pets are well cared for.</p>

      <p><b>Users who need pet sitting</b> or boarding services while they are away, along with easy access to vet services and pet-friendly transport.</p>
      </div>
      <img src={four} alt=""/>
      </div>
      </div>

      <div className="prosol">
      <div className="container" style={{backgroundColor: '#FFF1DD'}}>
      <h4>The problem</h4>
      <h3>Difficulty in Managing Pet Health and Appointments</h3>
      <p>Managing a pet’s health records, vet appointments, and reminders can be cumbersome. Many pet owners forget important vet visits or lose track of their pet's medical history, leading to poor health management.</p>
      </div>

      <div className="container" style={{backgroundColor: '#FFF1DD'}}>
      <h4>The Solution</h4>
      <h3>Solution with Jax</h3>
      <p>Jax offers a centralized system for storing vet records, scheduling appointments, and receiving timely notifications. This helps pet owners keep track of their pets' health in an organized and efficient way, all through a single app.</p>
      </div>
      </div>

      <div className="vet">
      <img src={profile} alt=""/>
      <img src={vet} alt=""/>
      </div>

      <div className="market">
      <h4>Market Research and Insights</h4>
      <h2>Overview of the Indian Pet Care Market:</h2>
      <p>The Indian pet care market is rapidly expanding, valued at INR X billion in 2023 and expected to grow at a CAGR of X% over the next five years. Growth drivers include rising pet ownership and increasing spending on pet care.</p>

      <h2>User Behavior and Trends:</h2>
      <p>Pet ownership is primarily urban, with a trend towards digital solutions for pet care. The majority of pet owners are aged 25-40, seeking convenience through apps for services like dog walking and vet appointments.</p>

      <h2>Existing Gaps and Pain Points:</h2>
      <p>Pet owners struggle with fragmented services and managing pet health records. Current solutions often offer only single services, creating a gap for a comprehensive platform.</p>

      <h2>Market Opportunities:</h2>
      <p>There are opportunities in underserved regions and among tech-savvy pet owners. Jax can capitalize on the growing trend of smart pet care solutions.</p>
      </div>

      <div className="competion">
      <h4>Competitor Analysis:</h4>
      <p>Major competitors include

      Jax stands out by integrating multiple services into one app, offering unique features like real-time tracking and vet records management.</p>

     <div className="spot">
     <img src={compete} alt=""/>
     </div>
      </div>

      <div className="cases">
      <h4>Use Cases</h4>
      <div className="case">
      <h3>Booking a Dog Walker for a Busy Professional</h3>
      <div className="case1">
      <img src={case1} alt=""/>
     <div>
     <p><b>User:</b> A young urban professional with a demanding job.</p>
     <p><b>Scenario:</b> The user has back-to-back meetings and cannot take their dog for a walk during lunch break.</p> 
     <p><b>Action:</b> The user opens the Jax app, selects "Book a Dog Walker," chooses a nearby available walker, checks their profile and reviews, and confirms the booking.</p>
     <p><b>Outcome:</b> The user receives a notification when the walk starts and can track the dog's location in real-time using the AirTag feature on the app. After the walk, they receive a summary with the route and duration, giving them peace of mind.</p>
     </div>
      </div>
      </div>


      <div className="case">
      <h3>Managing Vet Appointments for a Millennial Pet Owner</h3>
      <div className="case2">
      <img src={case2} alt=""/>
     <div>
     <p><b>User:</b>  A millennial who likes to stay organized and digital.</p>
     <p><b>Scenario:</b> The user's cat has a scheduled vet appointment, and they want to avoid the hassle of remembering the date and paperwork.</p> 
     <p><b>Action:</b>  The user opens the Jax app, navigates to "Vet Appointments," checks upcoming appointments, and confirms the details. They can also view and download their cat’s medical records directly from the app.
     </p>
     <p><b>Outcome:</b> The app sends a reminder notification a day before the appointment, ensuring the user is prepared. The user shows up at the vet with all the necessary records easily accessible on their phone.</p>
     </div>
      </div>
      </div>

      <div className="case">
      <h3>Finding Pet-Friendly Places for a Frequent Traveler</h3>
      <div className="case3">
      <img src={case3} alt=""/>
     <div>
     <p><b>User:</b> A pet owner who travels frequently and likes to take their dog along.</p>
     <p><b>Scenario:</b> The user is planning a weekend trip and wants to find pet-friendly cafes, restaurants, and transportation options in a new city.</p> 
     <p><b>Action:</b> The user opens the Jax app, selects "Pet-Friendly Places," filters the options by location, and browses a list of vetted pet-friendly cafes, restaurants, and cab services.
     </p>
     <p><b>Outcome:</b> The user plans a trip with ease, knowing exactly where they can take their dog and how to get around, making their travel experience stress-free and enjoyable.</p>
     </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Jax;
