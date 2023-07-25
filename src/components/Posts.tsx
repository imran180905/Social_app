import Image from "next/image";
import Vector from "../asset/Vector.png";
import options from "../asset/options.png";
import redheart from "../asset/redheart.png";
import like from "../asset/likes.png";
import bookmark from "../asset/bookmark.png";
import save from "../asset/save-instagram.png";
import share from"../asset/share.png";

const Posts = () => {
    return ( <div className="flex justify-center mt-6">
        <div className="min-w-[600px]">

        
        <div className="flex items-center place-content-between bg-white p-4  ">
            <div className="flex space-x-2">
                <Image src={Vector} alt=""/>
                <div>name</div>
            </div>
            <div className="flex">
            <Image src={options} alt=""/>
            <Image src={options} alt=""/>
            <Image src={options} alt=""/>
            </div>

       
        </div>
        <div className ="h-[600px]">
             <Image src="" alt="" />

        </div >
        <div className="flex items-center place-content-between bg-white p-4">
            <div className ="flex space-x-2">
            <Image src={like} alt=""  height="24"/>
            <Image src={Vector} alt=""  height="24"/>
            <Image src={share} alt=""  height="24"/>
            </div>
            <div>
            <Image src={save} alt="" height="24"/>
            </div>
        </div>
        <h1>title</h1>
        <p>Lorem ipsum dolor sit amet.lorem</p>
        </div>
    </div>);
}
 
export default Posts;