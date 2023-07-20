import './css/submain.css'
import './css/sub.css'
import './css/main.css'
import NavBar from '../components/NavBar'
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
       <div className="u-body u-xl-mode contact" data-lang="en"> 
    <section className="u-clearfix u-palette-5-dark-3 u-section-1" id="sec-8375">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div className="u-palette-2-base white color-change u-shape u-shape-circle u-shape-1"></div>
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-white u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <div className="u-form u-form-1">
                    <form className="u-clearfix u-form-spacing-30 u-form-vertical u-inner-form p-10" 
                    ref={form} onSubmit={sendEmail}
                    >
                      <div className="u-form-email u-form-group u-form-partition-factor-2">
                        <label htmlFor="email-8268" className="u-form-control-hidden u-label">Email</label>
                        <input type="email" placeholder="Enter a valid email address" id="email-8268" name="email" className="u-border-2 u-border-palette-5-dark-2 u-input u-input-rectangle" />
                      </div>
                      <div className="u-form-group u-form-name u-form-partition-factor-2">
                        <label htmlFor="name-8268" className="u-form-control-hidden u-label">Name</label>
                        <input type="text" placeholder="Enter your Name" id="name-8268" name="first-name" className="u-border-2 u-border-palette-5-dark-2 u-input u-input-rectangle" />
                      </div>
                      <div className="u-form-date u-form-group u-form-group-3">
                        <label htmlFor="date-be9f" className="u-form-control-hidden u-label">Date</label>
                        <input type="date" placeholder="MM/DD/YYYY" id="date-be9f" name="date" className="u-border-2 u-border-palette-5-dark-2 u-input u-input-rectangle" />
                      </div>
                      <div className="u-form-group u-form-message">
                        <label htmlFor="message-8268" className="u-form-control-hidden u-label">Message</label>
                        <textarea placeholder="Enter your message" rows="4" cols="50" id="message-8268" name="description" className="u-border-2 u-border-palette-5-dark-2 u-input u-input-rectangle"></textarea>
                      </div>
                      <div className="u-align-left u-form-group u-form-submit">
                        <a href="#" className="u-btn u-btn-submit u-button-style u-hover-black u-palette-2-base p-10 u-btn-1"><button type="submit" className="inherit" value="submit" >Submit</button></a>
                        
                      </div>
                      <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                      <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                      <input type="hidden" value="" name="recaptchaResponse" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="u-align-right u-container-style contact u-layout-cell u-palette-5-dark-3 u-right-cell u-size-30 u-layout-cell-2">
                <div className="u-container-layout u-valign-middle-lg u-valign-middle-xl u-container-layout-2">
                  <h2 className="u-text u-text-1">Contact Us</h2>
                  <div className="u-border-6 u-border-white u-line u-line-horizontal u-line-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
</div> 
    </>
  )
}

export default Contact
