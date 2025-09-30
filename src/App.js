
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
            <dev className= "btns d-flex flex-row justify-content-center mt-5">
              <button className='btn_1'> Hire Me </button>
              <button className='btn_2'> Resume </button>
            </dev>
          </div>
        </div>
        <div className='picture col-lg-5 col-md-6 col-sm-12'>
          <div className='d-flex justify-content-center custom-div-outer-img'>
               <img className='img-fluid pic' alt = "heroimage" src ='/image.png'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
