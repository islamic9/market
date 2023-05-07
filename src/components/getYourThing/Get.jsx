import React from 'react'
import { Container } from '../../utils/Components'
import m from '../../assets/ebay.png'
import c from './Get.module.scss'
import { useLocation } from 'react-router-dom'

const Get = () => {
    const { pathname } = useLocation()
    return pathname.includes("/auth") ? <></> :(
        <Container>
            <div>
                <img className={c.getImg} src={m} alt="png" />
            </div>
        </Container>
    )
}

export default Get