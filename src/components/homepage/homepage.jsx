import MainPage from '../mainPage/mainPage'
import Navbar from '../navbar/navbar'
import Services from '../Service/Services'
import Plans from '../plans/plans'
import GlobalMarkets from '../globalMarkets/globalMarkets'
import Testimonials from '../Testimonials/Testimonials'
import License from "../license/license"

import "./homepage.scss"


const Homepage = () => {
  return (
    <div className='homepage'>
      <div id="home">
        <MainPage/>
      </div>
      <Navbar/>  
      <div id='services'>
        <Services/>
      </div>
      <div id='plans'>
        <Plans/>
      </div>  
      <div >
        <GlobalMarkets/>
      </div>
      <div id="testimonials">
        <Testimonials/>
      </div>
      <License/>      
    </div>
  )
}

export default Homepage
