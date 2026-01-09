import { Helmet } from "react-helmet";
import SkillsShowcase from "../components/reuseable/SkillsShowcase";
import PortfolioSlider from "../components/reuseable/PortfolioSlider";
import ContactSection from "../components/reuseable/ContactSection";
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
          content="Opafunso Benjamin portfolio website"
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
        <div className="h-fit py-15 md:py-0 lg:min-h-screen w-[95%] md:w-[80%] mx-auto overflow-hidden relative">
          {/* Animated background elements */}
          <div className=" hidden md:block absolute inset-0 overflow-hidden">
            <div className="hidden md:block absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="hidden md:blockabsolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className=" hidden md:block absolute -top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Main content */}
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
              {/* Left content */}
              <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
                {/* Greeting */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                    👋 Hello, I&apos;m
                  </span>
                </div>

                {/* Role */}
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
                  Opafunso Benjamin
                </h1>

                {/* Name */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  A FULLSTACK WEB
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    DEVELOPER
                  </span>
                  <span className="text-purple-400">.</span>
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  I am a results-driven full-stack developer with experience building <span className="text-purple-400 font-semibold">end-to-end web applications </span> that scale.
                  I specialize in turning complex business requirements into secure, maintainable systems—handling frontend, backend, integrations, and deployment with equal precision.

                  My focus is on delivering reliable software that balances performance, usability, and <span className="text-cyan-400 font-semibold">long-term technical health.</span>

                </p>

                {/* Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex w-fit items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group"
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
                    <div className="text-2xl font-bold text-white">30+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">6+</div>
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
            {/* <div className="relative flex-shrink-0">
              <div className="relative w-80 h-80 hidden lg:block">
                <img
                  src={benferanmi}
                  alt="Opafunso Benjamin Profile Image"
                  className=" w-full h-full object-cover object-top rounded-full border-8 border-gray-100 shadow-xl relative z-10"
                />

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
            </div> */}

            {/* Content Section */}
            <div className="flex-1">

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-center ">
                  About Me
                </h2>
              </div>

              {/* Description */}
              <div className="mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I am a full-stack developer with hands-on experience building, deploying, and maintaining scalable web applications. I work across the full development lifecycle architecture, frontend implementation, backend services, database design, integrations, and deployment delivering solutions that are reliable, secure, and aligned with business objectives.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">My core expertise spans React.js and Next.js for building high-performance user interfaces, alongside Node.js and Express.js for developing robust backend systems and RESTful APIs. I have practical experience designing and working with both NoSQL and relational databases, including MongoDB, Mongoose, and PostgreSQL.
                  <br />

                  I have implemented secure payment workflows using platforms such as Stripe, Paystack, and Coinbase Commerce, and I am comfortable handling integrations, authentication flows, and production deployments. I prioritize clean, maintainable code, strong system design, and collaborative problem-solving to deliver software that scales. </p>

                {/* Core Skills Section */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Skills and Competence</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Full-stack application development using React.js, Next.js, Node.js, and Express.js</li>
                    <li>Design and integration of RESTful APIs and third-party services</li>
                    <li>Database modeling and data management with MongoDB, Mongoose, and PostgreSQL</li>
                    <li>Payment gateway integration (Stripe, Paystack, Coinbase Commerce)</li>
                    <li>Responsive UI development with a focus on performance and usability</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Deployment, environment configuration, and basic DevOps workflows</li>
                    <li>Experience with WordPress and Webflow for CMS-driven solutions</li>
                  </ul>
                </div>
              </div>

              {/* Experience Stats */}
              <div className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      6+
                    </h4>
                    <p className="text-black font-medium">Years of experience in Development</p>
                  </div>

                  <div className="text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                      30+
                    </h4>
                    <p className="text-black font-medium">Successfully Project Completed</p>
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
                    aria-label="Visit my facebook page"
                  >
                    <Facebook />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/benferanmi"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Linkedin profile"
                  >
                    <Linkedin />
                  </a>

                  <a
                    href="https://www.github.com/benferanmi"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Github Profile"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>




      <div className="skill mb-12">
        <SkillsShowcase skillLength={12} />

        <div className="block w-full text-center mb-4">
          <a href="/skills"
            className="group relative bg-gradient-to-r from-orange-500 to-gl hover:from-orange-600 hover:to-gl text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-orange-500/20 hover:border-orange-400/40" >See more</a>
        </div>
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