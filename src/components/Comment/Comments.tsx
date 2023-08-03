import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Styles from './Comments.module.css';
import Image from 'next/image';
import carosol from "../../asset/carousel 2.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Vector from "../../asset/Vector.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { LuSend } from 'react-icons/lu';
import { FiHeart } from 'react-icons/fi';

type singleDataTypes = {
  id: number;
  body: string;
  postId: number;
  title: string;
  image: string; 
  onSubmit: (formData: { singleComment: string }) => void;
};


export default function Comments({id, title, image, onSubmit}:singleDataTypes) {
  const [data, setData] = useState<singleDataTypes[] | []>([]);
  const [comment,setComment] = useState<singleDataTypes[] | []>([]);
  const [open, setOpen] = React.useState(false);
  const [singleComment, setSingleComment] = useState<string>('');
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [submittedComments, setSubmittedComments] = useState<string[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
      useEffect(() => {
        axios
          .get("https://dummyjson.com/comments")
          .then((response) => {
            setData(response.data.comments);
            // console.log(response.data.comments);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    useEffect(() => {
      const filteredComments = data?.filter((comment: singleDataTypes) => comment?.postId === id);
      
      setComment(filteredComments)
      //const pp = data?.filter((comment: singleDataTypes) => comment?.postId === id)

    },[data])

    // Function to check if at least one letter is typed
  const isLetterTyped = (text: string) => {
    return text.trim().length > 0;
  };

  const handleSubmit = async () => {
    // Avoid posting the comment if there's no text typed
    if (!isLetterTyped(singleComment)) {
      return;
    }
    setIsPosting(true);

    try {
      // Simulate a 2-second loading delay (replace this with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle your form submission logic here
      setSubmittedComments((prevComments) => [...prevComments, singleComment]);

      // Call the onSubmit prop and pass the comment data
      onSubmit({ singleComment });

      // Reset the comment state after submission
      setSingleComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <>
    <div>
    <div>
    {submittedComments.length > 0 && <button onClick={handleOpen}>view all {submittedComments.length} comments</button>}
     {/* Display the submitted comments */}
      {submittedComments.map((submittedComment, index) => (
        <div key={index} className='flex items-center gap-2'>
          <Image src={carosol} alt='' className='userLogo'/>
        <div>{submittedComment}</div>
        </div>
      ))}
    </div>
    
      <div className="flex justify-between">
        <input
          className="focus:outline-none border-none"
          placeholder="Add a comment..."
          value={singleComment}
          onChange={(e) => setSingleComment(e.target.value)}
          disabled={isPosting}
        />
        {isPosting && (
          <div className="animate-spin">
            {/* Replace this with your loading icon */}
            <span>Loading...</span>
          </div>
        )}
        <div>
          {isLetterTyped(singleComment) && (
            <Button type="button" className="text-blue-500" onClick={handleSubmit}>
              Submit
            </Button>
          )}
          <SentimentSatisfiedAltIcon
            style={{ color: 'gray', fontSize: '20px', marginLeft: '10px' }}
          />
        </div>
      </div>
    </div>
   
    <div>
    
    {/* {comment.length == 0 ? "" : <button className={Styles.commentShow} onClick={handleOpen}>view all {comment.length} comments</button>} */}

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        >
        <div className={Styles.box}>   
        <div className={Styles.imgSection}>
          <Image className={Styles.img} src={image} alt='' width={100} height={100}/>
        </div>
        <Box >
        <Typography id="modal-modal-title" component="div" className={Styles.modalDetailsSection} >
          <div>
            
          </div>
          <div className={Styles.userFirstSection}>
            <h4>artsybeats 
              <button className={Styles.followButton}>Follow</button>
            </h4>
            
            <MoreHorizIcon/>
          </div>

          <div>     
          <div className={Styles.line}></div>
        <h3 className={Styles.title}>{title}</h3>
        {comment?.map((singleData: any) => {

        return (
          <div key={id}>
            
            {singleData && (
              <div className={Styles.userComment}>
                <div className='flex items-center gap-2'>
                <div className={Styles.userLogoSection}><Image src={carosol} className={Styles.userLogo} alt=''/></div>
                  <h1 className={Styles.body}>{singleData.body}</h1>
                </div>
                  
                  {/* Display the submitted comments */}
                  {submittedComments.map((submittedComment, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <Image src={carosol} alt='' className='userLogo'/>
                    <h1 className={Styles.body}>{submittedComment}</h1>
                    </div>
                  ))}
              </div>
            )}
          </div>
        );
        })}
        
        </div>
        
        <div className={Styles.last}> 
        <div className={Styles.line}></div>

        <div className={Styles.vector}>
          <div className={Styles.singleVector}>
            <FiHeart size={30}/>
            <Image src={Vector} alt="" height="24" />
            <LuSend  size={30}/>
          </div>
          <div className={Styles.singleVector}>
            <BookmarkBorderOutlinedIcon/>
          </div>
        </div>

        <div className={Styles.line}></div>
        </div>
        <div className={Styles.commentSection}>
          <SentimentSatisfiedAltIcon/>
          <div className={Styles.comment}>
            <form className={Styles.form}>
            <input
              className="focus:outline-none border-none"
              placeholder="Add a comment..."
              value={singleComment}
              onChange={(e) => setSingleComment(e.target.value)}
              disabled={isPosting}
            />
            {isPosting && (
              <div className="animate-spin">
                {/* Replace this with your loading icon */}
                <span>Loading...</span>
              </div>
            )}
            <div>
            {isLetterTyped(singleComment) && (
            <Button type="button" className="text-blue-500" onClick={handleSubmit}>
              Submit
            </Button>
          )}
            </div>
            </form>
          </div>
        </div>
        </Typography>

        </Box>
        </div>
        </Modal>
    </div>
    
        
    </>
  )
}
