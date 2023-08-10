
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

type singleDataTypes = {
  userId:string,
  id: string,
  caption:string,
  username:string,
  imageUrl:string,
  reactions: number;
};
const Posts = ({setData,data}:any) => {
 
  

  const [imageUrl, setImageUrl] = useState([]);
 

  useEffect(() => {
    const apiUrl ='/api/posts' ;
    

    fetch(apiUrl)
    .then((res)=> res.json())
    .then(data=> {setData(data);
    console.log(data);})
    .catch((error)=> console.log(error))

    
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/posts")
  //     .then((response) => {
  //       setData(response.data.posts);
  //       console.log(response.data.posts);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  //   console.log(data, ".......");

  const handleSubmitComment = (formData: { singleComment: string }) => {
    // Handle your form submission logic here, e.g., sending the comment to the server
    console.log('Submitted comment:', formData.singleComment);
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
                  <MoreHorizIcon/>
                  </div>
                </div>
                <div className="h-[600px]">
                <Image src={singleData.imageUrl} alt="" className="new" width="600" height="100"/>
                </div>
                <div className="flex items-center place-content-between bg-white p-4">
                  <div className="flex space-x-2 ">
                   
                    <FiHeart size={30}/>
                    <BsChat size={30} />
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
                  <Comments id={singleData?.id} body={""} postId={"0"} title={singleData?.caption} image={imageUrl[index]} onSubmit={handleSubmitComment} />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;