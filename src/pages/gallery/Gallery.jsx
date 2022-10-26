import Header from '../../components/Header'
import HeaderImage from '../../images2/header_bg_3.jpg'
import './gallery.css'


const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images2/gallery${i}.jpg`))
  }


  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
      Whether its in the classroom or on our team-building excursions, you can bet that all of our students and instructors will be a coding force to be reckoned with by the time they graduate.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery