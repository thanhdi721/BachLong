import React from 'react';
import "./CardUtilityServices.css"
interface CardUtilityServiceProps {
    imageUrl: string;
    description: string;
}

const CardUtilityService: React.FC<CardUtilityServiceProps> = ({ imageUrl, description }) => {
    return (
        <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid gray', width: 'max-content' }}>
            <img src={imageUrl} alt='Promotion' className='CardUtilityServices-Images' />
            <br />
            <strong className='CardUtilityServices-text'>{description}</strong>
        </div>
    );
};

export default CardUtilityService;
