import axios from "axios";

export default function posts () {

return axios.get("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    response.data
    // console.log(response.data); 
}).catch((error)=>{console.log(error)
return[]});
    
};
 
