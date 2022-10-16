import React, { useContext, useRef, useState } from "react";
import "./css/Contact.css";
// import emailjs from "@emailjs/browser";
// import { themeContext } from "../../Context";
const HomeContact = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   const form = useRef();
//   const [done, setDone] = useState(false)
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_2mu5xtl",
//         "template_m5udu2c",
//         form.current,
//         "VLwg1ltOWvnCYAiK_"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           form.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="con-left">
        <div className="con-heading">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact Us</span>
          <div className="blur " style={{ background: "var(--yellow)", width: "22px", height: "27px", top: "-20rem" }}></div>
        </div>
      </div>
      {/* right side form */}
      <div className="con-right">
        <form>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <div className="blur c-blur1" style={{ background: "var(--blue)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default HomeContact;