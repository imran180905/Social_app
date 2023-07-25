import React from 'react'
import { IProduct } from "../../pages/profile/index"; 
import Item from './Item';
import Styles from './Profile.module.css'

type Props = {
    products: IProduct[];
  };

  const ItemList = ({ products }: Props) => {
  return (
    <div className={Styles.itemListSection}>
        <div className="grid" style={{gridTemplateColumns: "1fr 1fr 1fr", gap: '31px'}}>
      {products ? (
         products.map((product) => (
          <Item key={product.id.toString()} product={product} />
        ))
      ) : <div ><h1 className={Styles.noPhotos}>No Photos</h1> </div>}
    </div>
    </div>
  )
}

export default ItemList


  
  