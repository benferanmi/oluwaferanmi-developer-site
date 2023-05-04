import "./css/style.css";
import img from "./assets/gif 2.gif";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Skill from "./data/SkillData.jsx";
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Work from "./data/WorkData.jsx";

const IndexPage = () => {
  const [skill] = useState(Skill);
  const [work] = useState(Work);

  return (
    <div>
      <div className="header-bg">
        {}
        <NavBar />
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
        <div className="skill-grid">
          {skill?.map((skills) => (
            <div key={skills.id}>
              <p className="skill-title">{skills.skillName}</p>
              <span className="progress-bar">
                <ProgressBar
                  completed={skills.progress}
                  bgColor={"linear-gradient(90deg, #00002c, #13fefb)"}
                  height="36px"
                  margin="2px"
                  baseBgColor="inherit"
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="works">
        {work?.map((works) => (
          <div key={works.workName} className="work-main">
            <a href={works.projectLInk} className="work-submain">
              <img src={works.image} alt={works.workName} className={works.wStyle} />
              <div>
              <h1>{works.workName}</h1>
              <p>Languages: {works.languages}</p>
              <p>Features: {works.features}</p>
              <p>{works.codeLink}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
