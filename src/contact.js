import React,{useState} from "react";
import "./contact.css";

export default function (){
    const[name, setname] = useState("")
    const[email, setemail] = useState("")
    const[message,setmessage]=useState("")
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setname("");
    setemail("");
    setmessage("");
  };
    return (<>
    <div>
        <div className="d-flex flex-row both mx-5 my-5 justify-content-center">
            <div className="col-lg-6 col-md-5 col-sm-12 left-contact">
                <div className='px-4 d-flex justify-content-center'>
                    <div className="d-flex flex-column justify-content-center">
                        <h2 className="pt-5 contact-title">Get in Touch</h2>
                        <p className="contact-subtitle">I'd love to hear from you. Let’s connect!</p>
                    
                        <lottie-player
                       
                         src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json"
                        background= "transparent"
                        speed="1"
                        style={{ width: "100%", height: "40%" }}
                        Loop
                        autoplay
                        ></lottie-player>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12">
                    <div className='px-4 pt-5 d-flex flex-column card-contact-right'>
                        <form on onSubmit={handleSubmit}>
                            <div className="input-group my-3 d-flex flex-column">
                            <label className="label">Name </label>
                            <input 
                            value = {name}
                            onChange={(e) => {setname(e.target.value)}}
                            type='text' placeholder="Enter Your Name" className="input-groups"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <label className="label">Email </label>
                            <input 
                            value = {email}
                            onChange={(e) => {setemail(e.target.value)}}
                            type='email' placeholder="Enter Your Email" className="input-groups"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column ">
                            <label className="label">Message </label>
                            <input 
                            value = {message}
                            onChange={(e) => {setmessage(e.target.value)}}
                            type='text' placeholder="Enter Your Message" className="input-groups py-5"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <button className="btn btn-success">Submit</button>
                        </div>
                        </form>   
                    </div>
            </div>
        </div>
    </div>
    </>
    );
}