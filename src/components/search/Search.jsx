import React from 'react'
import { Container } from '../../utils/Components'
import logo from '../../assets/logo.png'
import c from './Search.module.scss'
import {FiChevronDown} from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const { pathname } = useLocation()
    return pathname.includes("/auth") ? <></> :(
        <Container>
            <div className={c.searchWrapper}>
                <img className={c.siteLogo} src={logo} alt="logo" />
                <strong className={c.searchStrong}>Shop by category<FiChevronDown className='sss'/></strong>
            </div>
            <ul className={c.searchListWrapper}>
                <li className={c.searchItem}>Home</li>
                <li className={c.searchItem}>Saved</li>
                <li className={c.searchItem}>Motors</li>
                <li className={c.searchItem}>Electronics</li>
                <li className={c.searchItem}>Collectibles</li>
                <li className={c.searchItem}>Home & Garden</li>
                <li className={c.searchItem}>Fashion</li>
                <li className={c.searchItem}>Toys</li>
                <li className={c.searchItem}>Sporting Goods</li>
                <li className={c.searchItem}>Business & Industrial</li>
                <li className={c.searchItem}>Jewelry & Watches</li>
                <li className={c.searchItem}>eBay Live</li>
                <li className={c.searchItem}>Refurbished</li>
            </ul>
        </Container>
    )
}

export default Search