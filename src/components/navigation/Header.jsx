import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './header.css';
import { Link } from "react-router-dom";
import { LogoSvg } from "./Logo";

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
            <div className="addsfdf" style={{ position: 'fixed', left: 'auto', right: 'auto', width: '100%', background: 'linear-gradient(90deg, #00002c, #00001a, #000000, #000000, #000000)', zIndex: '99999999999999' }}>
                <div className="desktop-nav">
                    <div className="desktop-menu">
                        <div className="desktop-nav-logo">

                            <LogoSvg />

                        </div>

                        <div className="desktop-nav-list">
                            <Link to='/'>Home</Link>
                            {/* <Link to='/about'>About</Link> */}
                            {/* <Link to='/service'>Service</Link> */}
                            <Link to='/prev'>Previous Works</Link>
                            {/* <Link to='/blog'>Blog </Link> */}
                            <Link to='/contact'>Contact</Link>
                        </div>
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
        </div >

    );
};
