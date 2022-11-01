import Header from '../../components/Header'
import HeaderImage from '../../images2/header_bg_2.jpg'
import './services.css'
import EventsImage2 from '../../images2/EventsImage2.jpeg'
import CommunitiesImage1 from '../../images2/CommunitiesImage1.jpg'


const Services = () => {
  return (
    <>
    <Header title="Services" image={HeaderImage}>
    Learn more about how CoderCrafters creates and inspires both in and outside the classroom.
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
          One of the most critical pillars of Software Engineering is teamwork. With that in mind, team-building is one of the most important initial and continuing steps in ensuring a strong, cohesive workplace. 
          </p>
          <p>
          One of CoderCrafters' many ways of instilling team-centric values is through our CodeRetreats. All of the events below represent just a fraction of our efforts to forge strong engineers, an opportunity available not just for our students, but for everyone.
          </p>
          <p>
          2022 Line-up <br></br> 01/05 - JavaScripting in Salamanca <br></br> 04/15 - Python with Pythons (real snakes)<br></br> 07/25 - RESTing on Paradise Island, Bahamas<br></br> 09/16 - General Recruitment for 09/30 class
          </p>
        </div>
      </div>
    </section>

    <section className="services__Vision">
      <div className="container services__Vision-container">
        <div className="services__section-content">
          <h1>Communities</h1>
          <p>
          CoderCrafters prides itself not just on its excellent, world-class instruction, but also its substantial investment in Engineering development.
          </p>
          <p>
          As of 09/2022, CoderCrafters has invested $13 million dollars into the development of Engineering programs in at-risk and third-world countries.
          </p>
          All of our investments and partnerships across the world have one goal in mind - increasing culture competence of the Tech industry and teaching the basics of coding to help natives solve issues they're passionate about and connect them with the rest of the world. 
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