import React, { useState } from 'react'
import { Container } from '../../utils/Components'
import c from './AllCategories.module.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const AllCategories = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/categories?offset=0&limit=5")
            .then(response => setCategoriesData(response.data))
            .catch(err => console.error(err))
    }, [])
    const { pathname } = useLocation()
    return pathname.includes("/auth") ? <></> :(
        <div className={c.categoryBackground}>
            <Container>
                <div className={c.AllCategoriesWrapper}>
                    <h3 className={c.categoriesTitle}>Products' categories</h3>
                    <div className={c.allCategoriesBlog}>
                        {
                            categoriesData.map(category =>
                                <Link to={`/auth/category/${category.id}`}>
                                    <img className={c.categoryImg} src={category.image} alt="png" />
                                    <h4 className={c.categoryTitle}>{category.name}</h4>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
 
export default AllCategories