import React from 'react'
import { IProduct } from "../../pages/profile/index"; 
import Item from './Item';
import Styles from './Profile.module.css'

type Props = {
    userPosts: IProduct[];
    setUpdatePostId:any;
    setUpdateModal:any;
    updateModal:boolean;
    updatePostId:string;
    setPostDetails:any;
  };

  const ItemList = ({ userPosts,setUpdatePostId,updatePostId,setUpdateModal,updateModal,setPostDetails }: Props) => {
    
  return (
    <div className={Styles.itemListSection}>
        <div className="grid" style={{gridTemplateColumns: "1fr 1fr 1fr", gap: '31px'}}>
      {userPosts ? (
         userPosts.map((product,index:number) => (
          <Item key={index} product={product} setUpdatePostId={setUpdatePostId} updatePostId={updatePostId} setUpdateModal={setUpdateModal} updateModal={updateModal} setPostDetails={setPostDetails}/>
          
        ))
      ) : <div ><h1 className={Styles.noPhotos}>No Photos</h1> </div>}
    </div>
    </div>
  )
}

export default ItemList


  
  