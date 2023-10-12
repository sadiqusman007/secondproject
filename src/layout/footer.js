import React from 'react'
import {Link} from"react-router-dom"

const Footer = (props) => {
  return (
    <>
    <section className='quick_service_section'>
      <div className="page_width">
        <div className="quick_service_inner_section">
        <h2>Quick Service On Emergency</h2>
        <a href="tel:+971586747123">{props.icons}<span>+971 58 67 47 123</span></a>
        </div>
      </div>
    </section>
    <footer>
      <div className="page_width">
        <div className="footer_inner_grid">
          <div className="footer_about">
          <div className="logo"><img src={props.logo} alt="" /></div>
            <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
          </div>
          <nav className="footer_home">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </nav>
          <nav className="footer_home">
          <ul>
            <li><a href="http://www.facebook.com" target="_blank">Facebook</a></li>
            <li><a href="http://www.twitter.com/" target="_blanks">Twitter</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank">Linkedin</a></li>
            <li><a href="http://www.instagram.com/" target="_blank">Instagram</a></li>
          </ul>
          </nav>
          <div className="footer_contact_us">
            <a href="tel:+971586747123">{props.icons}<span>+971 58 67 47 123</span></a>
            <a href="mailto:info@homecomfort.com"><span>info@homecomfort.com</span></a>
          <form className='form_footer' action="">
            <input type="text" placeholder="Enter Email"/>
            <input type="submit" value="Send" />
          </form>
          </div>
        </div>
        <hr/> 
        <p className="footer_copyright">@Copyrights reserved by HomeComfort</p>
        </div>
      </footer>

    </>
  )
}

export default Footer
