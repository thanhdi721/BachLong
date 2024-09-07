import React from "react";
import "./CardComponent.css"; // Import your styles

interface CardComponentProps {
    imageSrc: string;
    title: string;
    price: string;
    oldPrice: string;
    discount: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
    imageSrc,
    title,
    price,
    oldPrice,
    discount,
}) => {
    return (
        <div className="card">
            <div className="installment">Trả góp 0%</div>
            <div className="image-container">
                <img
                <img src={imageSrc} alt={title} className="product-image" />
            </div>
            <div className="card-content">
                <h3 className="product-title">{title}</h3>
                <div className="price-container">
                    <span className="current-price">{price} VNĐ</span>
                    <span className="old-price">{oldPrice} VNĐ</span>
                    <span className="discount">{discount}</span>
                </div>
                <button className="buy-button">MUA NGAY</button>
            </div>
        </div>
    );
};

export default CardComponent;
