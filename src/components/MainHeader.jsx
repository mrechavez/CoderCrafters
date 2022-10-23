import {Link} from 'react-router-dom'
import Image from '../images/logo2.jpg'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#BareYourFAANGs</h4>
          <h1>Become BigTech's next Leader</h1>
          <p>
            It's a slamdunk decision. We provide comprehensive technical consultation and instruction that will lay the groundwork to fast track your entry into the field of Software Engineering.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader