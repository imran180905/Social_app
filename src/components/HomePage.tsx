import { useEffect, useState } from "react";
import Layout from "./Layout";
import Posts from "./Posts";
import axios from 'axios';
const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/posts")
    .then((response)=>{
        // setData(response.data.)
        console.log(response.data)
   
}).catch((error)=>{console.log(error)})
        
    },[])
    console.log(data,".......");
    return ( <Layout>
        <div className="grid grid-cols-3 gap-8">
            <div></div>
            <div>
                {/* {data.map((singleData:any,index)=>(
                    <div key ={index}><Posts singleData={singleData}/></div>
                ))} */}
            
            </div>
            <div>
                sidecontents
            </div>
        </div>
    </Layout> );
}
 
export default HomePage;