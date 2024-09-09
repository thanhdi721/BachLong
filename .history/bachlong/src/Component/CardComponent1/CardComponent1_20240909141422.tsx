import React from "react";
import "./CardComponent1.css"; // Import your styles
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
        <div className="card1">
            <div className="installment1">Trả góp 0%</div>
            <div className="image-container1">
                <div className="banner1">
                    <img src="https://beta-api.bachlongmobile.com/media/landingpagebanner/150824-FRAME-18-SAP-SAN-300.png" className="background-img1" alt="Background" />
                    <img src={imageSrc} className="product-img1" alt="Product" />
                </div>

            </div>
            <div className="card-content1">
                <h3 className="product-title1">{title}</h3>
                <div className="price-container1">
                    <span className="current-price1">{price} VNĐ</span>
                    <div style={{ display: "flex", gap: "10px`" }}>
                        <span className="old-price1">{oldPrice} VNĐ</span>
                        <span className="discount1">{discount}</span>
                    </div>



                </div>
                <Link to="/">
                    <button className="buy-button1" >MUA NGAY</button>
                </Link>

            </div>
        </div>
    );
};

export default CardComponent;
