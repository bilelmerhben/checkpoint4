import React from 'react';
function Title(props) {
    let style = {...props.style, fontSize:40}
    console.log(props)
    if(props.small){
        // I'm small
        style.fontSize=30;
    }

    /// I'm not small

let small={fontSize:10};


    return (
        
        <p style={style} > {props.children}</p>
     
      
    );
}

export default Title;
/* obj1={...obj1,...obj2} pour fusionner deux objets dans un seul objet 1*/