import '../styles/About.css'

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

function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent commodo tempus consectetur. Curabitur faucibus pharetra dui id mollis. 
                Vestibulum vitae ante pharetra, rutrum lectus vitae, faucibus erat.</p>
       
            <h4>Programming Languages & Tools</h4>
            <div className='skills'>
                <FaHtml5 />
                <FaCss3Alt />
                <SiPhp />
                <BiLogoPostgresql />
                <SiNodedotjs/>
                <FaReact />
            </div>

            <h4>Editing Tools</h4>
            <div className='skills'>
                <SiCanva />
                <SiAdobeillustrator/>
                <SiAdobephotoshop />
                <SiAdobepremierepro/>
            </div>
        </div>
    </section>
  )
}

export default About