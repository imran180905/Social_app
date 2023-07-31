import Image from "next/image";
import Vector from "../asset/Vector.png";
import options from "../asset/options.png";
import redheart from "../asset/redheart.png";
import like from "../asset/likes.png";
import bookmark from "../asset/bookmark.png";
import save from "../asset/save-instagram.png";
import share from "../asset/share.png";
import posts from "./api/api";
import { useEffect, useState } from "react";
import axios from "axios";

type singleDataTypes = {
  id: string;
  title: string;
  body: string;
};
const Posts = () => {
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_UNSPLASH_ACCESS_KEY' with your actual access key
    const accessKey = 'RuvD7IWONnAz-VbvZ8pr5srRMKdNy5NypnB4bm950l4';
    const apiUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

    axios
      .get(apiUrl)
      .then(response => {
        setImageUrl(response.data);
        console.log(response.data)

      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

console.log(imageUrl,"image");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setData(response.data.posts);
        // console.log(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
//   console.log(data, ".......");

  return (
    <>
      {data.map((singleData: singleDataTypes) => (
        <div key={singleData.id}>
          <div className="flex justify-center mt-6">
            {singleData && (
              <div className="min-w-[600px] bg-white">
                <div className="flex items-center place-content-between bg-white p-4  ">
                  <div className="flex space-x-2">
                    <Image src={Vector} alt="" />
                    <div>name</div>
                  </div>
                  <div className="flex">
                    <Image src={options} alt="" />
                    <Image src={options} alt="" />
                    <Image src={options} alt="" />
                  </div>
                </div>
                <div className="h-[600px]">
                  {/* <Image src={imageUrl} alt="" width={300} height={300}/> */}
                </div>
                <div className="flex items-center place-content-between bg-white p-4">
                  <div className="flex space-x-2">
                    <Image src={like} alt="" height="24" />
                    <Image src={Vector} alt="" height="24" />
                    <Image src={share} alt="" height="24" />
                  </div>
                  <div>
                    <Image src={save} alt="" height="24" />
                  </div>
                </div>
                <h1>{singleData.title}</h1>
                <p>{singleData.body}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
