import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  console.log(windowSize);

  useEffect(() => {
    function handleResize() {
      setwindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize <= "650") {
    return (
      <div className="menu">
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
    );
  }

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/works">Previous Works</Link>
      <Link to="/blogs">Blogs</Link>
    </div>
  );
}

export default NavBar;
