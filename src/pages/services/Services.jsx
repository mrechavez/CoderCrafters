import Header from '../../components/Header'
import HeaderImage from '../../images2/header_bg_2.jpg'
import './services.css'
import EventsImage2 from '../../images2/EventsImage2.jpeg'
import CommunitiesImage1 from '../../images2/CommunitiesImage1.jpg'
import MissionImage2 from '../../images2/about3.jpg'

const Services = () => {
  return (
    <>
    <Header title="Services" image={HeaderImage}>
    Learn more about our services below.
    </Header>
    <section className="our__services">
        
    </section>

    <section className="services__story">
      <div className="container services__story-container">
        <div className="services__section-image">
          <img src={EventsImage2} alt="Company Retreat image" />
        </div>
        <div className="services__section-content">
          <h1>Events</h1>
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

    <section className="services__Vision">
      <div className="container services__Vision-container">
        <div className="services__section-content">
          <h1>Communities</h1>
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
        <div className="services__section-image">
          <img src={CommunitiesImage1} alt="Our Vision Image" />
        </div>
      </div>
    </section>
    </>
  )
}



export default Services