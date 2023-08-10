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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CircularProgress from '@mui/material/CircularProgress';

type singleDataTypes = {
  id: string;
  body: string;
  postId: string;
  title: string;
  image: string; 
  onSubmit: (formData: { singleComment: string }) => void;
  username: string;
  handleToggleModal: any;
  handleOpen: any;
  handleClose: any;
  open: any;
  selectedPostId: any;
  submittedComments: any;
   setSubmittedComments: any;
   handleToggleModal2: any;
};


export default function Comments({id, title, image, onSubmit, username, handleToggleModal, 
  handleClose, handleOpen, open, selectedPostId, submittedComments, setSubmittedComments, handleToggleModal2
}:singleDataTypes) {
  // const [data, setData] = useState<singleDataTypes[] | []>([]);
  const [comment,setComment] = useState<singleDataTypes[] | []>([]);
  //  const [open, setOpen] = React.useState(false);
  const [singleComment, setSingleComment] = useState<string>('');
  const [isPosting, setIsPosting] = useState<boolean>(false);
  // const [submittedComments, setSubmittedComments] = useState<string[]>([]);

  const [displayedCommentIndex, setDisplayedCommentIndex] = useState<number>(0);
  const [showAllComments, setShowAllComments] = useState<boolean>(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

    useEffect(() => {

      const filteredComments = comment?.filter((comment: singleDataTypes) => comment?.postId === selectedPostId);
      console.log(selectedPostId)
      
      setComment(filteredComments)
    },[selectedPostId])
   // console.log(selectedPostId)
    // Function to check if at least one letter is typed
  const isLetterTyped = (text: string) => {
    return text.trim().length > 0;
  };

  const handleSubmit = async () => {
    // if there's no text typed
    if (!isLetterTyped(singleComment)) {
      return;
    }
    setIsPosting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle your form submission logic here
      setSubmittedComments((prevComments:any) => [...prevComments, singleComment]);

      // Call the onSubmit prop and pass the comment data
      onSubmit({ singleComment });
      console.log({singleComment})

      // Reset the comment state after submission
      setSingleComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    } finally {
      setIsPosting(false);
    }
  };
    // Load submitted comments from local storage on component mount
    // useEffect(() => {
    //   const storedComments = localStorage.getItem('submittedComments');
    //   if (storedComments) {
    //     setSubmittedComments(JSON.parse(storedComments));
    //   }
    // }, []);
  
    // // Update local storage whenever submitted comments change
    // useEffect(() => {
    //   localStorage.setItem('submittedComments', JSON.stringify(submittedComments));
    // }, [submittedComments]);

    // const handleCommentDisplay = () => {
    //   setShowAllComments(true);
    //   setDisplayedCommentIndex(0);
    //   handleOpen();
    // };
  
    // const handleNextComment = () => {
    //   if (displayedCommentIndex < submittedComments.length - 1) {
    //     setDisplayedCommentIndex(displayedCommentIndex + 1);
    //   }
    // };
  
    // const handlePreviousComment = () => {
    //   if (displayedCommentIndex > 0) {
    //     setDisplayedCommentIndex(displayedCommentIndex - 1);
    //   }
    // };

  return (
    <>
    <div>
    <div>
    {/* {submittedComments.length > 0 && <button onClick={handleOpen}>view all {submittedComments.length} comments</button>} */}
     {/* Display the submitted comments */}
       {submittedComments.length > 0 && showAllComments && (
          <div className='flex items-center gap-2'>
            <Image src={carosol} alt='' className='userLogo' />
            <div>{submittedComments[displayedCommentIndex]}</div>
          </div>
        )}
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
            <CircularProgress/>
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
          <Image className={Styles.img} src={image} alt='' width={500} height={500}/>
        </div>
        <Box >
        <Typography id="modal-modal-title" component="div" className={Styles.modalDetailsSection} >
       <div>
          <div className={Styles.userFirstSection}>
            <h4>{username} 
            <FiberManualRecordIcon style={{fontSize: '9px', color: 'gray'}}/>
              <button className={Styles.followButton}> Follow</button>
            </h4>
               
            <Button onClick={handleToggleModal2}><MoreHorizIcon/></Button>
          </div>
          

          <div className={Styles.line}></div>
</div>
{/* Scroll add from here */}
         <div className={`${Styles.scrollableContainer} ${Styles.commentsContainer}`}>
          <div>     

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
                  
                 
              </div>
            )}
          </div>
        );
        })}
        
        </div>
        

        {/* finish scroll */}
         {/* Display the submitted comments */}
         <div style={{display: 'grid', gap: '10px'}}>
         {submittedComments.map((submittedComment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
                    <div key={index} className='flex items-center gap-5'>
                      <Image src={carosol} alt='' className='userLogo'/>
                    <h1 className={Styles.body}>{submittedComment}</h1>
                    </div>
                  ))}
         </div>
        
        </div>
<div className={Styles.lastSection}>
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
            <form className={Styles.form} onClick={handleSubmit}>
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
                <CircularProgress/>
              </div>
            )}
            <div>
            {isLetterTyped(singleComment) && (
            <Button type="button" className="text-blue-500" >
              Submit
            </Button>
          )}
            </div>
            </form>
          </div>
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