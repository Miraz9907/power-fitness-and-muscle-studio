import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import logo from "../../Images/info.jpg";
import "./UserInfo.css";
import TimeRequired from "../TimeRequired/TimeRequired";

const UserInfo = (props) => {
  console.log(props);
  const [click, setClick] = useState([]);
  const { requiredTime } = props;
  let gymTime = 0;
  for (const gym of requiredTime) {
    gymTime = gymTime + gym.time;
    console.log(gymTime);
  }

  const button = [10, 20, 30, 40, 50];
  const [button1, button2, button3, button4, button5,] =button;
  // let breakTime = 0;

  const AddToDb = (button) => {
     setClick(button);
    localStorage.setItem("breakTime", button);
    const newClick = [...click, button];
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

      <div className="bg-light my-2 d-flex align-items-center justify-content-evenly rounded-3 p-1">
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

      <h4 className="my-3">Add A Break</h4>

      

      <div className="d-flex align-items-center justify-content-evenly bg-secondary rounded-2 p-2 ">
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToDb(button1)}>{button1}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToDb(button2)}>{button2}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToDb(button3)}>{button3}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToDb(button4)}>{button4}s</button>
        <button className="btn btn-light text-primary border-1 rounded-circle p-2" onClick={() => AddToDb(button5)}>{button5}s</button>
      </div>

      <h4 className="my-3 ">Exercise Details</h4>

      <div className="bg-light d-flex justify-content-evenly align-items-center p-2 rounded-3 my-2">
      <h6>Exercise time</h6>
      <p> {gymTime}seconds</p>
      </div>

      <TimeRequired click={click}></TimeRequired>

      {/* <button>Activity Complete</button> */}

      


      
    </div>
  );
};

export default UserInfo;
