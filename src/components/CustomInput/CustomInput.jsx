import React from "react";
import './CustomInput.css'

const CustomInput = ( props ) => {
    return (
        <div style={{ boxSizing:'border-box'}}>
            <div>
                <div className='title-container'>
                    <h5>{props.title}</h5>
                </div>
                <div style={{ display: 'flex'}} className='text-container'>
                    <input type='text' />
                    <p>{props.value}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomInput;
