import React from 'react';
import Button from '../button/Button';
import './TestComponent.css';

export interface Props {
    id: number,
    name: string,
    type: string,
    status: string,
    siteId: number,
    lineColor?:any
}

function TestComponent(props: Props) {

    return (
        <div className="test-component">
            <div className="test-component__line" style={{backgroundColor: props.lineColor}}></div>
            <div className="test-component__props">
                <div className="test-component__name prop">{props.name}</div>
                <div className="test-component__type prop" style={{color: '#5C5C5C', fontWeight: '400'}}>
                    {props.type === 'CLASSIC' ? 'Classic' : 
                    props.type === 'SERVER_SIDE' ? 'Server-side' : 
                    props.type === 'MVT' ? 'MVT' : ''}
                </div>
                <div className="test-component__status prop" 
                style={{color: props.status === 'Online' ? '#1BDA9D' :
                props.status === 'Paused' ? '#FF8346' :
                props.status === 'Stopped' ? '#FE4848' : '#5C5C5C', fontWeight: '400'}}>{props.status}</div>
                <div className="test-component__siteId prop">{props.siteId}</div>
            </div>
            <Button 
            title={props.status === "Draft" ? "Finalize" : "Results"} 
            link={props.status === "Draft" ? "finalize" : "results"}
            testId={props.id}
            />
        </div>
    )
}

export default TestComponent;