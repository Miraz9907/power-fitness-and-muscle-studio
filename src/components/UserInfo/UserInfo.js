import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from '../../Images/info.jpg';
import "./UserInfo.css";

const UserInfo = (props) => {
   console.log(props);
//   const { requiredTime } = props;
//   let totalTime = 0;
//   for (const exercise of requiredTime) {
//     totalTime = totalTime + exercise.time;
//     console.log(totalTime);
//   }
//   const a =10;
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between p-0">
        <div>
          <img src={logo} alt=""  className=" rounded-circle info-img" />
        </div>
        <div >
          <h5 >Md Merazur Rahman</h5>
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
      



      

      {/* <h3>Exercise</h3>
      <h5>time: {totalTime}</h5> */}
    </div>
  );
};

export default UserInfo;
