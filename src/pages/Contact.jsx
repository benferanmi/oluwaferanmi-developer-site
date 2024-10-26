import '../css/contact.css';
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
      <div className='head-spacer'></div>

      <div style={{ background: 'var(--text-clip-bg)', marginBottom: '5em' }}>
        <span className="bp-w-head">
          <h1>Contact Us </h1>
        </span>
      </div>

      <div className="contact-space">
        <div className="contact-body">

          <span style={{ display: 'block', textAlign: 'center' }}>
            <h2>Get in Touch with us.</h2>
          </span>

          <div className="contact-cont">
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
                <button type="submit" className='secondary-button'>Send Email.</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
