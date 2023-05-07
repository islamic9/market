import React from 'react'
import { Container } from '../../utils/Components'
import { useLocation } from 'react-router-dom'
import c from './Footer.module.scss'
import f from '../../assets/f.png'
import t from '../../assets/t.png'

const Footer = () => {
  const { pathname } = useLocation()
  return pathname.includes("/auth") ? <></> : (
    <Container>
        <div className={c.footer}>
          <ul>
            <p className={c.fItem}>Buy</p>
            <li className={c.fItem}>Registration</li>
            <li className={c.fItem}>eBay Money Back Guarantee</li>
            <li className={c.fItem}>Stores</li>
            <li className={c.fItem}>eBay for Charity</li>
            <li className={c.fItem}>Charity Shop</li>
            <li className={c.fItem}>Seasonal Sales and events</li>
          </ul>

          <ul>
            <p>Sell</p>
            <li className={c.fItem}>Start selling</li>
            <li className={c.fItem}>How to sell</li>
            <li className={c.fItem}>Business sellers</li>
            <li className={c.fItem}>Affiliates</li>
            <p className={c.tools}>Tools & apps</p>
            <li className={c.fItem}>Developers</li>
            <li className={c.fItem}>Security center</li>
            <li className={c.fItem}>Site map</li>
          </ul>

          <ul>
            <p>Stay connected</p>
            <li className={c.fItem}> <img src={f} alt="png" /> Facebook</li>
            <li className={c.fItem}> <img src={t} alt="png" /> Twitter</li>
          </ul>

          <ul>
            <p>About eBay</p>
            <li className={c.fItem}>Company info</li>
            <li className={c.fItem}>News</li>
            <li className={c.fItem}>Investors</li>
            <li className={c.fItem}>Careers</li>
            <li className={c.fItem}>Diversity & Inclusion</li>
            <li className={c.fItem}>Global Impact</li>
            <li className={c.fItem}>Government relations</li>
            <li className={c.fItem}>Advertise with us</li>
            <li className={c.fItem}>Policies</li>
            <li className={c.fItem}>Verified Rights Owner (VeRO) Program</li>
            <li className={c.fItem}>eCI Licenses</li>
          </ul>

          <ul>
            <p>Help & Contact</p>
            <li className={c.fItem}>Seller Center</li>
            <li className={c.fItem}>Contact Us</li>
            <li className={c.fItem}>eBay Returns</li>
            <p className={c.tools}>Community</p>
            <li className={c.fItem}>Announcements</li>
            <li className={c.fItem}>eBay Community</li>
            <li className={c.fItem}>eBay for Business Podcast</li>
          </ul>

        </div>

        <p className={c.fEnd}>Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility Lorem ipsum dolor sit amet.  </p>
    </Container>
  )
}

export default Footer