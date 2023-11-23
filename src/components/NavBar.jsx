import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function NavBar({scrollToSection, workRef}) {
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const [isClicked, setIsClicked] = useState(false);
  console.log(windowSize);

  useEffect(() => {
    function handleResize() {
      setwindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (isClicked) {
      setIsClicked(false)
    } else (
      setIsClicked(true)
    )
  }

  if (windowSize <= "650") {
    return (
      <div>
        <div className="menu" onClick={handleClick}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </span>
      </div>

      <div>
      {isClicked && <div className="nav-row">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link onClick={() => scrollToSection(workRef)} >Previous Works</Link>
      <Link to="/blogs">Blogs</Link>
    </div>}
      </div>
      </div>
    );
  }

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link onClick={() => scrollToSection(workRef)} >Previous Works</Link>
      <Link to="/blogs">Blogs</Link>
      <a href='http://www.seobrandstudio.it' target='blank_'>Seo Page</a>
    </div>
  );
}

NavBar.propTypes = {
  // prop validation for App component
  // Make sure scrollToSection is a function
  scrollToSection: PropTypes.func.isRequired,
  // Make sure section1Ref, section2Ref, and section3Ref are React refs
  workRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  // section2Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  // section3Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default NavBar;
