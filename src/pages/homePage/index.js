import React from 'react'
import Layout from "../../layout"
import ExploreComponents from './components/exploreComponents'
import WhoWeAre from './components/whoWeAre'
import Ourclient from './components/ourclient'
import bannerImg from "../../images/home/banner/banner.svg"
import dollarImg from "../../images/home/after_banner/dollar.svg"
import startImg from "../../images/home/after_banner/start.svg"
import teamImg from "../../images/home/after_banner/team.svg"
import './style.css' 
const HomePage = () => {
  return (
    <Layout>
      <section className="banner_section">
        <div className="page_width">
          <div className="banner_grid">
            <div className="banner_left">
              <h3>Best in Dubai</h3>
              <h2>Welcome To</h2>
              <h1>Home <span>Comfort</span></h1>
              <p>Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
              </p>
              <div className="btn_button">
                <a href="javascript:void(0);">contact us</a>
                <a href="javascript:void(0);">learn more</a>
              </div>
            </div>
            <div className="banner_right">
              <div className="banner_img"><img src={bannerImg} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_margin">
        <div className="page_width">
          <div className="after_banner_grid">
            <div className="after_banner_inner">
              <div className="after_banner_img"><img src={startImg} alt="" /></div>
              <h2>24/7 Service</h2>
            </div>  
            <div className="after_banner_inner">
              <div className="after_banner_img"><img src={dollarImg} alt="" /></div>
              <h2>Reasonable Rates</h2>
            </div>  
            <div className="after_banner_inner">
              <div className="after_banner_img"><img src={teamImg} alt="" /></div>
              <h2>Experienced Team</h2>
            </div>  
          </div>
        </div>
      </section>
      <ExploreComponents />
      <WhoWeAre />
      <Ourclient />
      
      
    </Layout>
  )
}

export default HomePage
