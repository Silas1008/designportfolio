import "./Sage.css";
import sagebanner from "./../../Assets/sagebanner.png";
import statement1 from "./../../Assets/statement1image.png";
import statement2 from "./../../Assets/statement2image.png";
import statement3 from "./../../Assets/statement3image.png";
import flipkart from "./../../Assets/flipkart.png";
import myntra from "./../../Assets/myntra.png";
import amazon from "./../../Assets/amazon.png";
import ajio from "./../../Assets/ajio.png";
import interviews from "./../../Assets/interviews.png";
import iteration from "./../../Assets/iteration.png";
import changes1 from "./../../Assets/changes1.png";
import changesA from "./../../Assets/sagesplash.mp4";
import changes2 from "./../../Assets/changes2.png";
import changesB from "./../../Assets/sageproducts.mp4";
import changes3 from "./../../Assets/changes3.png";
import changesC from "./../../Assets/sagemenu.mp4";
import final1 from "./../../Assets/final1.png";
import final2 from "./../../Assets/final2.png";
import final3 from "./../../Assets/final3.png";
import final4 from "./../../Assets/final4.png";
import alignment from "./../../Assets/alignment.png"
import appreciation from "./../../Assets/appreciation.png"
import community from "./../../Assets/community.png"
import full from "./../../Assets/fullintro.mp4";


function Sage() {

  return (
    <div className="sage">

      <div className="sagetitle">
        <div className="sageheader">
          <h1>
            Revitalizing Heritage: A Digital Renaissance for Traditional Makers of Lebanon - A case study
          </h1>
        </div>
      </div>

      <div className="sagebanner">
        <img src={sagebanner} alt="Sage banner" />
        <ul>
          <li>Time frame - 3 months</li>
          <li>Company - Wonita Inc.</li>
          <li>My role - UI/UX Designer</li>
        </ul>
      </div>

      <div className="about">
        <h4>About Sage</h4>
        <p>
          Sage is an <b>e-commerce platform</b> that replicates a project I
          worked on <b>during my employment with an ongoing company</b>. Due to
          privacy and the current development stage of that company,{" "}
          <b>Sage serves as a showcase of my contributions</b> without revealing
          sensitive information. Through Sage, I aim to{" "}
          <b>demonstrate the design and development</b> solutions I implemented,
          including UX/UI strategies, product architecture, and overall platform
          functionality.
        </p>
      </div>

      <div className="problem">
        <h3>
          Absence from digital platforms and e-commerce, missing out on a vast
          consumer base that increasingly relies on online shopping.
        </h3>
        <p>
          <b>Declining sales</b> and market share due to the lack of digital
          presence. Limited access to the global market. <b>Difficulty in attracting</b>{" "}
          a new generation of employees. <b>Inability to keep pace with modern
            manufacturing technologies</b> and automation used by global
          competitors.
        </p>
      </div>

      <div className="mobileapp">
        <h2>If you’re in a hurry, here you go!</h2>
        <video width="280" controls>
          <source src={full} type="video/mp4" />
        </video>
      </div>

      <div className="problemsolution">
        <div className="problemhead">
          <h4 style={{ textAlign: 'left' }}>Problem</h4>
          <h2>The importance of this platform</h2>
        </div>
        <div className="statement1">
          <div className="first">
            <ul>
              <li>Increased Sales and Revenue:</li>
              <p>
                The implementation of the website and mobile app should lead to a
                noticeable uptick in sales. The convenience of onlineshopping and
                the appeal of the brand's heritage can attractboth existing and
                new customers.
              </p>
              <li>Global Market Presence:</li>
              <p>
                The digital platforms should facilitate the expansion of the
                company market to reach beyond local boundaries. Increasedvisibility
                on a global scale can open up new opportunities and customer bases.
              </p>

            </ul>

          </div>

          <div className="statement1image">
            <img src={statement1} alt="Statement 1" style={{ width: '250px' }} />
          </div>
        </div>

        <div className="statement2">
          <div className="statement2image">
            <img src={statement2} alt="Statement 2" style={{ width: '250px' }} />
          </div>
          <div className="second">
            <ul>
              <li>Search Functionality:</li>
              <p>
                Include a robust search feature to help users quickly find specific
                products.
              </p>
              <li>Contact and Support:</li>
              <p>
                Offer easy-to-find contact information and support options,
                encouraging customer inquiries and feedback.
              </p>
              <li>Brand Identity:</li>
              <p>
                Developing a compelling brand story that highlights the company's
                heritage and commitment to natural ingredients.Crafting a unique
                selling proposition (USP) that emphasizes authenticity.
              </p>
            </ul>
          </div>
        </div>

        <div className="statement3">
          <div className="third">
            <ul>
              <li>Search Functionality:</li>
              <p>
                Include a robust search feature to help users quickly find specific
                products.
              </p>
              <li>Contact and Support:</li>
              <p>
                Offer easy-to-find contact information and support options,
                encouraging customer inquiries and feedback.
              </p>
            </ul>
          </div>
          <div className="statement3image">
            <img src={statement3} alt="Statement 2" style={{ width: '250px' }} />
          </div>
        </div>
      </div>

      <div className="research">
        <h1>A 30% surge in sales, 40% global recognition boost, 50% brand visibility increase,25% growth in community engagement</h1>
        <p>During my research, I discovered that companies, including startups, gain recognition by introducing their brands to the market.This not only increases sales but also generates employment opportunities. Additionally, word of mouth plays a crucial role inenhancing brand visibility and success.</p>

        <p className="italic"><i>"Consumers are more inclined to purchase products when they resonate with a brand's values and authenticity. Trust is builtthrough transparent communication, quality offerings, and alignmentwith personal preferences. A genuine connectionbetween the brand and the consumer fosters loyalty,influencing purchasing decisions positively."</i></p>
      </div>

      <div className="analysis">
        <h3>The competitions focuses more on quantity than quality</h3>
        <p>The competition often prioritizes marketing over product quality, lacking the personalized, heritage-driven,and niche-focused charm embedded in a traditional maker's commitment to authenticity, cultural richness,and uncompromisingproduct excellence.</p>
        <div className="analysisimages">
          <img src={flipkart} alt="" />
          <img src={myntra} alt="" />
          <img src={amazon} alt="" />
          <img src={ajio} alt="" />
        </div>
      </div>

      <div className="interview">
        <h4>Consumer interviews</h4>
        <h3>Interview success is seen in aligned values, passion for tradition, interest in niche, sustainability awareness, and potential for brand advocacy.</h3>
        <p><b>Interview questions</b></p>
        <ul>
          <li>What attracts you to our traditional processes of the business, and how does it align with your values and preferences?</li>
          <li>Can you share your understanding of the traditional process and the significance of natural ingredients in beauty products?</li>
          <li>How do you envision contributing to or engaging with our community events and initiatives?</li>
          <li>What aspects of sustainability in product manufacturing are important to you, and how does this influence your product choices?</li>
          <li>In what ways do you appreciate personalized shopping experiences, and how does this influence your decision to choose certain beauty products?</li>
        </ul>
        {/* <img src={interviews} alt="" style={{ width: '900px' }} /> */}
        <img src={interviews} alt="" />
      </div>

      <div className="major">
        <h1>Major insights</h1>
      </div>
      <div className="insights">

        <div className="alignment" style={{ padding: '0 50px', textAlign: 'center' }}>
          <img src={alignment} alt="" style={{ width: '250px' }} />
          <h4>Strong Alignment with Values and beliefs:</h4>
          <p>The interviews reveal a consistent alignment between interviewees' values and the brand's ethos. This suggests a successful communication of the brand's unique values and an appeal to individuals who resonate with authenticity, tradition, and sustainability.</p>
        </div>

        <div className="appreciation" style={{ padding: '0 50px', textAlign: 'center' }}>
          <img src={appreciation} alt="" style={{ width: '250px', justifyContent: 'center' }} />
          <h4>Appreciation for Personalization and Niche Appeal:</h4>
          <p>The appreciation for personalized shopping experiences and interest in niche products underscore a market preference for unique, customized offerings. This insight suggests a potential competitive advantage in a market dominated by mass-market platforms that may lack this level of personalization and specificity.</p>
        </div>

        <div className="community" style={{ padding: '0 50px', textAlign: 'center' }}>
          <img src={community} alt="" style={{ width: '250px', justifyContent: 'center' }} />
          <h4>Community Engagement Potential:</h4>
          <p>Interview responses indicate a potential for robust community engagement. Individuals express an interest in contributing to and participating in community events and initiatives. This insight suggests an opportunity to build a vibrant community around the brand.</p>
        </div>
      </div>

      <div className="focus" style={{ padding: '50px 50px', textAlign: 'center', }}>
        <h2>What I had to focus on initially</h2>
        <p>In the initial week, I invested considerable time designing the app and website, mirroring existing market standards. However, I now recognize the need to shift focus towards comprehensive company research, delving into the process, and understanding the values that resonate with consumers This strategic pivot aims to prioritize authenticity and user-centricity, ensuring that the design not only aligns with market expectations but also encapsulates the essence of the company's heritage, processes, and the unique value it offers to consumers. This shift in approach aims for a more informed and resonant design strategy.</p>
      </div>

      <div className="itiration" style={{ textAlign: 'center', fontSize: '24px' }}>
        <h2>Iteration</h2>
        <img src={iteration} alt="" />
      </div>

      <div className="changes">
        <h2>Major changes in the design</h2>
        <p>There were many changes in the development of the app in the design aspect but here are the three majors ones</p>
        <div className="changes1">
          <div className="changesimages">
            <img src={changes1} alt="" style={{ height: '450px' }} />
            <video width="215" controls>
              <source src={changesA} type="video/mp4" />
            </video>
          </div>
          <div className="changes1text" style={{ paddingTop: '100px' }}>
            <h3>Changes 1</h3>
            <p>Designing the onboarding page to be visually appealing witheasily accessible options within reach of users' fingertips.</p>
          </div>
        </div>

        <div className="changes2">
          <div className="changes2text" style={{ paddingTop: '100px' }}>
            <h3>Changes 2</h3>
            <p>Changed the product display as it gave a more clutter lookfrom the previous design, the product image got largerand better shorter description</p>
          </div>

          <div className="changesimages">
            <video width="215" controls>
              <source src={changesB} type="video/mp4" />
            </video>
            <img src={changes2} alt="" style={{ height: '450px' }} />
          </div>
        </div>

        <div className="changes3" >

          <div className="changesimages">
            <img src={changes3} alt="" style={{ height: '450px' }} />
            <video width="215" controls>
              <source src={changesC} type="video/mp4" />
            </video>
          </div>
          <div className="changes3text" style={{ paddingTop: '100px' }}>
            <h3>Changes 3</h3>
            <p>Here the changes made were major as the call to action ismore easily accessible options within reach of usersremoved the carousel below and instead changed it to a slider</p>
          </div>

        </div>
      </div>

      <div className="finalscreens">
        <div className="finaltitle">
          <h2 style={{ margin: '30px 0' }}>Final Screens</h2>
        </div>
        <div className="finalimages">
          <img src={final1} alt="" />
          <img src={final2} alt="" />
          <img src={final3} alt="" />
          <img src={final4} alt="" />
        </div>
      </div>

      <div className="lessons">
        <h4>Lessons Learnt</h4>
        <h2>What I would do if I could start over</h2>
        <p>In conclusion, the initial focus on research, user-centric design, and a commitment to continuous learning can significantlyinfluence the success of UI/UX design. Adaptability and responsiveness to user feedback are key for refining the designiteratively and aligning it with both user expectations and the company's values.</p>
        <ul>
          <li>Prioritize Research and Values:</li>
          <p>Begin with comprehensive company research and understandingof product values before delving into design, ensuring authenticity andalignment with brand ethos.</p>

          <li>User-Centric Design:</li>
          <p>Focus on user-centricity by prioritizing easy access, visual appeal, and a seamless onboarding experience, acknowledging that user satisfaction is paramount.</p>

          <li>Balance Aesthetics and Functionality</li>
          <p>Striking the right balance between visual appeal and functionalityis crucial. Regularly seek and incorporate user feedback to refine the designiteratively.</p>
        </ul>

      </div>

      <div className="end">
        <h2 className="link">
          Link to Figma file <a href="https://www.figma.com/design/Mzzo6Y4bWylkhRu2hY5grW/Sage-ecommerce-mobile-application?node-id=183-4549&node-type=canvas&t=bdJjAX27vLYXESlT-0" target="_blank" rel="noopener noreferrer">link</a>
        </h2>
      </div>

    </div>
  );
}

export default Sage;
