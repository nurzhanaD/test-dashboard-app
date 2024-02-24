import { Link } from 'react-router-dom';
import './Finalize.css';

function Finalize() {
    return (
        <div className="finalize">
            <div className="finalize__text">
                <div className="finalize__title">Finalize</div>
                <div className="finalize__description">Spring promotion</div>
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

export default Finalize;