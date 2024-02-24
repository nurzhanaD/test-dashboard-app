import React from 'react';
import './Categories.css';

export interface Props {
    nameClick: any
}

function Categories(props: Props) {
    return (
        <div className="categories">
            <div className="categories__name">
                <span className='categories__title' onClick={props.nameClick}>NAME</span>
            </div>
            <div className="categories__type filter-list">
                <span className='categories__title'>TYPE</span>
            </div>
            <div className="categories__status">
                <span className='categories__title'>STATUS</span>
            </div>
            <div className="categories__site">
                <span className='categories__title'>SITE</span>
            </div>
        </div>
    )
}

export default Categories;