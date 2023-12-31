import React from 'react'
import { IProduct } from '../../pages/profile/index';
import Image from 'next/image';
import Styles from './Profile.module.css'
import { Contrail_One } from 'next/font/google';

type Props = {
    product: IProduct;
    setUpdatePostId:any;
    setUpdateModal:any;
    updateModal:boolean;
    updatePostId:string;
    setPostDetails:any;
  };

  const Item: React.FC<Props> = ({ product ,setUpdatePostId,updatePostId,setUpdateModal,updateModal,setPostDetails}: Props) => {
    const postImage= product.imageUrl;
    const handleUpdate=(id:string)=>{
      setUpdatePostId(id);
      setUpdateModal(!updateModal);
      console.log(id)
      if(id !==""){
      fetch(`/api/posts/6/${id}`)
      .then((res)=>res.json())
      .then((data)=>{setPostDetails(data[0]);
      console.log(data)})
      }

      
      
   }
   console.log(updateModal)
  return (<>
  {postImage && 
    <div onClick={()=>{handleUpdate(product.id)}}>
        <Image
         className="w-40 h-40 mx-auto"
         // className={Styles.itemImage}
          src={postImage}
          width={300}
          height={300}
          alt=''
          
        />
    </div>
  }
    </>
  )
}

export default Item;