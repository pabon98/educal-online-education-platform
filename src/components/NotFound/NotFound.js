import React from 'react';
import icon from '../../icons/404-error-page-2952323-2451625.png'

const NotFound = () => {
    return (
        /* Error message showing  */
        <div className="my-4">
            <h1>Error 404!!! Not Found. Please Try Again</h1>
            <img src={icon} alt="" />
        </div>
    );
};

export default NotFound;