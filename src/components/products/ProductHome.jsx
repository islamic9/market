import React, { useState } from 'react'
import { Container } from '../../utils/Components'
import c from './ProductHome.module.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const AllProducts = () => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
            .then(response => setProductsData(response.data))
            .catch(err => console.error(err))
    }, [])
    const { pathname } = useLocation()
    return pathname.includes("/auth") ? <></> :(
        <Container>
            <div className={c.ProductsWrapperd}>
                {
                    productsData.map(product =>
                        <div className={c.productd}>
                            <img className={c.productImgd} src={product.images} alt="" />
                            <h3 className={c.productTitled}>{product.title}</h3>
                            <p className={c.productPriced}>{product.price}</p>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}




export default AllProducts
