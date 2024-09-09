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
            ch
            style={{
                backgroundColor: isActive ? 'red' : 'white',
               
            }}
        >
            {label}
        </p>
    );
};

export default ButtonTable;
