import React from "react";
import "./CardComponent.css"; // Import your styles
import { Link } from "react-router-dom"
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
                <div className="banner">
                    <img src="https://beta-api.bachlongmobile.com/media/landingpagebanner/150824-FRAME-18-SAP-SAN-300.png" className="background-img" alt="Background" />
                    <img src={imageSrc} className="product-img" alt="Product" />
                </div>

            </div>
            <div className="card-content">
                <h3 className="product-title">{title}</h3>
                <div className="price-container">
                    <span className="current-price">{price} VNĐ</span>
                    <span className="old-price">{oldPrice} VNĐ</span>
                    <span className="discount">{discount}</span>
                </div>
                <Link to="/">
                    <button className="buy-button" >MUA NGAY</button>
                </Link>

            </div>
        </div>
    );
};

export default CardComponent;
