import React, { useContext } from 'react';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product;