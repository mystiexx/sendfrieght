import React from "react";
import "./Header.css";
import { BsSearch } from 'react-icons/bs'

const header = () => {
    return (
        <div className="NavBar">
            <header>
                <h3>
                    {" "}
                    <span>send</span> FREIGHT
                </h3>

                <div className="input-field" style={{ display: 'flex', alignItems:'center', padding:'5px'}}>
                    <input type="text" placeholder="Search" />
                    <BsSearch color='white'/>
                </div>

                <div className='Btn'>
                    <button> Request Code</button>
                    <button> Book Shipment</button>
                </div>
            </header>
        </div>
    );
};

export default header;
