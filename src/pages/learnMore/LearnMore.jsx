import Header from '../../components/Header'
import HeaderImage from '../../images2/header_bg_2.jpg'
import './learnmore.css'

const LearnMore = () => {
  return (
    <>
    <Header title="Programs" image={HeaderImage}>
    Learn More about our programs below.
    </Header>
    <section className="programs__page">
        <div className='container programs__page-container'>
            <div className="frontend__freak">
                <h2>FrontEnd Freaks</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia a ab laboriosam repudiandae corporis ut veritatis sed! Nostrum ab sunt doloremque culpa fugiat aut tenetur ipsum, aspernatur necessitatibus voluptatibus labore porro soluta molestias neque velit. Illo placeat repellendus veritatis, aspernatur expedita recusandae sed temporibus obcaecati, porro reprehenderit repellat beatae doloribus? Repudiandae, dolor iure quae et nisi totam? Explicabo, consequatur eius.</p>
            </div>
            <div className="backend__bravery">
                <h2>FrontEnd Freaks</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat rem corrupti ad quos unde dolorum quo vitae. Architecto, alias, accusamus deleniti dolor nam assumenda porro ullam consectetur nostrum facere tenetur? Corporis ex accusamus pariatur possimus dicta incidunt aperiam enim debitis odio voluptatem, exercitationem dolorum illum nemo voluptatibus nesciunt distinctio a mollitia sit! Tempore, ipsa sit? Cupiditate laborum laboriosam culpa.</p>
            </div>
            <div className="flamin__fullstack">
                <h2>FrontEnd Freaks</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus earum quo blanditiis voluptatibus assumenda magni ab dignissimos a, modi eius amet itaque laboriosam quod soluta possimus tenetur aliquid asperiores? Cum ratione est enim alias praesentium. Praesentium tempora odio quos et exercitationem? Eius, eveniet. Non nihil rerum cupiditate, sed quidem, mollitia eos molestias ex voluptatum nesciunt modi dicta aliquid distinctio.</p>
            </div>
            <div className="dragons__breath">
                <h2>FrontEnd Freaks</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corporis veritatis at, recusandae minus harum earum deleniti doloremque, praesentium, quos voluptas aspernatur aut doloribus consequatur. Est a consectetur voluptate debitis neque animi nostrum. Illum recusandae provident natus maiores ducimus obcaecati, inventore placeat molestiae tempore accusamus reiciendis architecto, deleniti consequuntur vel eos maxime nesciunt dolore necessitatibus tenetur dignissimos, cum quo facilis.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default LearnMore