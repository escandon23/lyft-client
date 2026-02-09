import React from 'react'
import Plans from '../plans/plans'
import GlobalMarkets from '../globalMarkets/globalMarkets'

import MainPage from '../mainPage/mainPage'
import License from "../license/license"
import Services from '../Service/Services'

import "./homepage.scss"
import Testimonials from '../Testimonials/Testimonials'


const Homepage = () => {
  return (
    <div className='homepage'>
      <div id="home">
        <MainPage/>

      </div>
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
