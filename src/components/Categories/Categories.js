import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import UserInfo from "../UserInfo/UserInfo";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [requiredTime, setRequiredTime] = useState([]);


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);

  const handleAddToList = (category) =>{
    console.log(category);
    const newList = [...requiredTime, category];
    setRequiredTime(newList);
  }

  return (
    <div className="container ">
      <div className="row gx-5">
        <div className="col-9 ">
          <div className="mt-4">
            <h2>Select Your today's GYM activities</h2>
            <div className="row g-3 mt-2">
              {categories.map((category) => (
                <Category key={category.id} category={category} 
                handleAddToList = {handleAddToList}>
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="col-3 border gx-3 ">
          <UserInfo requiredTime ={requiredTime}></UserInfo>
        </div>
      </div>
    </div>
  );
};

export default Categories;
