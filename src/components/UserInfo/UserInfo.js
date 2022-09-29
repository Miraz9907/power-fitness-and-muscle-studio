import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import logo from "../../Images/info.jpg";
import "./UserInfo.css";
import TimeRequired from "../TimeRequired/TimeRequired";
import Taost from "../Taost/Taost";

const UserInfo = (props) => {
  // console.log(props);
  const [click, setClick] = useState([]);
  const { requiredTime } = props;
  let gymTime = 0;
  for (const gym of requiredTime) {
    gymTime = gymTime + gym.time;
    console.log(gymTime);
  }

  const btn = [10, 20, 30, 40, 50];
  const [btn1, btn2, btn3, btn4, btn5,] =btn;
  // let breakTime = 0;

  const AddToLocal = (btn) => {
     setClick(btn);
    localStorage.setItem("breakTime", btn);
    const newClick = [...click, btn];
    setClick(newClick);
    

  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-evenly ">
        <div>
          <img src={logo} alt="" className=" rounded-circle info-img" />
        </div>
        <div>
          <h5>Md Merazur Rahman</h5>
          <div className="d-flex align-items-center justify-content-start">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <p className="">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="bg-light my-2 d-flex align-items-center justify-content-evenly rounded-3 p-1 mx-3">
        <div>
          <h4>
            72<small className="fs-6">kg</small>
          </h4>
          <p>Weight</p>
        </div>
        <div>
          <h4>5.8</h4>
          <p>Height</p>
        </div>
        <div>
          <h4>
            22<small className="fs-6">yrs</small>
          </h4>
          <p>Age</p>
        </div>
      </div>

      <h4 className="my-3 mx-4">Add A Break</h4>

      

      <div className="d-flex align-items-center justify-content-evenly bg-secondary rounded-2 mx-2 p-2">
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToLocal(btn1)}>{btn1}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToLocal(btn2)}>{btn2}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToLocal(btn3)}>{btn3}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToLocal(btn4)}>{btn4}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToLocal(btn5)}>{btn5}s</button>
      </div>

      <h4 className="my-3 mx-4">Exercise Details</h4>

      <div className="bg-light d-flex justify-content-evenly align-items-center p-2 rounded-3 my-2 mx-3">
      <h6>Exercise time</h6>
      <p> {gymTime}seconds</p>
      </div>

      <TimeRequired click={click}></TimeRequired>

      <Taost></Taost>

      


      
    </div>
  );
};

export default UserInfo;
