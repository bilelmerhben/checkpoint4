import React from 'react';
function Wrapper(props) {
   
    return (
        <div style={{ backgroundColor:"blue"}}> 
        {props.children}</div>
     
      
    );
}

export default  Wrapper;