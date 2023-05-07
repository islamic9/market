import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '../../../utils/Components'
import axios from 'axios';
import { useEffect } from 'react';


const Product = () => {
  const { id } = useParams();
  const [singlePRoduct, setSingleProduct] = useState({});

  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => setSingleProduct(response.singlePRoduct))
  }, [])
  console.log(singlePRoduct);
  return (
    <Container>
        <div>
          {
            singlePRoduct?.images ?
              <img src={singlePRoduct.images[0]} alt="" />
              :
              <></>
          }
          salom
        </div>
    </Container>
  )
}

export default Product