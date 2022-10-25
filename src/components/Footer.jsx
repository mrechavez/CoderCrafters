import {Link} from 'react-router-dom'
import Logo from '../images/logo4.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'




const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    The TechStack SuperCenter. Developing tomorrow's websites, today.
                </p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/peterchusid/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://github.com/pwchusid" target="_blank" rel='noreferrer noopener'><FaGithub/></a>
                    <a href="https://twitter.com/peterchusid" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://peterchusid.com/" target="_blank" rel='noreferrer noopener'><FaHome/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>Peter & Miles &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer