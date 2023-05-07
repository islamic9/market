import React, { useEffect, useState } from 'react'
import c from './Category.module.scss'
import { Container } from '../../utils/Components'
import { Link, useParams } from 'react-router-dom'
import { FiShoppingCart, FiBell, FiChevronDown } from 'react-icons/fi'
import logo from '../../assets/logo.png'
import banner from '../../assets/category-banner.png'
import axios from 'axios'



const CategoryProducts = () => {
  const { id } = useParams();
  const [productsData, setproductsData] = useState(null);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then(response => setproductsData(response.data))
  }, [])
  return (
    <Container>
      <div className={c.category}>

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
            <li className={c.nav__item}>Watchlist<FiChevronDown className='svg' /></li>
            <li className={c.nav__item}>My eBay<FiChevronDown className='svg' /></li>
            <Link to='/' className={c.navbar__link}>
              <FiShoppingCart />
            </Link>
            <Link to='/' className={c.navbar__link}>
              <FiBell />
            </Link>
          </ul>
        </div>

        <div className={c.searchWrapper}>
          <img className={c.siteLogo} src={logo} alt="logo" />
          <strong className={c.searchStrong}>Shop by category<FiChevronDown className='sss' /></strong>
        </div>

        <ul className={c.searchListWrapper}>
          <li className={c.searchItem}><Link className={c.searchItem} to={"/"}>Home</Link></li>
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

        <div className={c.categoryBanner}>
          <h2 className={c.categoryBannerTitle}>Featured Event</h2>
          <img className={c.categoryBannerImg} src={banner} alt="png" />
          <p className={c.categoryBannerText}>Up to 60% off Apple tech</p>
          <p className={c.categoryBannerDesc}>Save on AirPods, iPhones, and more.</p>
        </div>

        <div className={c.categoryProductsWrapper}>
          {
            productsData?.map(categoryProduct =>
              <Link to={`/auth/product${id}`}>
                <div className={c.categoryProductCard}>
                  <img className={c.categoryProductImg} src={categoryProduct?.images[0]} alt="png" />
                  <h2 className={c.categoryProductTitle}>{categoryProduct?.title}</h2>
                  <p className={c.categoryProductName}>{categoryProduct?.category.name}</p>
                  <p className={c.categoryProductText}>{categoryProduct?.price}</p>
                  <strong className={c.categoryStrong}>{categoryProduct.description}</strong>
                </div>
              </Link>
            )
          }
        </div>

        <div className={c.categoryFooter}>
          <ul>
            <li>About eBay</li>
            <li>Announcements</li>
            <li>Community</li>
            <li>Security Center</li>
            <li>Seller Center</li>
            <li>Policies</li>
            <li>Affiliates</li>
            <li>Help & Contact</li>
            <li>Site Map</li>
          </ul>

          <p className={c.categoryFooterBottom}>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>

        </div>

      </div>
    </Container>
  )
}


export default CategoryProducts