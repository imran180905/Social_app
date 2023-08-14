import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Styles from '../Post/ToggleModal.module.css';
import Link from 'next/link';

  interface ToggleModalProps {
    isOpen: boolean;
    setOpen:any;
    updatePostId: string | null;
    
  }

  const OptionsModal: React.FC<ToggleModalProps> = ({ isOpen,setOpen,updatePostId}) => { 
    const handleClose = () => setOpen(false);
 
  const handleDelete = () => {
    if (updatePostId !== null) {
      fetch(`/api/posts/${updatePostId}`, {
        method: 'DELETE',
        // headers: {
        //   "Content-Type": "application/json"
        // }
      })
      .then(() => {
        // setData(data.filter((post: { id: string; }) => post.id !== selectedPostId));
        // console.log(data)
        handleClose();
      })
    }
    console.log(updatePostId)
  };
 const handleUpdate=()=>{
    
 }
  return (
    <>
    <div >
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={Styles.box}>
        <Box >
          <Typography id="modal-modal-title"  className='bg-gray'>
            <div>
              
              <Button className={Styles.link} style={{color: 'brown', padding: '18px'}} onClick={handleDelete}>
                Delete
              </Button>
              <Button className={Styles.link} style={{color: 'brown', padding: '18px'}} onClick={handleUpdate}>
                Edit
              </Button>
              <div className={Styles.line}></div>
              <Link href='' className={Styles.link}>
                Add to favorites 
              </Link>
              <div className={Styles.line}></div>
              <Link href='' className={Styles.link}>
                Go to post 
              </Link>

              <div className={Styles.line}></div>
              <Link href='' className={Styles.link}>
                Share to...
              </Link>
              <div className={Styles.line}></div>
              <Link href='' className={Styles.link}>
                Copy link 
              </Link>
              <div className={Styles.line}></div>
              <Link href='' className={Styles.link}>
                Embed 
              </Link>
              
              <div className={Styles.line}></div>
              <Link href='' onClick={handleClose} className={Styles.link}>
                Cancel 
              </Link>
            </div>
          </Typography>
        </Box>
        </div>
        
      </Modal>
    </div>
    </>
  )
}

export default OptionsModal;