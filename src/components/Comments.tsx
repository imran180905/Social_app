import axios from 'axios';
import React, { useEffect, useState } from 'react'

type singleDataTypes = {
  id: number;
  body: string;
  postId: number
};

export default function Comments({id}:singleDataTypes) {
  const [data, setData] = useState<singleDataTypes[] | []>([]);
  const [comment,setComment] = useState<singleDataTypes[] | []>([]);
      useEffect(() => {
        axios
          .get("https://dummyjson.com/comments")
          .then((response) => {
            setData(response.data.comments);
            console.log(response.data.comments);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    useEffect(() => {
      const filteredComments = data?.filter((comment: singleDataTypes) => comment?.postId === id);
      
      setComment(filteredComments)
    },[data])
    console.log(comment)
      
  return (
    <>
    {comment.length == 0 ? "" : <p>see {comment.length} comments</p>}
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
        
    </>
  )
}
