
import {useEffect } from 'react';
import './App.css';
import Contact from './contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';



import AOS from 'aos';
import 'aos/dist/aos.css';   // ✅ must import the CSS
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-out',
    });
  }
)  
  return (
    <div className='app'>
      <div className="hero">
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand brand_name" href="#home">Selehadin Abebe</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mx-2"><a className="nav-link" href="#home">Home</a></li>
                <li className="nav-item mx-2"><a className="nav-link" href="#skills">Skills</a></li>
                <li className="nav-item mx-2"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item mx-2"><a className="nav-link" href="#contact">Contact Me</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id= "home" className= "row justify-content-center hero_2">
        <div data-aos= "slide-right" className= " text-side-left col-lg-5 col-md-6 col-sm-12">
          <div className = "personal d-flex flex-column mt-5 pt-5">
            <span className ="I_text ">
              Hello, I am <span className= "name">Selehadin Abebe</span>
            </span>
            <span className='adjective py-2'>💻 Passionate Coder</span>
            <span className='overview'> a computer science student focused on 
               front-end and back-end development, always eager to learn and create.
            </span>
            <div className= "btns d-flex flex-row justify-content-center mt-5">
              <a href="#contact" className='btn_1'> Hire Me </a>
              <a href= "/resume/resume.pdf" className='btn_2'>Get Resume</a>
            </div>
          </div>
        </div>
        <div  data-aos= "slide-left" className='picture col-lg-5 col-md-6 col-sm-12'>
          <div className='d-flex justify-content-center custom-div-outer-img'>
               <img className='img-fluid pic py-5' alt = "heroimage" src ='/images/hero_image.jpg'></img>
          </div>
        </div>
      </div>

      <div data-aos= "zoom-in" id="skills" className="skills-section my-5">
        <div className="text-center mb-4">
          <span className="about-me-text">Technical Skills</span>
          <span className="why-text-sub d-block">What I work with</span>
        </div>

        <div className="row justify-content-center text-center">
          {/* Frontend */}
          
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='skill-card'>
              <h6>🖥️ Frontend</h6>
              <p>HTML • CSS • JavaScript • React • Angular • Bootstrap • Vite</p>
            </div>
          </div>

          {/* Backend */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='skill-card'>
              <h6>⚙️ Backend</h6>
              <p>Node.js • Express.js • Mulesoft</p>
            </div>
          </div>

          {/* Databases */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='skill-card'>
              <h6>🗄️ Databases</h6>
              <p>MongoDB • MySQL • SQL Server</p>
            </div>
          </div>
          {/* Programming Languages */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='skill-card'>
              <h6>💻 Programming Languages</h6>
              <p>Python • Java • C++ • SQL</p>
            </div>
            </div>

          {/* Tools & Platforms */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='skill-card'>
              <h6>🧰 Tools & Platforms</h6>
              <p>Git • GitHub • Docker • VS Code • IntelliJ • Ollama</p>
            </div>
          </div>

          {/* APIs & Integration */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='skill-card'>
              <h6>🔗 APIs & Integration</h6>
              <p>REST API • Postman • JSON</p>
            </div>
          </div>

          {/* Libraries */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='skill-card'>
              <h6>📚 Libraries</h6>
              <p>TextBlob • pandas</p> 
            </div>
          </div>
        </div>
      </div>

      <div data-aos= "zoom-in" id="projects" className="projects-section my-5">
        <div className="text-center mb-4">
          <span className="about-me-text">Projects</span>
          <span className="why-text-sub d-block">Some of my recent work</span>
        </div>

        <div className="row justify-content-center">
          {/* Project 1 - Deen Productive */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="project-card p-3">
              <img src="images/deen_productive.png" alt="Deen Productive" className="img-fluid w-100 mb-3 rounded" />
              <h5 className="project-title">Deen Productive</h5>
              <p className="project-desc">
                A 30-day productivity challenge website that helps users build consistent daily habits.
              </p>
              <p className="project-tech">
                <strong>Tech:</strong> React • CSS • JavaScript
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://github.com/Deen-37/Deen_productive" 
                  className="btn btn-outline-dark" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 2 - FAQ Chatbot */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="project-card p-3">
              <img src="images/ai_chatbot.png" alt="FAQ Chatbot" className="img-fluid mb-3 rounded" />
              <h5 className="project-title">FAQ Chatbot</h5>
              <p className="project-desc">
                An AI-powered chatbot that answers frequently asked questions using Ollama LLM.
              </p>
              <p className="project-tech">
                <strong>Tech:</strong> Python • Regex • Ollama
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://github.com/Deen-37/FAQ-Chatbot" 
                  className="btn btn-outline-dark" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 3 - SalMart Fresh */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="project-card p-3">
              <img src="images/salmart.png" alt="SalMart Fresh" className="img-fluid mb-3 rounded" />
              <h5 className="project-title">SalMart Fresh</h5>
              <p className="project-desc">
                A modern grocery e-commerce website with clean layout, product listings and multimedia.
              </p>
              <p className="project-tech">
                <strong>Tech:</strong> HTML • CSS • JavaScript
              </p>
              <div className="d-flex justify-content-center">
                <a href="https://github.com/Selah-deen/web_project_salmartfresh" 
                  className="btn btn-outline-dark" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 

      <div className='resume-outer-section d-flex flex-column'>
        <span className= "about-me-text">Resume</span>
        <span className='why-text-sub'> My Detail</span>

        <div className='resume-new-section row shadow-lg inside my-3' style={{width: '70%', marginInline: "auto", height: "400px"}}
          >
          <div className='col-lg-4 col-md-4 resume-left-section d-flex flex-row'>
            <div className='d-flex flex-column bg-new text-white'>
                <span className='icons-span'>
                  <i class="fa-solid fa-user-graduate"></i>
                </span>
                <span class='icons-span'>
                  <i class="fa-solid fa-code-branch"></i>
                </span>
                <span class='icons-span'>
                  <i class="fa-solid fa-globe"></i>
                </span>
            </div>
            <div className='d-flex flex-column'>
              <span
                className={educ === false? "resume-options-items": "selected resume-options-items"}
                onClick={() => {
                  changeState(seteduc, true)
                }}
              >
                Education
              </span>

              <span
                className={project === false? "resume-options-items": "selected resume-options-items"}
                onClick={() => {
                  changeState(setproject, true)
                }}
              >
                Project
              </span>

              <span
                className={externship === false? "resume-options-items": "selected resume-options-items"}
                onClick={() => {
                  changeState(setexternship, true);
                }}
              >
                Externship
              </span>

            </div>
          </div>
          <div className='col-lg-8 col-md-8 resume-right-section'>
            {educ === true && <Educ />}
            {project == true && <Project/>}
            {externship == true && <Externship/>}
          </div>
          
        </div>
      </div>
      */}
      <div data-aos= "zoom-in" id= "contact" className='contact-us'>
          <h6 className='about-me-text'>Contact me</h6>
          <p className='why-text-sub mb-5'> Let's Keep in touch</p>
          <Contact/>
      </div>
      <footer className="footer">
        <div className="row justify-content-center text-center">
          <div className="col-lg-auto col-md-auto col-sm-12 mb-2">
            <p className="name mb-0">@ Selehadin Abebe</p>
          </div>
          <div className="col-lg-auto col-md-auto col-sm-12 mb-2">
            <a href="https://github.com/deen-37" target="_blank" rel="noreferrer" className="github">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
          <div className="col-lg-auto col-md-auto col-sm-12 mb-2">
            <a href="https://www.linkedin.com/in/selehadin-abebe-aa9689324/" target="_blank" rel="noreferrer" className="linkedin">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
          <div className="col-lg-auto col-md-auto col-sm-12 mb-2">
            <a href="mailto:selehadin.abe@email.com" className="email">
              <i className="fa-solid fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </footer>
    


  </div>
  );
}

export default App;
