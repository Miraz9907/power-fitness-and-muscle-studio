import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    },[])
    // console.log(categories);

    return (
        <div className='container '>
            

            <div className='row gx-3 '>

                <div className='col-9 border '>
                <h2>Select Your today's GYM activities</h2>
                <div className='row g-3'>
                   {
                        categories.map(category => <Category
                        key = {category.id}
                        category = {category}
                        ></Category>)
                    }

                </div>
                    
                </div>
                <div className='col-3 border gx-3'>
                    <h1>Right-part</h1>
                </div>
            </div>
        </div>
    );
};

export default Categories;