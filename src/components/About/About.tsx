import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Select } from '@mui/material';
import Styles from './About.module.css'

interface ModalContent {
    title: string;
    choices: string[];
  }  

export default function About() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
    const [allSelectedChoices, setAllSelectedChoices] = useState<string[][]>([]); // Store selected choices for all modals

    const modals: ModalContent[] = [
      {
        title: 'Text in a modal 1',
        choices: ['Red', 'Green', 'Blue'],
      },
      {
        title: 'Text in a modal 2',
        choices: ['abc', 'def'],
      },
      {
        title: 'Text in a modal 3',
        choices: ['ght', 'jkl', 'mno', 'pqrst'],
      },
    ];

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

      useEffect(() => {
        setSelectedChoices(allSelectedChoices[modalIndex] || []);
      }, [modalIndex, allSelectedChoices]);

      // const handlePrevModal = () => {
      //   setModalIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      // };
      const handlePrevModal = () => {
        setModalIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setSelectedChoices(allSelectedChoices[modalIndex - 1] || []); // Show selected choices when going back
      };
      const handleNextModal = () => {
        setModalIndex((prevIndex) => Math.min(prevIndex + 1, modals.length - 1));
        setAllSelectedChoices((prevChoices) => {
          // Save the selected choices for the current modal when moving to the next
          const updatedChoices = [...prevChoices];
          updatedChoices[modalIndex] = selectedChoices;
          console.log(updatedChoices)
          return updatedChoices;
        });
      };
    
      const handleChoiceChange = (choice: string) => {
        setSelectedChoices((prevChoices) =>
          prevChoices.includes(choice) ? prevChoices.filter((c) => c !== choice) : [...prevChoices, choice]
        );
      };
      

      // const handleNextModal = () => {
      //   // Reset selected choices for the next modal
      //   setSelectedChoices([]);
      //   // Move to the next modal
      //   setModalIndex((prevIndex) => Math.min(prevIndex + 1, modals.length - 1));
      // };

      // const handleNextModal = () => {
      //   // Save the selected choices before moving to the next modal
      //   setSelectedChoices((prevChoices) => {
      //     const currentModalChoices = modals[modalIndex].choices;
      //     return [...prevChoices.slice(0, modalIndex), ...currentModalChoices.filter((choice) => prevChoices.includes(choice))];
      //   });
    
      //   // Move to the next modal
      //   setModalIndex((prevIndex) => Math.min(prevIndex + 1, modals.length - 1));
      // };
      // const handleChoiceChange = (choice: string) => {
      //   setSelectedChoices((prevChoices) =>
      //     prevChoices.includes(choice) ? prevChoices.filter((c) => c !== choice) : [...prevChoices, choice]
      //   );
      // };
   
  return (
    <>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" className={Styles.modal}>
            <form className={Styles.form}>
            {modals[modalIndex].choices.map((choice, index) => (
              // <Button
              //   key={index}
              //   variant={selectedChoices.includes(choice) ? 'contained' : 'outlined'}
              //   style={{ margin: '5px', backgroundColor: "pink" }}
              //   onClick={() => handleChoiceChange(choice)}
              // >
              //   {choice}
              // </Button>
              <label key={index} className={`${Styles.selectButton} `}>
              <input
                type="checkbox"
                // value={index}
                checked={selectedChoices.includes(choice)}
                onClick={() => handleChoiceChange(choice)}
                name="options"
              />
              <span className={Styles.choice }>{choice}</span>
            </label>
            ))}
            </form>

            <div style={{display: 'flex'}}>
            <Button onClick={handlePrevModal}  disabled={modalIndex === 0}>Pervious</Button>
            <Button onClick={handleNextModal}  disabled={modalIndex === modals.length - 1}>Next </Button>
        </div>
        </Typography>
        
        </Box>
        </Modal>
    </>
  )
}
