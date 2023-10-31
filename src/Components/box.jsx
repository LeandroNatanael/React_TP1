import React from 'react'
import "../Styles/Box.css"

const Box = (props) => {
    return (
        <div className='container'>
            <h1 className='titleBox'>
                {(props.title)}
            </h1>
            <img
                className='img'
                src={`images/${props.imagen}`}
            ></img>
            <p>
                {(props.parrafo)}
            </p>
            <a className='button' href={props.href}>Mas info</a>
        </div>
    );
}

export default Box
