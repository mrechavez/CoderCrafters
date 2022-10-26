import Header from '../../components/Header'
import HeaderImage2 from '../../images2/header_bg_1.jpg'
import StoryImage2 from '../../images2/about1.jpg'
import VisionImage2 from '../../images2/about2.jpg'
import MissionImage2 from '../../images2/about3.jpg'
import './about.css'



const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage2}>
    Read below to learn about our Story, our Vision, and our mission to turn you into a competent, workforce ready engineer.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage2} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          CoderCrafters is the brainchild of Peter Chusid and Miles Echavez. We were started in New England, USA, 2022. The idea came about after our own endeavor to become Software Engineers and in recognition of the difficulty in doing so.
          </p>
          <p>
          After years of classes, reading, and consulting with StackOverflow, we realized that many, even those who've established themselves with jobs in the field, never quite feel a mastery of their skill.
          </p>
          <p>
          While Software development is a field of collaboration and the best code should always be used for any given task, even if that involves integrating code you've found instead of made, a strong foundation is important. We went to work making programs that will give you just that.
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Our vision is to improve the industry of software development through teaching a new generation of developers.
          </p>
          <p>
          We believe that in order to be have a truly successful company that makes truly successful products, all contributors to the product must maintain an appreciation for all parts of the development cycle, from front-end to back-end, from the art to the logic. 
          </p>
          Our vision fulfilled means all of our graduates create code in respect of and acknowledgement to all of the product.
          <p>

          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage2} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage2} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          Our mission is to provide high quality evidence-based education thats sets the standard for entire careers.
          </p>
          <p>
          This includes providing exceptional and customized approaches based on leading pedagogy that will stimulate intellectual, social, moral, and economical development.
          </p>
          <p>
          Upon all programs in all lesson plans, we commit ourselves to our three tenets that all students strive for in their software: Power, Beauty, and Speed.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About