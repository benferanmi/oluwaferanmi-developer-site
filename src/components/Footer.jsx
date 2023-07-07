import "./css/footer.css";
import But from "../assets/button.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  // const [lastName, setLastName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");

  console.log(form);
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
    <div className="footer">
      <div className="hor-line"></div>
      <div className="contact-info">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>

          <p>+234 8125291401</p>
        </div>

        <a href="mailto: benferanmiopafunso@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <p>benferanmiopafunso@gmaill.com</p>
        </a>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <p>Location</p>
        </div>
      </div>
      <hr />
      <div className="footer-section">
        <div className="section1">
          <img src={But} alt="ben feranmi site website logo" />

          <p>Your satisfaction is my first and main priority.</p>
        </div>
        <div className="section2">
          <div>
            <h1>Contact Us</h1>
          </div>

          <div className="footer-contact">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="First Name"
                name="first-name"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                name="last name"
                // value={lastName} onChange={(e) => setLastName(e.target.value) }
              />

              <input
                type="email"
                name="email"
                placeholder="enter your email"
                // value={email} onChange={(e) => setEmail(e.target.value) }
                required
              />

              <textarea
                name="description"
                required
                placeholder="Enter your discription here."
              ></textarea>

              <button type="submit">Send Email.</button>
            </form>
          </div>
        </div>
        <div className="section3">
          <div>
            <h1>Other projects</h1>
          </div>

          <div className="links">
            <a href="/">link 1</a>
            <a href="/">link 1</a>
            <a href="/">link 1</a>
            <a href="/">link 1</a>
            <a href="/">link 1</a>
            <a href="/">link 1</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
