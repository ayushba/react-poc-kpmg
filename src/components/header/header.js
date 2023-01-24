import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import './header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className='company-name'>XYZ Corporation</h1>

            <div className="search-contianer">
                <AiOutlineSearch className="search-icon" />
                <input className="search-input" type={"text"} placeholder="Search" />
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <AiOutlineShoppingCart style={{ fontSize: "25px", marginRight: "10px" }} />
                <div style={{ width: "60px", height: "60px" }}>
                    <img
                        style={{
                            borderRadius: "50%"
                        }}
                        height={"100%"}
                        width={"100%"}
                        src={require('../../images/default/default_profil_pic.jpeg')} />
                </div>
            </div>
        </div>
    )
}

export default Header