import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './header.css';
import { Link } from "react-router-dom";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const Header = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (


        <div>

            <div className="desktop-nav">
                <div className="desktop-menu">
                    <div className="desktop-nav-logo">

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 950 850" >
                            <path transform="translate(549,13)" d="m0 0h138l12 5 18 11 10 8 12 11 10 10 11 15 10 18 9 20 7 24 4 22 2 21v37l-3 29-5 27-6 25-9 30-11 30-10 23-14 30-12 22-14 24-10 16-13 20-14 20-14 19-13 16-11 14-12 13-7 8-15 16-9 10-31 31-8 7-20 18-11 9-16 13-20 15-14 10-30 20-20 12-17 10-41 21-26 11-26 10-29 9-35 8-25 4-10 1h-48l-23-3-22-5-22-8-16-8-16-10-13-11-17-17-11-15-9-16-1-3-1-13v-147h3l7 8 7 7 8 7 142 142 7 8 35 35 11 9 10 6 11 5 7 2 8 1h18l15-3 12-5 10-6 13-11 224-224 9-13 7-16 3-14 1-15-3-17-3-7 1-4 153-153 9-12 8-16 3-12 1-9v-14l-3-15-5-12-6-10-12-14-174-174z" fill="#fec502" />
                            <path transform="translate(325,345)" d="m0 0 5 2 110 110 8 10 5 13v14l-3 11-7 10-8 9h-2l-2 4h-2l-2 4-8 7-18 18-2 3h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-12 12-10 7-9 4-5 1h-9l-12-3-8-5-10-9-109-109 2-4 11-12z" fill="#fec502" />
                            <path transform="translate(494,13)" d="m0 0h18l-6 7-491 491h-3l1-19 5-16 9-24 11-24 14-29 15-28 14-23 11-17 11-16 10-14 11-15 11-14 11-13 8-10 18-20 12-13 14-15 28-28 11-9 14-13 11-9 16-13 17-13 18-13 24-16 24-15 21-12 25-13 16-8 25-11 27-10 13-4z" fill="#fec502" />
                            <path transform="translate(531,140)" d="m0 0 5 3 74 74 9 13 4 12v11l-3 10-6 10-84 84-12 6-4 1h-17l-11-4-11-8-77-77v-3l131-131z" fill="#fec502" />

                        </svg>

                        <strong>.</strong> <h2>FOlIO</h2>
                    </div>

                    <div className="desktop-nav-list">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/service'>Service</Link>
                        <Link to='/portfolio'>Portfolio</Link>
                        <Link to='/blog'>Blog </Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
            <div className="nar-m-menu">
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                >
                    <motion.div className="nav_background" variants={sidebar} />
                    <Navigation navlistPosition={isOpen ? 'nav-list-show' : 'navlist-hide'} />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
            </div>
        </div>

    );
};
