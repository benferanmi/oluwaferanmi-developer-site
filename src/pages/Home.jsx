import "../css/style.css";
import img from "../assets/gif 2.gif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SkillsShowcase from "../components/reuseable/SkillsShowcase";
import PortfolioSlider from "../components/reuseable/PortfolioSlider";
import ContactSection from "../components/reuseable/ContactSection";
import { benferanmi } from "../assets";
import { Facebook, Github, Linkedin } from "lucide-react";

const Home = () => {

  const downloadCv = () => {
    const cvUrl = '/benFeranmiResume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Opafunso Benjamin.pdf'; // This is the filename that will appear in the download dialog
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="">
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
      <div className="header-bg main-cont" >
        { }
        <span className="header">
          <div className="left">
            <p className="head-greeting"></p>

            <h2 className="text-clip" style={{ background: 'var(--text-clip-bg)', fontSize: '1.4em', marginBottom: '2px' }}>
              Website Developer
            </h2>
            <h1 className="head-name">
              OPAFUNSO BENJAMIN.
            </h1>
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
              <div className="cv-download" style={{ cursor: 'pointer' }}>
                <div onClick={downloadCv}>Download Cv</div>
              </div>
            </div>
          </div>

          <div className="right">
            <span>
              <img src={img} alt="gif" />
            </span>
          </div>
        </span>
      </div>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Image Section */}
            <div className="relative flex-shrink-0">
              <div className="relative w-80 h-80">
                <img
                  src={benferanmi}
                  alt="Opafunso Benjamin Profile Image"
                  className="w-full h-full object-cover object-top rounded-full border-8 border-gray-100 shadow-xl relative z-10"
                />

                {/* Decorative SVG Background */}
                <svg
                  className="absolute inset-0 w-full h-full -z-10 transform scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  version="1.1"
                >
                  <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                      <stop stopColor="rgba(248, 117, 55, 0.3)" offset="0%" />
                      <stop stopColor="rgba(251, 168, 31, 0.3)" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#sw-gradient)"
                    d="M12.2,-22.3C16.4,-18.6,20.8,-16.6,25.4,-13.1C30.1,-9.7,35,-4.8,32.8,-1.3C30.6,2.3,21.4,4.7,18,10.4C14.7,16.1,17.2,25.2,15.2,27.6C13.2,30.1,6.6,25.9,0.4,25.2C-5.8,24.5,-11.6,27.3,-12.3,24.1C-13.1,20.9,-8.7,11.7,-11.4,6.7C-14.1,1.7,-23.8,0.8,-28.5,-2.8C-33.3,-6.4,-33.2,-12.7,-29,-15.2C-24.9,-17.7,-16.7,-16.3,-11.2,-19.1C-5.7,-22,-2.9,-29.1,0.6,-30.1C4,-31,8,-25.9,12.2,-22.3Z"
                    transform="translate(50 50)"
                    strokeWidth="0"
                    className="transition-all duration-300 hover:scale-105"
                  />
                </svg>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 max-w-3xl">

              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text ">
                  About Me
                </h1>
              </div>

              {/* Description */}
              <div className="mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  A skilled Full-Stack Developer proficient in React.JS, Next.JS, Node.JS, and Express.JS, with expertise in MongoDB, Mongoose, and PostgreSQL. Demonstrates a strong ability in responsive web design, REST API integration, and payment gateway integration, alongside deployment and DevOps practices. Adept in Git and GitHub for version control, with additional competencies in WordPress and Webflow. Known for problem-solving and debugging capabilities, aiming to leverage full-stack MERN development skills to drive innovative web solutions.
                </p>

                {/* Core Skills Section */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Skills and Competence</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>• Proficient in building modern web applications using React.js and Next.js, with a focus on performance and scalability.</p>
                    <p>• Experienced in backend development with Node.js and Express.js, including RESTful API creation and integration.</p>
                    <p>• Knowledgeable in MongoDB and Mongoose for efficient NoSQL database design and data operations.</p>
                    <p>• Integrated payment solutions such as Stripe, Paystack, and Coinbase Commerce for secure online transactions.</p>
                    <p>• Committed to delivering clean, maintainable code with best practices in full-stack development.</p>
                  </div>
                </div>
              </div>

              {/* Experience Stats */}
              <div className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      4+
                    </h2>
                    <p className="text-black font-medium">Years of experience in Development</p>
                  </div>

                  <div className="text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      500+
                    </h2>
                    <p className="text-black font-medium">Successfully Project Completed</p>
                  </div>

                  <div className="text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      105+
                    </h2>
                    <p className="text-black font-medium">Global Customer</p>
                  </div>
                </div>
              </div>

              {/* CTA and Social Links */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                {/* Download CV Button */}
                <div>
                  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Download CV
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/classoluwaferanmi"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/opafunso-benjamin-397b241b2"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>

                  <a
                    href="https://www.github.com/benferanmi"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>




      <div className="skill">
        <SkillsShowcase />
      </div>

      <div className="works-section main-cont">
        <div className="portfolios" >
          <PortfolioSlider />
        </div>
      </div>

      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;