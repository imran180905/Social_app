import Image from "next/image";
import LOGO from "../asset/LOGO.png";
import homeActive from "../asset/home-active.png";
import Vector from "../asset/Vector.png";
import trends from "../asset/likes.png";
import add from "../asset/add.png";
import likes from "../asset/likes.png";
import search from "../asset/search.png";

const Layout = ({
    children,   
  }: {
    children: React.ReactNode
    
  }) => {
    return ( 
    <div>
        <div className="flex bg-white place-content-around  min-w-full items-center p-4">
            <div>
                < Image src={LOGO} alt=""/>
            </div>
            <div className="relative">
                <Image src={search} alt="" className="absolute left-2 top-6" />
                <input type="text" placeholder="search"className="px-8 py-4 bg-gray-200 border-2 rounded-md border-solid border-gray-200"/>
            </div>

            <div className="flex h-6 space-x-4" >
                <Image src={homeActive} alt=""/>
                <Image src={Vector} alt=""/>
                <Image src={trends} alt=""/>
                <Image src={add} alt=""/>
                <Image src={likes} alt=""/>
            </div>
        </div>
    <div>{children}</div>
    </div> );
}
 
export default Layout;