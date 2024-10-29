import { useLocation } from "react-router-dom"
import { useEffect } from "react"

function ScrollToTop() {
    const {location} = useLocation()

    useEffect(()=>{
        //console.log('komponen berubah')

        window.scrollTo(0, 0)
    },[location])
}

export default ScrollToTop