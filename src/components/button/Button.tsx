import React from 'react';
import { Link } from "react-router-dom";
import './Button.css';

export interface Props {
    title: string,
    link: string,
    testId: number,
    backgroundColor?: string
}

function Button(props:Props) {
    return (
        <button className="test-component__button" style={{backgroundColor: props.title === "Results" ? '#2EE5AC' : '#7D7D7D'}}>
            <Link className='test-component-btn__txt' to={`/${props.link}/${props.testId}`}>{props.title}</Link>
        </button>
    )
}

export default Button;