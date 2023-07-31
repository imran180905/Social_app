import axios from "axios";
import { useEffect, useState } from "react";

export default function Button() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Replace 'YOUR_UNSPLASH_ACCESS_KEY' with your actual access key
    const accessKey = "RuvD7IWONnAz-VbvZ8pr5srRMKdNy5NypnB4bm950l4";
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&query=people`;

    axios
      .get(apiUrl)
      .then((response) => {
        const { urls } = response.data;
        setImageUrl(urls.regular);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);
  return <div>Button</div>;
}
