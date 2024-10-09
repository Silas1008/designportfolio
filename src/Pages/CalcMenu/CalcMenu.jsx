import "./CalcMenu.css"
import calcbanner from "./../../Assets/calcbanner.png";
import steps from "./../../Assets/calcsteps.png"
import designproblem from "./../../Assets/designproblem.png"
import designsolutions from "./../../Assets/designsolutions.png"
import open from "./../../Assets/open.png"
import slide from "./../../Assets/slide.png"
import giffy from "./../../Assets/calcrecordings.mp4"
import left from "./../../Assets/left.png"
import right from "./../../Assets/right.png"
import mobilerecordings from "./../../Assets/mobilerecordings.mp4"
import mobilechallenges from "./../../Assets/mobilechallenges.mp4"
import lefttake from "./../../Assets/buttons.png"
import allergens from "./../../Assets/allergens.png";

const CalcMenu = () => {
  return (
    <div className="calcmenu">
      <div className="calctitle">
        <div className="calcheader">
          <h1>
          Improving the first time user experience  <br></br>tabs in the recipe section for CalcMenu - A Case study
          </h1>
        </div>

        <div className="calcbanner">
      <img src={calcbanner} alt="calcbanner"/>
      <ul>
        <li>Time frame - 2 weeks</li>
        <li>Company - CalcMenu</li>
        <li>My role - UI/UX Designer</li>
      </ul>
    </div>
      </div>

      

    <div className="calcintro">
    <h4>Intro</h4>
    <p>Let me walk you through my process of <b>redesigning</b> the allergens tab in the <b>recipe section of CalcMenu</b>, a feature that helps users update ingredient-based allergens in their recipes.</p>

    <div className="aboutcalc">
    <h2>About CalcMenu</h2>
    <p>CalcMenu is a specialized software solution designed for professionals in the food and hospitality industry. It offers comprehensive tools for creating, managing, and standardizing recipes while ensuring nutritional accuracy and compliance with dietary regulations. The platform allows users to meticulously track and update ingredient details, including nutritional values, costs, and allergens. This ensures that recipes are not only consistent but also meet the specific needs of customers with dietary restrictions. CalcMenu is an essential tool for chefs, nutritionists, and food service managers who prioritize efficiency, precision, and the safety of their clientele.</p>
    </div>
    </div>

    

    <div className="calctarget">
    <h4>Target users</h4>
    <h2>The target users for the allergens tab in the recipe <br></br>section of CalcMenu primarily include:</h2>
    <ul>
    <li>Chefs and Culinary Professionals:</li>
    <p>Ensure recipes meet dietary needs and are safe for customers with food allergies.
    </p>
    <li>Nutritionists and Dietitians:</li>
    <p>Verify recipes comply with dietary guidelines and allergen restrictions.</p>
    <li>Food Service Managers:</li>
    <p>Oversee menu planning and ensure recipes are accurately labeled with allergen information.
    <li>Restaurant Owners and Operators:</li>
    <p>Maintain consistency in recipes to keep dishes safe for customers with allergies, reducing risk and liability.</p>
    <li>Catering Services:</li>
    <p>Customize menus to accommodate diverse dietary needs, especially for groups with specific allergen concerns.</p>
    </p>
    </ul>
    </div>

    <div className="calcsteps">
    <img src={steps} alt="" style={{width: '350px'}}/>
    </div>

    <div className="designproblem">
    <h4>Design problem</h4>
    <h2>What the layout looked like.</h2>
    <p>So the design problem was that users were unable to update the ingredients in the allergens section, which was a hassle for a lot of users. There were ingredients that were tagged as traces, and users wanted to change them.</p>
    <img src={designproblem} alt="" style={{width: '1000px', padding:'50px 50px 50px 50px', backgroundColor: 'gray'}}/>
    </div>

    <div className="designsolutions">
    <h4>Design Solutions</h4>
    <h2>Design Solutions</h2>
    <p>So the design problem was that users were unable to update the ingredients in the allergens section, which was a hassle for a lot of users. There were ingredients that were tagged as traces, and users wanted to change them.</p>
    <img src={designsolutions} alt="" style={{width: '1000px', padding:'50px 50px 50px 50px', backgroundColor: '#F3EFD5'}}/>
    </div>
    <div className="solutions">
    <h4>Solutions</h4>
    <h2>Solution 1 Adding action buttons</h2>
    <img src={open} alt="" style={{width: '1000px', padding:'50px 50px 50px 50px', backgroundColor: '#F3EFD5'}}/>
    </div>
    <div className="approvable">
    <h2>Solution 2 Adding action buttons</h2>
    <p>Buttons grayed out indicating the users have approved of the changes thay have made this is a reversable action</p>
    <img src={slide} alt="" style={{width: '1000px', padding:'50px 50px 50px 50px', backgroundColor: '#F3EFD5'}}/>
    </div>

    <div className="importanceof">
    <h2>Importance of the allergens section</h2>
    <ul>
    <li>Allergens Tab Overview</li>
    <li>Managing Allergens Information</li>
    <li>Regulatory Compliance</li>
    <li>Nutritional Analysis Integration</li>
    <li>Effect on Menu Transparency</li>
    </ul>
    </div>
    <div className="understanding">
    <h2>Understanding the change</h2>
    <p>With <b>more than 100 users</b> and <b>multinational users accessing Calcmenu on a daily basis</b>, it needs to perform in a user-friendly manner to ensure it is easy to use for everyone. In the older design, we had a collapsible section with a default two-column layout instead of three. Although the middle column was used to update the ingredients, we designed it so users could still view the contents and traces in the third column.</p>
    <div className="giffy" style={{width: '1000px', padding:'50px 50px 50px 50px', backgroundColor: '#F3EFD5'}}>
    <video width="1000" controls>
    <source src={giffy} type="video/mp4"/>
    </video>
    </div>

    <div className="explaination">
    <h2>What are the other changes and why?</h2>
   <div className="middle">
   <div className="left">
   <p>We also decided to add an icon that indicates the data is not yet complete. This icon serves as a visual cue for users, helping them easily identify sections that require additional input or validation before proceeding. By integrating this feature, we aim to enhance user experience by reducing confusion and guiding users through the completion process</p>
   <img src={left} alt=""/>
   </div>

   <div className="right">
   <p>And since many users have access to other accessible recipes, any changes they make would be recorded in the activity column. This feature not only helps users keep track of their modifications but also fosters a collaborative environment where users can view each other's contributions and enhancements. By documenting these changes, we aim to promote transparency and encourage users to engage more with the platform, ultimately leading to a richer community experience.</p>
   <img src={right} alt=""/>
   </div>
   </div>
   <div>
   <p>The changes we implemented were designed to make it easier for users to make updates more efficiently, with less typing, fewer clicks, and more information. This is important as users will also need to update changes across other recipes</p>
   </div>
   </div>
    </div>

    <div className="challenges">
    <h2>Challenge in designing mobile view</h2>
    <p>The challenge we faced was designing the mobile view. Clients and users wanted the buttons to be easily accessible, either directly under or next to the allergens. This was challenging because we had to ensure that the buttons were pressable and functional for all users, while maintaining proper spacing and alignment, similar to the desktop view.</p>
    </div>

    <div className="mobilechallenges">
    <div className="whole">
    <h2>Mobile design challenges</h2>

    <div className="up">
    <div className="container" style={{ backgroundColor: '#C5EAFB', padding:'15px'}}>
    <h4>Button Accessibility</h4>
    <p>Clients and users requested that the update buttons be easily accessible, positioned either directly under or next to the allergens in the mobile view. This requirement added complexity to the design.</p>
    </div>

    <div className="container" style={{ backgroundColor: '#FAE6D8' ,padding:'15px' }}>
    <h4>Spacing and Alignment</h4>
    <p>Proper spacing and alignment of buttons in the mobile view had to be maintained. The design needed to ensure that buttons did not overlap or become misaligned, which required careful consideration of layout adjustments.</p>
    </div>
    </div>

    <div className="down">
    <div className="container" style={{ backgroundColor: '#B8B0D8' ,padding:'15px' }}>
    <h4>Consistency with Desktop View</h4>
    <p>The mobile design had to be consistent with the desktop view in terms of functionality and user experience. This involved translating a layout that worked well on larger screens to a more compact mobile interface.</p>
    
    </div>

    <div className="container" style={{ backgroundColor: '#88A4D6',padding:'15px'  }}>
    <h4>Usability Across Devices</h4>
    <p>The solution needed to be user-friendly across different mobile devices and screen sizes, ensuring that the buttons were easily accessible and usable for all users.</p>
    </div>
    </div>
    </div>
    <div className="mobilescreens">
    <video width="280" controls>
    <source src={mobilechallenges} type="video/mp4"/>
    </video>
    </div>
    </div>

    <div className="mobilechallenges">
    <div className="mobilescreens">
    <video width="280" controls>
    <source src={mobilerecordings} type="video/mp4"/>
    </video>
    </div>
    <div className="whole">
    <h2>Mobile design solutions</h2>
    <div className="up">
    <div className="container" style={{ backgroundColor: '#C5EAFB' ,padding:'15px' }}>
    <h4>Optimized Button Placement</h4>
    <p>To address accessibility, we positioned the update buttons directly under or next to the allergens. This placement was designed to ensure that users could easily find and interact with the buttons on mobile devices.</p>
    </div>

    <div className="container" style={{ backgroundColor: '#FAE6D8',padding:'15px'  }}>
    <h4>Responsive Layout Adjustments</h4>
    <p>We made responsive adjustments to the layout to maintain proper spacing and alignment. This included using flexible grid systems and media queries to adapt the design to different screen sizes while keeping the interface clean and organized.</p>
    </div>
    </div>

    <div className="down">
    <div className="container" style={{ backgroundColor: '#B8B0D8' ,padding:'15px' }}>
    <h4>Consistent User Experience</h4>
    <p>We ensured that the mobile design mirrored the desktop view’s functionality and aesthetics. By maintaining consistent design elements and interactions, users experienced a seamless transition between devices.</p>
    
    </div>

    <div className="container" style={{ backgroundColor: '#88A4D6' ,padding:'15px' }}>
    <h4>Cross-Device Usability Testing</h4>
    <p>We conducted extensive testing across various mobile devices and screen sizes to verify that the design was functional and user-friendly. This testing helped identify and resolve any issues with button accessibility and usability.</p>
    </div>
    </div>
    </div>
    </div>
<div className="takeaways">
<h2 style={{textAlign: 'center'}}>Key Takeaways</h2>
      <div className="key">
      <div className="lefttake">
     <div>
     <h3>Functionality Consistency:</h3>
     <p>Maintaining consistency between desktop and mobile views helps users transition seamlessly between devices and ensures that core functionalities remain intuitive.</p>
     </div>
      <div className="leftimage">
      <img src={lefttake} alt=""/>
      </div>
      </div>
      <div className="righttake">
      <div>
      <h3>User-Centric Design: </h3>
      <p>Positioning buttons in easily accessible locations and ensuring touch-friendly interactions are crucial for a positive mobile user experience.</p>
      </div>
      <div>
      <img src={allergens} alt="" style={{width:'200px'}}/>
      </div>
      </div>
      </div>
      
</div>

<div className="conclusions">
<h2 style={{textAlign:'center'}}>Conclusions</h2>
<p>The redesign successfully addressed the challenges of optimizing the mobile view for allergen updates. By positioning the update buttons directly under or next to the allergens, we ensured ease of access for users. The touch-friendly design and responsive layout adjustments improved usability across different devices, maintaining a consistent experience with the desktop view. Through comprehensive cross-device usability testing, we confirmed that the redesigned interface is both functional and user-friendly, meeting the needs of a diverse user base and enhancing overall efficiency in managing recipe updates.</p>
</div>

<div>
    <h2 style={{textAlign: 'center'}}>Thank you!</h2>
    </div>
    </div>
  )
}

export default CalcMenu
