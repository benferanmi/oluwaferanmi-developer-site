import "./css/style.css";
import img from "./assets/gif 2.gif";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import SkillProgressBar from "./components/SkillProgerssBar";
import Footer from "./components/Footer";
import Portfolio from "./Portfolio";
import { useRef } from "react";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  const workRef = useRef(null);5

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Helmet>
        <meta name="author" content="Opafunso Benjamin Feranmi" />
        <meta
          name="keywords"
          content="react, frontend, developer, web development, html, css, tailwind, next, mongodb, full stack, benferanmi, foworg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Opafunso Benjamin Feranmi Portfolio</title>
        <meta
          name="description"
          content="As a website developer, I specialize in crafting custom websites
              that are not only visually stunning, but also highly functional
              and intuitive. From the initial design concept to the final
              product launch, I work closely with my clients to ensure that
              their website meets their unique needs and goals."
        />
        <meta
          property="og:title"
          content="Opafunso Benjamin portfolio website "
        />
        <meta
          property="og:description"
          content="As a website developer, I specialize in crafting custom websites
              that are not only visually stunning, but also highly functional
              and intuitive. From the initial design concept to the final
              product launch, I work closely with my clients to ensure that
              their website meets their unique needs and goals."
        />
        <meta property="og:image" content="" />
        <meta
          property="og:url"
          content="https://oluwaferanmi-developer-site.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="header-bg">
        {}
        <NavBar scrollToSection={scrollToSection} workRef={workRef} />
        <span className="header">
          <div className="left">
            <p className="head-greeting">HELLO,</p>
            <p className="head-name">
              I am Opafunso Benjamin. <br></br> A Passionate Website Developer
            </p>
            <p className="head-dis">
              As a website developer, I specialize in crafting custom websites
              that are not only visually stunning, but also highly functional
              and intuitive. From the initial design concept to the final
              product launch, I work closely with my clients to ensure that
              their website meets their unique needs and goals.
            </p>
            <div className="head-button">
              <button>
                <Link to="/contact">Contact Me</Link>
              </button>
            </div>
          </div>

          <div className="right">
            <span>
              <img src={img} alt="gif" />
            </span>
          </div>
        </span>
      </div>
      <div className="transistion">
        <span>
          <h1>About Me</h1>
        </span>
      </div>

      <div className="about">
        <p>
          I am a Multitalented Front end developer with experience in web
          software industry. Demonstrated excellent skills in HTML, JavaScript
          and React. True team player with strengths in adaptability and
          accuracy. Innovative and technically-astute website designer
          well-versed in analyzing user needs and developing software to
          precisely meet diverse needs. Demonstrates mastery of multiple
          programming languages and proactively keeps up with industry trends.
          Driven to wear many programming hats with expertise in creating
          everything from new applications to new operating systems. Eager to
          contribute to team success through hard work, attention to detail and
          excellent organizational skills. Clear understanding of Task and
          training in Skill. Motivated to learn, grow and excel in Industry.
        </p>
      </div>

      <div className="skill-transistion">
        <span>
          <h1>Skills</h1>
        </span>
      </div>

      <div className="skill">
        <SkillProgressBar />
      </div>

      {/* i will apply pagination to this section in the later future. */}

      <div className="works-section">
        <div className="work-heading">
          <h1>Previous Works</h1>
        </div>
        <span></span>
        <div className="portfolios" ref={workRef}>
          <Portfolio />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
