import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import './Addcart.css'


const Addcart = () => {
    return (
        <div className="container">
            <AiOutlinePlus />
            <p>0</p>
            <AiOutlineMinus />
        </div>
    )
}

export default Addcart