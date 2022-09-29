import React from 'react';
import logo from '../../Images/gym.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='d-flex align-items-center bg-light ps-4 pt-4'>
                <img src={logo} alt=""  className='logo-img' />
                <h2 className='mt-2 text-info fst-italic fs-3'>Power Fitness and Muscle Studio</h2>
                
            </div>
        </div>
    );
};

export default Header;