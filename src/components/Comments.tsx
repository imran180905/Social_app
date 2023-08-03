import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";

type singleDataTypes = {
  id: number;
  body: string;
  postId: number;
};

export default function Comments({ id }: singleDataTypes) {
  const [data, setData] = useState<singleDataTypes[] | []>([]);
  const [comment, setComment] = useState<singleDataTypes[] | []>([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/comments")
      .then((response) => {
        setData(response.data.comments);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filteredComments = data?.filter(
      (comment: singleDataTypes) => comment?.postId === id
    );

    setComment(filteredComments);
  }, [data, id]);
  // console.log(comment)

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {comment.length == 0 ? (
        ""
      ) : (
        <Button onClick={handleOpen}>view all {comment.length} comments</Button>
      )}
      {/* {comment?.map((singleData: any) => {
          
          return (
            <div key={id}>
              
              {singleData && (
                <div>
                  <h1>{singleData.body}</h1>
                </div>
              )}
            </div>
          );
        })} */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {comment?.map((singleData: any) => {
              return (
                <div key={id}>
                  {singleData && (
                    <div>
                      <h1>{singleData.body}</h1>
                    </div>
                  )}
                </div>
              );
            })}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
