import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} />
            <h3>Steven Wunardi</h3>
            <p>Full Stack Developer - PoGo Trainers - Graphic Designer</p>
            <div className='socialMedia'>
                <a href=''><FaInstagram /></a>
                <a href=''><FaFacebook /></a>
                <a href=''><FaGithub /></a>
                <a href=''><FaLinkedinIn /></a>
            </div>
        </div>
    </header>
  )
}

export default Header