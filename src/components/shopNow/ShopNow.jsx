import React from 'react'
import { Container } from '../../utils/Components'
import c from './ShopNow.module.scss'
import { FiArrowRight } from 'react-icons/fi'
import carraway from './images/callaway.png'
import merrell from './images/merrell.png'
import specialized from './images/specialized.png'
import saveIt from './images/save-it.png'
import { useLocation } from 'react-router-dom'

const ShopNow = () => {
    const { pathname } = useLocation()
    return pathname.includes("/auth") ? <></> :(
        <div className={c.shopNowBackground}>
            <Container>
                <div className={c.shopNowBlog}>
                    <div className={c.shopNowInner}>
                        <div className={c.shopNowWrapper}>
                            <h1 className={c.title}>Super savings at the Brand Outlet</h1>
                            <p className={c.shopNowText}>Up to 60% off the brands you love.</p>
                            <button className={c.shopNowBtn}>shop now <FiArrowRight /> </button>
                        </div>
                        <div className={c.shopNowImagesWrapper}>
                            <img src={carraway} alt="png" />
                            <img src={merrell} alt="png" />
                            <img src={specialized} alt="png" />
                        </div>
                    </div>
                    <div className={c.saveItPicture}>
                        <img src={saveIt} alt="png" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ShopNow