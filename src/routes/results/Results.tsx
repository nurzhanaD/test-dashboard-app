import { Link } from 'react-router-dom';
import './Results.css';

function Results() {
    return (
        <div className="results">
            <div className="results__test">
                <div className="results__title">Results</div>
                <div className="results__description">Order basket redesign</div>
            </div>
            <button className='finalize__btn back-btn'>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.10419 16L0.937805 8.83362L0.104186 8L0.937805 7.16638L8.10419 0L8.93781 0.833619L1.77142 8L8.93781 15.1664L8.10419 16Z" fill="#222222"/>
                </svg>
                <Link className='back-btn__link' to="/">Back</Link>
            </button>
        </div>
    )
}

export default Results;