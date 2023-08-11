import React, { useEffect, useState } from 'react'
import ProfileHeader from './ProfileHeader'
import Styles from './Profile.module.css'
import GridOnIcon from '@mui/icons-material/GridOn';
import ItemList from './ItemList';
import { GetServerSidePropsContext } from "next";
import { IProduct } from '@/pages/profile';
import { dividerClasses } from '@mui/material';

  type Props = {
    products: IProduct[];
  };
  
  const Profile = ({products}: Props) => {
    const [userPosts, setUserPosts] = useState([]);
    const [updatePostId, setUpdatePostId] = useState("");
    const [updateModal, setUpdateModal] = useState(false);
    

    useEffect(()=>{
      fetch("/api/posts/6")
      .then((res)=> res.json())
      .then((data)=>{
        setUserPosts(data[0]);
        
      })
    },[])
  return (
    <div className = "relative">
      <div style={{margin: '0 200px'}}>
      <ProfileHeader/>
      <div className={Styles.postSection}>
        <GridOnIcon style={{fontSize: '12px'}}/>
        <p className={Styles.post}>posts</p>
      </div>
      <ItemList userPosts={userPosts} setUpdatePostId={setUpdatePostId} setUpdateModal={setUpdateModal} updateModal={updateModal}/>
      </div>
      {updateModal && 
      <div className='absolute top-48 left-48 bg-white p-8'>
        <h1>update modal</h1>

      </div>}
    </div>
  )
}
export default Profile;

