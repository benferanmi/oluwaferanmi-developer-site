import './css/animatedprogressbar.css';
// eslint-disable-next-line no-unused-vars
import { delay, motion } from 'framer-motion';

const SkillList = () => {

    const skillArray = [
        {
            id: 1,
            name: 'Html',
            percentage: 100
        },
        {
            id: 2,
            name: 'CSS',
            percentage: 100
        },
        {
            id: 3,
            name: 'React Javascript',
            percentage: 100
        },
        {
            id: 4,
            name: 'Next Javascript',
            percentage: 100
        },
        {
            id: 5,
            name: 'Node Javascript',
            percentage: 90
        },
        {
            id: 6,
            name: 'Express Javascript',
            percentage: 90
        },
        {
            id: 7,
            name: 'Git',
            percentage: 100
        },
        {
            id: 8,
            name: 'Php',
            percentage: 100
        },
        {
            id: 9,
            name: 'Mysqli',
            percentage: 100
        },
        {
            id: 10,
            name: 'MongoDb',
            percentage: 90
        },
        {
            id: 11,
            name: 'Wordpress Cms',
            percentage: 100
        },
        {
            id: 12,
            name: 'Webflow',
            percentage: 100
        },
        {
            id: 13,
            name: 'Godaddy',
            percentage: 100
        },
        {
            id: 14,
            name: 'Redux',
            percentage: 100
        },
        {
            id: 15,
            name: 'Elementor',
            percentage: 100
        },

    ]

    const fadeInAnimationsVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.08 * index
            }
        }),
    };

    return (
        <div >
            <div>
                <div className="ap-head">
                    <h1 style={{ fontSize: '5em', background: 'var(--text-clip-bg)' }} className='text-clip'>Skills</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={20} height={20}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                    <h2></h2>
                </div>


                <div className="ap-skills">
                    <div className="ap-skill">
                        <div className="ap-grid">


                            {
                                skillArray?.map((items, index) => {
                                    return (

                                        <motion.div className="ap-each" key={index} variants={fadeInAnimationsVariants} initial='initial'
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                            }}
                                            custom={index}
                                        >
                                            <p>{items.name}</p>

                                            <div className="ap-progress">
                                                <div className="ap-bar">
                                                    <div className="ap-b-bg"></div>
                                                    <div className="ap-b-overlay" style={{ width: `${items.percentage}%` }}></div>
                                                    <div className="ap-b-text">
                                                        {items.percentage}%
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })
                            }



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillList;