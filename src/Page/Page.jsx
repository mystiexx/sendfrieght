import React, { useState } from "react";
import Switch from "../components/Switch/Switch";
import "./Page.css";
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdLocationOn, MdAirplanemodeActive } from 'react-icons/md'
import { BsArrowLeftShort } from 'react-icons/bs'
import CustomInput from "../components/CustomInput/CustomInput";
import { FaTruck } from 'react-icons/fa'
import { RiShipFill } from 'react-icons/ri'
import { GiPoliceOfficerHead } from 'react-icons/gi'
import Top from "./Top";

const arr = [
    {
        id: 1,
        title: "Air Freight",
        icon: <MdAirplanemodeActive/>
    },
    {
        id: 2,
        title: "Sea Freight",
        icon: <RiShipFill/>
    },
    {
        id: 3,
        title: "Inland (Truck & Barge)",
        icon: <FaTruck/>,
    },
    {
        id: 4,
        title: "Customs Clearance",
        icon: <GiPoliceOfficerHead/>
    },
];

const Home = () => {
    const [active, setActive] = useState("Dimensions");
    return (
        <div className='Body'>
              <Top/>
            <div style={{ marginLeft:'80px', marginRight:'85px', marginTop: '40px'}}>
                {/* service box */}
                <div className="box">
                    <h5> Select a service</h5>
                    <div className="frame">
                        {arr.map((data) => (
                            <div key={data.key} className="frame-container">
                                <h4>{data.title}</h4>
                                <p style={{ fontSize:'5rem', position:'absolute', left:'70%', top:'-70%'}}>
                                {data.icon}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="box" style={{ marginTop: "20px", paddingTop: "25px" }}>
                    <AiOutlineInfoCircle size={20}/>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop:'10px' }}>
                        <div className="btn">
                            <button>Import</button>
                            <button>Export</button>
                        </div>

                        <div className="input-field" style={{ display: 'flex'}}>
                            <MdLocationOn/>
                            <input type="text" placeholder="From City or port" />
                        </div>

                        <div className="input-field" style={{ marginLeft: "10px", display:'flex' }}>
                            <MdLocationOn/>
                            <input type="text" placeholder="To City or port" />
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "30px",
                        }}
                    >
                        <div className="input-field" style={{ marginLeft: "0" }}>
                            <input type="date" placeholder="Ready Date" />
                        </div>

                        <div className="input-field" style={{ marginLeft: "10px" }}>
                            <select>
                                <option>incoterms</option>
                            </select>
                        </div>

                        <div className="input-field" style={{ marginLeft: "10px", width:'auto' }}>
                            <input type="text" placeholder="Total Cargo Value" />
                        </div>
                    </div>
                </div>

                {/* third box */}

                <div className="box" style={{ marginTop: "20px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignContent: "center",
                        }}
                    >
                        <h5> Cargo Details</h5>
                        <div style={{ display: "flex", alignItems:'center'}}>
                            <div>
                                <Switch />
                            </div>

                            <h6>Dangerous Cargo (ex, Chemicals, Battery)</h6>
                        </div>
                    </div>

                    <div className="Tab">
                        <div onClick={() => setActive("Dimensions")}>
                            <div
                                key="Dimensions"
                                className={active === "Dimensions" ? "active" : ""}
                            >
                                <p>Total Dimensions</p>
                            </div>
                        </div>
                        <div onClick={() => setActive("Package")}>
                            <div key="Package" className={active === "Package" ? "active" : ""}>
                                <p>Package Details</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex '}}>
                        <CustomInput title='Total Volume' value='cbm'/>
                        <div style={{ marginLeft: '30px'}}>
                        <CustomInput title='Total Weight' value='kg'/>
                        </div>
                    </div>
                </div>
                {/* end of third box */}

                {/* fourth box */}
                <div className="box" style={{ marginTop: "20px" }}>
                    <h5> Additional Services</h5>
                    <div className="grid">
                        <div className="grid-item">
                            <div style={{ display: "flex" }}>
                                <div style={{ marginTop:'10px'}}>
                                    <Switch />
                                </div>
                                <div style={{ marginLeft: '25px'}}>
                                    <p>Export Forwarding</p>
                                    <p>We handle customer clearance and documentation</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div style={{ display: "flex" }}>
                                <div style={{ marginTop:'10px'}}>
                                    <Switch />
                                </div>
                                <div  style={{ marginLeft: '25px'}}>
                                    <p>Import Customs Clearance</p>
                                    <p>We handle import customs and regulatory requirements</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item" style={{ marginTop: '25px'}}>
                            <div style={{ display: "flex" }}>
                                <div style={{ marginTop:'10px'}}>
                                    <Switch />
                                </div>
                                <div  style={{ marginLeft: '25px'}}>
                                    <p>Cargo Insurance</p>
                                    <p>Protect your cargo from logistics risks up to its full value</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item" style={{ marginTop: '25px'}}>
                            <div style={{ display: "flex" }}>
                                <div style={{ marginTop:'10px'}}>
                                    <Switch />
                                </div>
                                <div  style={{ marginLeft: '25px'}}>
                                    <p>Transport / Delivery </p>
                                    <p>We deliver the cargo to your door step from the ports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Home;
