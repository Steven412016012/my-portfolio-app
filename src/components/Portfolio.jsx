import { porfolioList } from '../data/DataPortfolio'
import { Link } from 'react-router-dom'
import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>My Portfolio</h3>
            <div className="grid">
            {
                porfolioList.map((item)=>{
                    return(
                        <div className="item" key={item.id}>
                            <Link to={`/portfolio/${item.id}`}><img src={item.image} /></Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default Portfolio