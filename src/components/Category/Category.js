import React from 'react';
import './Category.css';

const Category = (props) => {
    const {name, picture, age, time, about} = props.category

    return (

        <div className='col-4 '>
        {/* <div className='col-sm-12 col-md-6 col-lg-4 '> */}
            <div className='card '>
            <img src={picture} className=' rounded-4 card-img-top p-2 card-image' alt="..."/>
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{about.slice(0,120) + '...'}</p>
                <h6 className='card-title'>For Age :{age}</h6>
                <h6 className='card-title'>Time required :{time}</h6>
                <button className='btn btn-primary w-100' onClick={() =>props.handleAddToList(props.category)} >Add to cart</button>
            </div>
            </div>
        </div>
    );
};

export default Category;