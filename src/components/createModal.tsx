import { Button } from "@mui/material";
import { useState } from "react";

const CreateModal = ({ setModal, modal,refetchData }: any) => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleCreate = async () => {
    setModal("");

    const response = await fetch("/api/posts/new", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        username: "Mansura",
        caption: caption,
        reactions: 0,
        userId: " 10",
        imageUrl: image,
      }),
    });
    refetchData();
    
  };

  return (
    <>
      {modal === "modal1" && (
        <div className=" absolute bg-white top-24 left-56 p-8 ">
          <input
            type="text"
            placeholder="place image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              setModal("modal2");
            }}
          >
            Select photos
          </Button>
        </div>
      )}
      {modal === "modal2" && (
        <div className=" absolute bg-white top-24 left-56 p-8 ">
          <img src="" alt="no image" />
          <input
            type="text"
            placeholder="add caption"
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
          />
          <Button onClick={handleCreate}>create</Button>
        </div>
      )}
    </>
  );
};

export default CreateModal;