import React from 'react';

const Scroll = (props)=>{
    return (
        <React.Fragment>
            <div style={{overflowY:'scroll', border: '2px solid rgb(15, 231, 123)', height: '800px'}}>
                {props.children}
            </div>
        </React.Fragment>);
}
export default Scroll;