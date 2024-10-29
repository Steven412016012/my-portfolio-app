import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import '../styles/404notfound.css'

function PageNotFound() {
  return (
    <> 
        <Navbar />
        <div className="wrapper">
          <div className="not-found">
              <h3>404 Page Not Found</h3>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default PageNotFound