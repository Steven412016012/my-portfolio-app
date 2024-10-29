import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//header & footer
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

//scroll to top
import ScrollToTop from "../components/ScrollToTop";


// programming tools icons
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNodedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiPhp } from 'react-icons/si';

//editing tools icons
import { SiCanva } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobepremierepro } from 'react-icons/si';


function Experience() {
  return (
    <> <Navbar />
        <div className='wrapper'>
            <h1>My Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - presents"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<SiAdobeillustrator />}
                >
                    <h3 className="vertical-timeline-element-title">Graphic Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - presents"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<SiAdobephotoshop />}
                >
                    <h3 className="vertical-timeline-element-title">Photo Editor</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - presents"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<SiAdobepremierepro />}
                >
                    <h3 className="vertical-timeline-element-title">Video Editor</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024 - presents"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    <Footer /> <ScrollToTop /> </>
  )
}

export default Experience