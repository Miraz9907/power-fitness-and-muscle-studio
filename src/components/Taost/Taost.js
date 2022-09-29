import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Taost = () => {
    const notify = () => toast.success("You are successfully completed your activity",{
        autoClose:7000,
        position:"top-center"
    });
    return (
        <div>
             <button className="btn btn-info w-75 mt-4 p-3 rounded-4 mx-5" onClick={notify}>Activity Completed!</button>
        <ToastContainer />
        </div>
    );
};

export default Taost;