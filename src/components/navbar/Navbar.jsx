import React from 'react'
import c from './Navbar.module.scss'
import { Container } from '../../utils/Components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FiShoppingCart, FiBell, FiChevronDown } from 'react-icons/fi'


const Navbar = () => {
  const { pathname } = useLocation()
  return pathname.includes("/auth") ? <></> : (
    <Container>
      <div className={c.navbar__wrapper}>
        <ul className={c.nav__list}>
          <li className={c.nav__item}> <Link to='/auth/login' className={c.navbar__link}>Sign in</Link> </li>
          <li className={c.nav__item}> <Link to='/auth/register' className={c.navbar__link}>register</Link></li>
          <li className={c.nav__item}>Daily Deals</li>
          <li className={c.nav__item}>Brand Outlet</li>
          <li className={c.nav__item}>Help & Contact</li>
        </ul>
        <ul className={c.nav__list}>
          <li className={c.nav__item}>Sell</li>
          <li className={c.nav__item}>Watchlist<FiChevronDown className='svg'/></li>
          <li className={c.nav__item}>My eBay<FiChevronDown className='svg' /></li>
          <Link to='/' className={c.navbar__link}>
            <FiShoppingCart />
          </Link>
          <Link to='/' className={c.navbar__link}>
            <FiBell />
          </Link>
        </ul>
      </div>
    </Container>
  )
}

export default Navbar