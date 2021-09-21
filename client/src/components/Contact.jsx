import React from "react";
import axios from "axios";
import { useState } from "react";
// import ContactForm from "./ContactForm";

export default function Contact() {

  const formId = "CBZNDZsB";
  const formUrl = `https://submit-form.com/${formId}`

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const submitForm = async (e) => {
    e.preventDefault();
    await postSubmission();
  };
  
  const postSubmission = async () => {
    const formInfo = {
      name:"Hard Coded",
      email:"hardcode@hotmail.com",
      message:"Can hard code..",
    };
  

    try {
      const res = await axios.post(formUrl, formInfo);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="contact-box">
      <div className="title-box">
      <h1>
        <span>Contact Wear It, Baby!</span>
      </h1>
      </div>
        <div className="form-box">
        <form onSubmit={submitForm}>
          <label>Name</label>
          <input type="text" value={name} />
          <label>Email</label>
          <input type="text" value={email} />
          <label>Message</label>
          <input type="text" value={message}/>
          
        <button className="btn">
          Send It!
        </button>
         </form>
        </div>
      </div>
  )
}
