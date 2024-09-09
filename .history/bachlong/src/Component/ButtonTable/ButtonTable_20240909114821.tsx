import React from 'react';

interface ProductButtonProps {
    isActive: boolean;
    onClick: () => void;
    label: string;
}

const ButtonTable: React.FC<ProductButtonProps> = ({ isActive, onClick, label }) => {
    return (
        <p
            onClick={onClick}
            className='ButtonTable'
            style={{
                backgroundColor: isActive ? 'red' : 'white',
               
            }}
        >
            {label}
        </p>
    );
};

export default ButtonTable;
