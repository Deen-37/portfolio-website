/*import React,{useState} from "react";
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
        <div className="row both mx-5 my-5 justify-content-center">
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
    */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ name, email, message });
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xovkyrvg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };


  return (
    <section className="contact-section pb-5">
      <div className="container shadow-lg p-5 rounded bg-white">
        <div className="row align-items-center">
          {/* Left Text & Animation */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
            <h2 className="text-primary fw-bold mb-3">Let's Connect</h2>
            <p className="text-muted mb-4">
              I’d love to hear from you. Whether it's opportunities, a project, a question, or just a hello.
            </p>
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>

          {/* Right Form */}
          <div className="col-lg-6 col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></ textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
