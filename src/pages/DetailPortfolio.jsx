import { useParams , Navigate } from "react-router-dom"
import '../styles/DetailPortfolio.css'
import { porfolioList } from "../data/DataPortfolio";

//header & footer
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

//scroll to top
import ScrollToTop from "../components/ScrollToTop";

function DetailPortfolio() {
    const { id } = useParams();
    const data = porfolioList.find((item) => item.id === id)

    if(data == undefined){
        return <Navigate to='/page-not-found' />
    }
    //console.log(data)

    return (
        <>
            <Navbar/>
            <section id="detail-portfolio"> 
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.image}/>
                    <p className="skill"><b>Skills: </b>{data.skill}</p>
                </div>
            </section>
            <Footer/>
            <ScrollToTop />
        </>
    )
}

export default DetailPortfolio