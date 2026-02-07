import React from 'react'
import Reason1 from '../reason1/reason1'
import Plans from '../plans/plans'
import GlobalMarkets from '../globalMarkets/globalMarkets'

import MainPage from '../mainPage/mainPage'
import License from "../license/license"

import "./homepage.scss"
import Testimonials from '../Testimonials/Testimonials'


const Homepage = () => {
  return (
    <div className='homepage'>
       <MainPage/>
        <Reason1/>
        <div id='Plans'>
           <Plans/>
        </div>
       
        <div >
                <GlobalMarkets/>

        </div>

        <div id="Testimonials">
          <Testimonials/>
        </div>
           <License/>

    
      
    </div>
  )
}

export default Homepage
