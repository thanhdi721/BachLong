import React from 'react';

interface ProductButtonProps {
    isActive: boolean;
    onClick: () => void;
    label: string;
}

const ProductButton: React.FC<ProductButtonProps> = ({ isActive, onClick, label }) => {
    return (
        <p
            onClick={onClick}
            style={{
                backgroundColor: isActive ? 'red' : 'white',
                color: 'black',
                padding: '5px 10px',
                width: '15%',
                textAlign: 'center',
                borderRadius: '20px',
                fontSize: '20px',
                fontWeight: '600',
                cursor: 'pointer',
            }}
        >
            {label}
        </p>
    );
};

export default ButtonTable;
