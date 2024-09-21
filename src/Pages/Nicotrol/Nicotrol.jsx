import "./NIcotrol.css"
import nicobanner from "./../../Assets/nicobanner.png"
import one1 from "./../../Assets/one1.png"
import two2 from "./../../Assets/two2.png"
import three3 from "./../../Assets/three3.png"
import four4 from "./../../Assets/four4.png"
import nicofirst from "./../../Assets/nicofirst.png"
import nicosecond from "./../../Assets/nicosecond.png"
import redesigned1 from "./../../Assets/redesigned1.png"
import redesigned2 from "./../../Assets/redesigned2.png"

const Nicotrol = () => {
  return (
    <div className="nicotrol">
      <div className="nicobanner">
      <h1>Redesigning the Nicotrol Website: A Case Study</h1>
      <img src={nicobanner} alt=""/>
      </div>

      <div className="nicoinfo">
      <ul>
        <li>Time frame - 3 months</li>
        <li>Company - Wonita Inc.</li>
        <li>My role - UI/UX Designer</li>
      </ul>
    </div>

    <div className="nicooverview">
    <h4>Overview</h4>
    <p>The <b>goal</b> of this project was to <b>redesign the Nicotrol website</b>, specifically the section that educates users on how to use the Nicotrol inhaler. The original website had an <b>outdated interface</b> and lacked clarity in its instructions, which could lead to <b>potential user confusion</b>.

    <b>This project was part of a user study I conducted during my internship at Fligno</b>, where I sought to create a modern, streamlined experience inspired by the clean and intuitive design of the Apple AirPods section.</p>
    </div>

    <div className="prostatement">
    <h4>Problem statement</h4>
    <h2>What is the issue?</h2>
    <p>The Nicotrol website's instructional section on using the inhaler was cluttered and outdated, which posed challenges for users, particularly those unfamiliar with the product.

    The design lacked clear visual hierarchy, and the navigation was unintuitive, making it difficult for users to find the information they needed.</p>

    <div className="problemcards">
    <div className="container" style={{backgroundColor:'#BDE7EE', height:'180px'}}>
    <h3>Outdated design</h3>
    <p> Aesthetically unappealing, with a poor use of white space and inconsistent typography.</p>
    </div>

    <div className="container" style={{backgroundColor:'#E7DDD1' , height:'180px'}}>
    <h3>Complicated 
    instructions</h3>
    <p>Text-heavy and difficult to follow, without any interactive or visual aids.</p>
    </div>

    <div className="container" style={{backgroundColor:'#BAC7DD', height:'180px'}}>
    <h3>Unintuitive 
    navigation</h3>
    <p>The flow was complex, and users had to sift through multiple pages to find relevant information.</p>
    </div>
    </div>
    </div>

    <div className="nicoprocess">
    <h4>Process</h4>
    </div>

    <div className="one1">
    <div className="1image">
    <img src={one1} alt=""/>
    </div>
    <div className="nicotext1">
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <h2 style={{ color: '#F7B41D', margin: 0, fontSize: '32px' }}>Research & Discovery</h2>
    <p style={{ marginLeft: '10px' }}>I began by conducting user research to understand the pain points of current and potential Nicotrol users.</p>
    </div>
    <div className="nicopara">
    <p>This includes:</p>
    <ul>
    <li><b>User Interviews:</b> Speaking with users about their experiences with the Nicotrol inhaler and the challenges they faced while using the website.</li>
    <li><b>Competitive Analysis:</b> Studying how other medical and tech websites present complex instructions (e.g., Apple's approach to simple and visually-driven instructions).</li>
    </ul>
    </div>
    </div>
    </div>

    <div className="nicoimages">
    <div className="nicoimages">
    <img src={nicofirst} alt="" style={{ backgroundColor: "#E8E2E0" }} />
    <img src={redesigned1} alt="" style={{ backgroundColor: "#AFC9DB" }} />
    </div>
    </div>

    <div className="one1">
    <div className="1image">
    <img src={two2} alt=""/>
    </div>
    <div className="nicotext1">
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <h2 style={{ color: '#F7B41D', margin: 0, fontSize: '32px' }}>Wireframes & Information Architecture</h2>
    <p style={{ marginLeft: '10px' }}> After gathering insights, I redesigned the information architecture to create a smoother navigation flow. The goal was to guide users from understanding the product to learning how to use it within fewer steps.</p>
    </div>
    <div className="nicopara">
    <p>This includes:</p>
    <ul>
    <li><b>Wireframes:</b>  Created low-fidelity wireframes to lay out the new structure, focusing on a cleaner layout with larger fonts, more white space, and prominent calls to action.
    </li>
    <li><b>User Flows:</b> Simplified the process of finding instructions, reducing the number of clicks and visual clutter.</li>
    </ul>
    </div>
    </div>
    </div>

    <div className="nicoimages">
    <div className="nicoimages">
    <img src={nicosecond} alt="" style={{ backgroundColor: "#E8E2E0" }} />
    <img src={redesigned2} alt="" style={{ backgroundColor: "#AFC9DB" }} />
    </div>
    </div>

    <div className="one1">
    <div className="1image">
    <img src={three3} alt=""/>
    </div>
    <div className="nicotext1">
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <h2 style={{ color: '#F7B41D', margin: 0, fontSize: '32px' }}>High-Fidelity Figma Designs</h2>
    <p style={{ marginLeft: '10px' }}> I translated the wireframes into high-fidelity designs that incorporated user feedback and a cohesive color palette to enhance usability and visual appeal.
   </p>
    </div>
    <div className="nicopara">
    <p>This includes:</p>
    <ul>
    <li><b>Modern UI elements</b> I used a minimalist color palette similar to Apple's, along with sleek, rounded buttons and smooth animations.
    </li>
    <li><b>Visual aids</b> I replaced text-heavy content with step-by-step visual instructions, using illustrations and short videos to demonstrate the inhaler usage process.</li>
    <li><b>Responsive design:</b> The layout was optimized for both desktop and mobile views to ensure usability across devices.</li>
    </ul>
    </div>
    </div>
    </div>

    <div className="nicoimages" style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="1000" height="600" src="https://embed.figma.com/proto/Y9MBnKv33WXcyC9reWktvr/Nicotrol?page-id=0%3A1&node-id=21-694&node-type=frame&viewport=243%2C785%2C0.19&scaling=scale-down&content-scaling=fixed&embed-host=share" allowFullScreen></iframe>
</div>



    <div className="one1">
    <div className="1image">
    <img src={four4} alt=""/>
    </div>
    <div className="nicotext1">
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <h2 style={{ color: '#F7B41D', margin: 0, fontSize: '32px' }}>Usability Testing with figma prototype</h2>
    <p style={{ marginLeft: '10px' }}>After completing the high-fidelity designs, I conducted usability testing to validate the effectiveness of the new design with the help of Figma Prototype. </p>
    </div>
    <div className="nicopara">
    <p>This includes:</p>
    <ul>
    <li>Users were asked to complete tasks such as finding inhaler usage instructions and navigating through product information.</li>
    </ul>
    </div>
    </div>
    </div>

    <div className="final">
    <h4>Key findings</h4>
    <h2>What were the changes after creating the prototype</h2>
    <ul>
    <li>Users found the visual instructions far easier to follow compared to text-based explanations.</li>
    <li>The simplified navigation reduced task completion time by 40%.</li>
    <li>Mobile responsiveness greatly improved user interaction on smaller screens.</li>
    </ul>

    <h4>Projection outcomes</h4>
    <h2>What we projected for this redesign outcome</h2>
    <p>The redesigned Nicotrol website successfully addressed the issues with the old layout. Users were able to quickly find and understand how to use the inhaler, thanks to the introduction of visuals and a clearer interface through the figma prototype. The modern look helped build trust and engagement, improving the overall experience for both new and existing users.</p>

    <h4>Reflection</h4>
    <h2>What I had learn redesigning the website</h2>
    <p>This project allowed me to apply my UX/UI design skills to a real-world product that helps people manage their health. By focusing on simplifying complex processes and improving accessibility, I learned how impactful thoughtful design can be, especially in the healthcare industry. Additionally, this redesign highlighted the importance of usability testing to validate design decisions and ensure a user-centered approach.</p>
    </div>

    <div className="thankyou" style={{margin: '100px 0'}}>
    <h2 style={{textAlign: 'center'}}>Thank you!</h2>
    </div>
    </div>
  )
}

export default Nicotrol
