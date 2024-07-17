// src/js/component/SecondsCounter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FaClock } from 'react-icons/fa'; // Importar el icono de reloj de react-icons
import './SecondsCounter.css';

function SecondsCounter(props) {
    const digits = props.seconds.toString().padStart(6, '0').split('');

    return (
        <div className="seconds-counter">
            <div className="icon">
                <FaClock /> {/* Usar el icono de react-icons */}
            </div>
            {digits.map((digit, index) => (
                <div key={index} className="digit">
                    {digit}
                </div>
            ))}
        </div>
    );
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default SecondsCounter;
