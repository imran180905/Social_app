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
import profilepic from "../../asset/profilepic.jpeg";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ToggleModal from '../Post/ToggleModal';
import OptionsModal from './OptionsModal';


  type Props = {
    products: IProduct[];
  };
  
  const Profile = ({products}: Props) => {
    const [userPosts, setUserPosts] = useState([]);
    const [updatePostId, setUpdatePostId] = useState("");
    const [updateModal, setUpdateModal] = useState(false);
    const [postDetails, setPostDetails] = useState<singleDataTypes>();
    const [open, setOpen] = useState(false);
    

    useEffect(()=>{
      fetch("/api/posts/6")
      .then((res)=> res.json())
      .then((data)=>{
        setUserPosts(data[0]);
        
      })
    },[])

    const handleOptionsModal = (id: any) => {
       setOpen(!open);
   
     }

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
      <div className='absolute top-20 left-32 ml-44 bg-white flex w-3/5 h-[620px] ' >
        
        <div className='w-1/2 flex items-center relative'>
        <div onClick={()=>{setUpdateModal(false)}}className='absolute top-2 left-2 cursor-pointer'><CloseIcon/></div>
          <img className=' w-full' src={postDetails.imageUrl} alt="" /></div>
        <div className='w-7/12 h-full'>
          <div className='w-full flex justify-between p-5'>
            <div className='flex'>
             
            <Image className='rounded-full' src={profilepic} alt="" width="32" height="32"/>
            <h1 className='px-5'>{postDetails.username}</h1>
            </div>
            <div onClick={handleOptionsModal}><MoreHorizIcon/></div>

          </div>
          <hr className=" bg-gray-800 "/>
        
          <p className="p-5"><strong>{postDetails.username}</strong>   {postDetails.caption}</p>
        </div>
        <OptionsModal isOpen={open} setOpen={setOpen} updatePostId={updatePostId} />
        

      </div>}
    </div>
  )
}
export default Profile;

