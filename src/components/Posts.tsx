import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsChat, BsSend } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Vector from "../asset/Vector.png";
import save from "../asset/save-instagram.png";
import Comments from "./Comment/Comments";
import SeeMoreText from "./SeeMore";
import carosol from "../asset/carousel 2.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ToggleModal from "./Post/ToggleModal";
import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { headers } from "next/dist/client/components/headers";

type singleDataTypes = {
  userId:string,
  id: string,
  caption:string,
  username:string,
  imageUrl:string,
  reactions: number;
};

const Posts = ({setData,data}:any) => {
  // const [data, setData] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [submittedComments, setSubmittedComments] = useState<string[]>([]);

  const [open, setOpen] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false)
  const handleModalOpen = (id: any) => {
    setSelectedPostId(id)
 
    setCommentModalOpen(true)
  }
  const handleModalClose = () => setCommentModalOpen(false);
  let refetch = '';

  const handleClose = () => setOpen(false);
  
  const handleToggleModal = (id: any) => {
   setSelectedPostId(id)

    setOpen(true);

  }
  const handleToggleModal2 = (id: any) => {
    setSelectedPostId(id)
      setOpen(true);
  }

  useEffect(() => {  
    fetch('/api/posts')
    .then((res)=> res.json())
    .then(data=> {setData(data);
    console.log(data);})
    .catch((error)=> console.log(error))

  }, [refetch]);

    const handleSubmitComment = (formData: { singleComment: string }) => {
    // Handle your form submission logic here, e.g., sending the comment to the server
    // console.log('Submitted comment:', formData.singleComment);
  };
  
 
  return (
    <>
      {data.map((singleData: singleDataTypes,  index: number) => (
        <div key={singleData.id}>
          <div className="flex justify-center mt-6">
            {singleData && (
              <div className="min-w-[600px] bg-white">
                <div className="flex items-center place-content-between bg-white p-4  ">
                  <div className="flex space-x-2">
                  <div className='userLogoSection'><Image src={carosol} className='userLogo' alt=''/></div>
                  <h1>{singleData.username}</h1>
                  </div>
                  <div className="flex">
                  <Button  onClick={() => {handleToggleModal(singleData.id)}}>
                    <MoreHorizIcon style={{color: 'gray'}} />
                    
                  </Button>
                  </div>
                </div>
                <div className="h-[600px]">
                <Image src={singleData.imageUrl} alt="" className="new" width="600" height="100"/>
                </div>
                <div className="flex items-center place-content-between bg-white p-4">
                  <div className="flex space-x-2 " style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                   
                    <FiHeart size={30}/>
                    <button style={{color: 'black'}} onClick={() => handleModalOpen(singleData.id)}><BsChat size={30} /></button>
                    <BsSend size={30} />
                  </div>
                  <div>
                    <Image src={save} alt="" height="24" />
                  </div>
                </div>
                <div className="px-2 md:px-4 py-3 md:py-6 w-full text-slate-800 ">
                  
                  {/* <p >{singleData?.body}</p> */}
                  <p className="font-weight-bold">
                    {singleData.reactions} likes
                  </p>
                  <SeeMoreText text={singleData?.caption} />
                  {submittedComments.length > 0 && <button onClick={() => handleModalOpen(singleData.id)}>view all {submittedComments.length} comments</button>}
                  
                  
                  {selectedPostId === singleData.id && (
                  <Comments id={singleData?.id} body={""} postId={"0"} title={singleData?.caption} 
                  image={singleData.imageUrl}
                  onSubmit={handleSubmitComment}
                  username={singleData.username}
                  handleToggleModal={handleToggleModal}
                  handleOpen={() => handleModalOpen(singleData.id)} handleClose={handleModalClose}        
                  open={commentModalOpen}
                  // handleDeleteModalClose={handleClose}
                  selectedPostId={singleData.id}
                  submittedComments={submittedComments}
                   setSubmittedComments={setSubmittedComments}
                   handleToggleModal2={handleToggleModal2}
                  />
                  )}
                 
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <ToggleModal isOpen={open} handleClose={handleClose} selectedPostId={selectedPostId} data={data} setData={setData}/>
      
    </>
  );
};

export default Posts;