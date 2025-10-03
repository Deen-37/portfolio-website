
import './App.css';


function App() {
  return (
    <div className='app'>
      <div className="hero px-5 py-5">
        <nav className=' d-flex flex-row justify-content-between nav'>
          <span className='brand_name' >Selehadin Abebe</span>
          <div className='nav_links d-flex flex-row' >
            <span className=' mx-4 nav_members'> Home</span>
            <span className=' mx-4 nav_members'>About Me</span>
            <span className='mx-4 nav_members'>Skills</span>
            <span className='mx-4 nav_members'>Projects</span>
            <span className='nav_members'> Contact Me</span>
          </div>
        </nav>
      </div>
      <div className= "row justify-content-center hero_2">
        <div className= "text-side-left col-lg-5 col-md-6 col-sm-12">
          <div className = "personal d-flex flex-column">
            <span className ="I_text ">
              Hello, I am <span className= "name">Selehadin Abebe</span>
            </span>
            <span className='adjective py-2'>Enthusiastic Dev 😎</span>
            <span className='overview'>passionate about building front and back-end operations </span>
            <div className= "btns d-flex flex-row justify-content-center mt-5">
              <button className='btn_1'> Hire Me </button>
              <button className='btn_2'> Resume </button>
            </div>
          </div>
        </div>
        <div className='picture col-lg-5 col-md-6 col-sm-12'>
          <div className='d-flex justify-content-center custom-div-outer-img'>
               <img className='img-fluid pic' alt = "heroimage" src ='/image.png'></img>
          </div>
        </div>
      </div>

      <div id="about" className="about-me-section aboutme-inside my-5">
        <div className='d-flex flex-column'>
          <span className='about-me-text'> About me</span>
          <span className='why-text-sub'>Why Choose me?</span>
          <div className='row justify-content-center shadow-lg my-5'>
            <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
              <lottie-player 
                src="https://assets7.lottiefiles.com/packages/lf20_v1yudlrx.json" 
                background="transparent" 
                speed="1" 
                style= {{width:"500px", height: "500px"}}
                loop 
                autoplay>
              </lottie-player>
            </div>
            <div className='col-lg06 col-md-6 col-sm-12 py-5 d-flex flex-column'>
              <span className='some-text-about-me'>
                Full Stack Web Developer with hands-on experience in designing and building responsive, user-focused web applications. 
                I specialize in creating scalable front-end interfaces and efficient back-end systems, with a strong emphasis on 
                clean code, performance, and user experience.
              </span>

              <span className='few-highlights mt-4 fw-bold'>Technical Summary:</span>

              <ul className='few-list mt-2'>
                <li><strong>Front-End:</strong> HTML, CSS, JavaScript, TypeScript, React, Angular, Bootstrap, Vite</li>
                <li><strong>Back-End:</strong> Node.js, Express.js, Mulesoft</li>
                <li><strong>Databases:</strong> MongoDB, MySQL, SQL Server</li>
                
                <li><strong>APIs & Integration:</strong> REST API design, Postman testing, JSON handling</li>
                <li><strong>Tools & Platforms:</strong> Git, GitHub, Docker, VS Code, IntelliJ, Ollama</li>
                <li><strong>Programming Languages:</strong> Python, Java, C++, SQL</li>
                <li><strong>Additional Libraries:</strong> TextBlob, pandas (for NLP and data analysis)</li>
              </ul>

              <span className='few-highlights mt-4 fw-bold'>Key Strengths:</span>
              <ul className='few-list mt-2'>
                <li>Building full-stack web apps using MERN stack and modern frameworks</li>
                <li>Designing responsive, user-friendly front-end layouts</li>
                <li>Developing and testing RESTful APIs</li>
                <li>Writing maintainable, modular, and optimized code</li>
              </ul>
            </div>
          </div>  
        </div>
      </div>

    </div>
  );
}

export default App;
