import './css/contact.css'
import '../components/css/footer.css'
import NavBar from "../components/NavBar";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cted9nk",
        "template_h6oeel3",
        form.current,
        "mW8WFQdas_Oc08y-M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="nav-bg">
        <NavBar />
        </div>

        <div className="footer-space">
        <div className="section2">
          <div className="head">
            <h1>Contact Us</h1>
          </div>

          <div className="footer-contact">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="First Name"
                name="first-name"
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                name="last-name"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />

              <textarea
                name="description"
                required
                placeholder="Enter your discription here."
              ></textarea>

              <div className="button">
                <button type="submit">Send Email.</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      </>
  );
};

export default Contact;
