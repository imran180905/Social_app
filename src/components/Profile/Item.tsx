import React from 'react'
import { IProduct } from '../../pages/profile/index';
import Image from 'next/image';
import Styles from './Profile.module.css'

type Props = {
    product: IProduct;
  };

  const Item: React.FC<Props> = ({ product }: Props) => {
    const { image } = product;
  return (
    <div>
        <Image
         className="w-40 h-40 mx-auto"
         // className={Styles.itemImage}
          src={image}
          width={200}
          height={200}
          alt=''
          
        />
    </div>
  )
}

export default Item;