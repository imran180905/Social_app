import React, { useEffect, useState } from 'react'
import ProfileHeader from './ProfileHeader'
import Styles from './Profile.module.css'
import GridOnIcon from '@mui/icons-material/GridOn';
import ItemList from './ItemList';
import { GetServerSidePropsContext } from "next";
import { IProduct } from '@/pages/profile';
import { dividerClasses } from '@mui/material';
import Image from "next/image";
import { singleDataTypes } from '../Posts';

  type Props = {
    products: IProduct[];
  };
  
  const Profile = ({products}: Props) => {
    const [userPosts, setUserPosts] = useState([]);
    const [updatePostId, setUpdatePostId] = useState("");
    const [updateModal, setUpdateModal] = useState(false);
    const [postDetails, setPostDetails] = useState<singleDataTypes>();
    

    useEffect(()=>{
      fetch("/api/posts/6")
      .then((res)=> res.json())
      .then((data)=>{
        setUserPosts(data[0]);
        
      })
    },[])

console.log(postDetails)
  return (
    <div className = "relative">
      <div style={{margin: '0 200px'}}>
      <ProfileHeader/>
      <div className={Styles.postSection}>
        <GridOnIcon style={{fontSize: '12px'}}/>
        <p className={Styles.post}>posts</p>
      </div>
      <ItemList userPosts={userPosts} setUpdatePostId={setUpdatePostId} updatePostId={updatePostId} setUpdateModal={setUpdateModal} updateModal={updateModal} setPostDetails={setPostDetails}/>
      </div>
      {updateModal && postDetails && 
      <div className='absolute top-20 left-1/4 bg-white  w-2/4 h-3/4'>
       
        <div><Image src={postDetails.imageUrl} alt="" width="500" height="500"/></div>
        <div></div>

        

      </div>}
    </div>
  )
}
export default Profile;

