import React from 'react';
import spinner from '../resources/spin-loader.gif';

const LoadingSpinner = ()=>{
    return (
        <div className="d-flex justify-content-center"  >
            <img src={spinner} height="400px" alt='Loading...' />
        </div>
        
    );
}

export default LoadingSpinner;