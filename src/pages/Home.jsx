import "../css/style.css";
import { Helmet } from "react-helmet";
import SkillsShowcase from "../components/reuseable/SkillsShowcase";
import PortfolioSlider from "../components/reuseable/PortfolioSlider";
import ContactSection from "../components/reuseable/ContactSection";
import { benferanmi } from "../assets";
import { Facebook, Github, Linkedin } from "lucide-react";
import DownloadCvButton from "../components/reuseable/DownloadCvButton";
import AnimatedHeroImage from "../components/reuseable/AnimatedHeroImage";

const Home = () => {

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
      <section className="bg-inherit">
        <div className="min-h-screen w-[90%] md:[w-80%] mx-auto overflow-hidden relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Main content */}
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
              {/* Left content */}
              <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
                {/* Greeting */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                    👋 Hello, I&apos;m Benjamin
                  </span>
                </div>

                {/* Role */}
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
                  Website Developer
                </h2>

                {/* Name */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  OPAFUNSO
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    BENJAMIN
                  </span>
                  <span className="text-purple-400">.</span>
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  As a website developer, I specialize in crafting custom websites
                  that are not only <span className="text-purple-400 font-semibold">visually stunning</span>,
                  but also highly <span className="text-cyan-400 font-semibold">functional and intuitive</span>.
                  From the initial design concept to the final product launch, I work closely with my clients
                  to ensure that their website meets their unique needs and goals.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group"
                  >
                    Contact Me
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <DownloadCvButton />
                </div>

                {/* Stats or social proof */}
                <div className="flex items-center gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right content - Image */}
              <div className="flex-1 flex justify-center lg:justify-end lg:mr-20 md:mr-12">
                <div className="relative">
                  {/* Replace this with your actual GIF */}
                  <div className="relative z-10">
                    <AnimatedHeroImage />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                  <div className="absolute top-10 -right-10 w-20 h-20 bg-pink-500 rounded-full opacity-40 animate-bounce"></div>
                  <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-cyan-500 rounded-full opacity-40 animate-bounce animation-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>


        </div>

      </section>
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
                <DownloadCvButton />


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