import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Styles from './ToggleModal.module.css'
import Link from 'next/link';

  interface ToggleModalProps {
    isOpen: boolean;
    handleClose: () => void;
    selectedPostId: string | null;
    data: any;
    setData: any;
  }

  const ToggleModal: React.FC<ToggleModalProps> = ({ isOpen, handleClose, selectedPostId, data, setData}) => { 
 
  const handleDelete = () => {
    if (selectedPostId !== null) {
      fetch(`/api/posts/${selectedPostId}`, {
        method: 'DELETE',
        // headers: {
        //   "Content-Type": "application/json"
        // }
      })
      .then(() => {
        setData(data.filter((post: { id: string; }) => post.id !== selectedPostId));
        console.log(data)
        handleClose();
      })
    }
    console.log(selectedPostId)
  };
 
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
              <div className={Styles.line}></div>
              <Link href='' className={Styles.link}>
                Follow 
              </Link>
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

export default ToggleModal