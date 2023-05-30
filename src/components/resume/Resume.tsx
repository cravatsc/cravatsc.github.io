import './resume-style.css'
import './resume-print.css'

const Resume: React.FC = () => {
  return (
      <div>
        <title>Craig Cravath - Resume</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="The Resume of Craig Cravath." />
        <meta charSet="UTF-8" /> 
        {/* <link type="text/css" rel="stylesheet" href="resume-style.css" />
        <link type="text/css" rel="stylesheet" href="resume-print.css" media="print" /> */}
        <link href="http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300" rel="stylesheet" type="text/css" />
        {/*[if lt IE 9]>

<![endif]*/}
        <div id="cv" className="instaFade">
          <div className="mainDetails">
            <div id="headshot" className="quickFade">
              <img src="photo.jpg" alt="Craig Cravath" />
            </div>
            <div id="name">
              <h1 className="quickFade delayTwo">Craig Cravath</h1>   
              <h2 className="quickFade delayThree">Software Engineer</h2>
            </div>
            <div id="contactDetails" className="quickFade delayFour">
              <ul>
                <li>e: <a href="mailto:craigcravath@gmail.com" target="_blank">craigcravath@gmail.com</a></li>
                {/*<li>w: <a href="http://www.bloggs.com">www.bloggs.com</a></li>*/}
                <li>m: 240·338·2222</li>
                <li>a: 4415 Valley Forge Rd</li>
                <li>Durham, NC·27705</li>
                <li className="printView">github.com/cravatsc</li>
                {/* need to adjust so the urls show in print preview */}
                <li className="printView">www.linkedin.com/in/craig-cravath/</li>
                <li className="online"><a href="https://github.com/cravatsc"><img src="./github.png" alt="github" /></a>
                  <a href="https://www.linkedin.com/in/craig-cravath/"><img src="linkedin.png" alt="linkedin" /></a></li>
              </ul>
            </div>
            <div className="clear" />
          </div>
          <div id="mainArea" className="quickFade delayFive">
            <section>
              <div className="sectionTitle">
                <h1>Work Experience</h1>
              </div>
              <div className="sectionContent">
                <article>
                  <h2><span className="company">Fannie Mae</span>·<span className="title">Software Engineer</span></h2>
                  <p className="subDetails">October 2013 - Present</p>
                  <ul className="jobDetails">
                    <li>Lead developer on an Agile team executing full stack web development. Primary focusing is on transitioning a monolith application to a set of cloud ready microservices. Microservices build on Spring Boot with the following implementation details.</li>
                    <ul className="subList">
                      <li>Netflix Stack</li>
                      <li>Micro Batch</li>
                      <li>Service to Service Communication</li>
                      <li>Fault Tolerance</li>
                      <li>API Gateways</li>
                      <li>Service Discovery/Registry</li>
                      <li>Spring Cloud</li>
                      <li>Spring JPA</li>
                    </ul>
                    <li>Implemented various system upgrades - Java 8, Gradle adoption with custom Gradle commands to streamline and standardize microservice development, GitOps adoption with custom configuration management implementation.</li>
                    <li>Developed and documented external facing APIs using Swagger UI and a custom implemented microservice orchestrator to allow multiple versions of the service to run in parallel.</li>
                    <li>Perform code reviews to ensure consistency and quality by implementing clean, effective code.</li>
                    <li>Developed daily pricing file publishes to AWS - S3, Lambda, and SNS notifications.</li>
                    <li>Spearheaded the adoption of the Agile development methodology.</li>
                    <li>Integration and unit code using JUnit 5 and Karate for technical and business driven test cases.</li>
                    <li>Build Fannie Mae's brand as a technology company to attract new talent by showcasing our technology work at hackathons and recruiting events.</li>
                    <li>Established a new developer immersion program to facilitate the transition from school to a professional development environment.</li>
                    <li>Developed a reusable java library to centralize service to service OAuth authentication.</li>
                    <li>Assisted with the transition of outdated UI framework to a component based React.js framework.</li>
                    <li>Participated in Fannie Mae company hackathons - Reactive UI using web sockets and distributed transactions across multiple AWS services.</li>
                  </ul>
                </article>
                <article>
                  <h2><span className="company">Fannie Mae</span>·<span className="title">Financial Analyst</span></h2>
                  <p className="subDetails">August 2012 - October 2013</p>
                  <p>Responsible for gathering and documenting business and data requirements for a system implementation project.</p>
                </article>
              </div>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Key Skills</h1>
              </div>
              <div className="sectionContent">
                <ul className="keySkills">
                  <li>Java</li>
                  <li>Java/TypeScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Spring</li>
                  <li>Hibernate</li>
                  <li>GIT</li>
                  <li>GitHub Actions</li>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Cloud Native Architecture</li>
                  <li>React</li>
                  <li>Atlassian Tool Suite</li>
                </ul>
              </div>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Education</h1>
              </div>
              <div className="sectionContent">
                <article>
                  <h2>North Carolina State University</h2>
                  <p className="subDetails">M.S. in Computer Science</p>
                </article>
                <article>
                  <h2>James Madison University</h2>
                  <p className="subDetails">B.B.A. Double Major in Finance and Computer Information Systems</p>
                </article>
              </div>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Recognition</h1>
              </div>
              <div className="sectionContent">
                <p>Fannie Mae representative on “Rising Technology Talent” panel at the Fannie Mae Diversity &amp; Inclusion Technology Forum</p>
                <p>Scrum Master Certified - ScrumStudy</p>
              </div>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Interests</h1>
              </div>
              <div className="sectionContent">
                <p>Rock Climbing, Golf, Camping, Pottery, Swimming</p>
              </div>
              <div className="clear" />
            </section>
          </div>
        </div>
        {/*
*/}
      </div>
    );
}

export default Resume;