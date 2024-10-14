import Footer from "../components/Footer";
import { Header } from "../components/navigation/Header";
import PrevWork from "../components/PrevWork";
import '../css/portfolio.css'
import PortGif from '../assets/ports.gif'

const Portfolio = () => {
    return (
        <div >
            <section className="">
                <Header />
            </section>
            <div className='head-spacer'>

            </div>
            <section>
                <div style={{ background: 'var(--text-clip-bg)', marginBottom: '5em' }}>
                    <span className="bp-w-head">
                        <h1>Explore My Works</h1>
                    </span>
                </div>
                <div className="bp-head container-pages">

                    <div className="bp-breadcrumb">
                        <div className="bp-bc-left">
                            <h1 >What we Actually Do?</h1>

                            <br />

                            <img src={PortGif} className="bp-img" />
                        </div>

                        <div className="bp-bc-right" >
                            <p>
                                What we do revolves around the creation of dazzling yet functional websites. We focus on the creative web technologies at our disposal, but we never lose sight of our obligation to our clients to provide them with a user-friendly website that modern users can navigate effortlessly. When it comes to responsive web design (RWD), we are firm believers in its imperative not only for the modern web but also for the kind of web we want to see in the future. Of course, not all websites are an RWD nirvana, but we are also part of the solution.
                            </p>
                            <br />
                            <h2
                                className="text-clip"
                                style={{ background: 'var(--text-clip-bg)' }}>
                                State Management and Styling
                            </h2>
                            <p>
                                Using advanced tools like Redux for state management and cutting-edge frameworks like Tailwind CSS and Material UI, we create designs that are both functional and beautiful. Our goal is to maintain consistency while allowing for flexible, reusable components.
                            </p>
                            <br />
                            <h2
                                className="text-clip"
                                style={{ background: 'var(--text-clip-bg)' }}>
                                CMS & Website Builders
                            </h2>
                            <p>
                                Whether you&apos;re looking to build a custom site or need flexibility with a Content Management System, we&apos;ve got you covered. From WordPress and Elementor to platforms like Wix, GoDaddy, and Webflow, we tailor solutions that give you control over your content without compromising on design or functionality.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="bp-work container-pages">
                    <div className="bp-works">
                        <div>
                            <PrevWork sliceValue={20} />
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="container-pages">
                <Footer />
            </section>
        </div>
    )
}

export default Portfolio