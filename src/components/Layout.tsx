import Image from "next/image";
import LOGO from "../asset/LOGO.png";
import homeActive from "../asset/home-active.png";
import Vector from "../asset/Vector.png";
import trends from "../asset/likes.png";
import add from "../asset/add.png";
import likes from "../asset/likes.png";
import search from "../asset/search.png";
import Link from "next/link";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CreateModal from "./createModal";

const Layout = ({
    children,   
  }: {
    children: React.ReactNode
    
  }) => {
  

  
    return ( 
    <div>
        
        
    <div>{children}</div>
    </div> );
}
 
export default Layout;