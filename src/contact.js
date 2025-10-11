import React,{useState} from "react";
import "./contact.css";

export default function (){
    const[name, setname] = useState("")
    const[email, setemail] = useState("")
    const[message,setmessage]=useState("")
    return (<>
    <div>
        <div className="contact-me-card row">
            <div className="col-lg-6 col-md-5 col-sm-12 left-contact">
                <span className="get-in-touch mx-4 my-5"> Get in touch</span>
                <div className='py-5 d-flex justify-content-center'>
                    <div className="py-5 d-flex justify-content-center">
                        <lottie-player
                       
                         src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "300px", height: "300px" }}
                        Loop
                        autoplay
                        ></lottie-player>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12">
                    <div className='d-flex flex-column card-contact-right'>
                        <div className="input-group my-3 d-flex flex-column">
                            <label>Name </label>
                            <input 
                            value = {name}
                            onChange={(e) => {setname(e.target.value)}}
                            type='text' placeholder="Enter Your Name" className="input-groups"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <label>Email </label>
                            <input 
                            value = {email}
                            onChange={(e) => {setemail(e.target.value)}}
                            type='text' placeholder="Enter Your Email" className="input-groups"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column ">
                            <label>Message </label>
                            <input 
                            value = {message}
                            onChange={(e) => {setmessage(e.target.value)}}
                            type='text' placeholder="Enter Your Message" className="input-groups py-5"/>
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
    );
}