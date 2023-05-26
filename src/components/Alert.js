import React from 'react'

export default function Alert(props) {
    const cap =(word)=>{
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);


    }
    return (
        
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{cap(props.alert.type ) } </strong>{props.alert.msg}
                
            </div>
        
    )
}
