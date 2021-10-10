import React from "react";
import { BsArrowLeftShort } from 'react-icons/bs'


const Top = () => {
    return (
        <>
            <div style={{ display:'flex', marginTop: "20px" }}>
                <BsArrowLeftShort size={40} />
            </div>
            <div style={{ marginRight: "50px", marginLeft: "40px" }}>
                <h4>New Booking </h4>
                <p className="text">
                    {" "}
                    Fill in the information below to get a quote or create a new booking
                </p>
            </div>
        </>
    );
};

export default Top
