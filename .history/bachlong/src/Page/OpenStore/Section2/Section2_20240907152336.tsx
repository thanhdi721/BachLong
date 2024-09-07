import React, { useState } from 'react';
import './Section2.css';
import Slider from "react-slick";
import CardComponent from "../../../Component/CardComponent/CardComponent.tsx";

function Section2() {
    const [image, setImage] = useState<string>('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg'); // Default image
    const [activeButton, setActiveButton] = useState<number>(1); // Default active button

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        setImage(
            buttonId === 1
                ? 'https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg'
                : 'https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-TRUNG-QUA.jpg'
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, // Changed to 1 for smoother scrolling
        responsive: [ // Added responsiveness settings
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const products = [ // Array for product data
        {
            imageSrc: "https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbfb35fd1430014b0a164bf3a48626862%2Fs%2Ft%2Fstar_4_1_5.jpg&w=1080&q=75",
            title: "Macbook Air 2024 M3 13.6inch 8GB/512GB Chính Hãng Apple VN",
            price: "31,190,000",
            oldPrice: "34,990,000",
            discount: "-11%"
        },
        // Add more product objects as needed...
    ];

    return (
        <div className='OpenStore-Section2-Container'>
            <div className='OpenStore-Section2-Container-Product'>
                <img src={image} alt='' className='OpenStore-Section2-Container-ProductImage' />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                        onClick={() => handleButtonClick(1)}
                        className={`button-style ${activeButton === 1 ? 'active' : ''}`}
                    >
                        MỪNG SINH NHẬT TRÚNG SIÊU PHẨM
                    </button>
                    <button
                        onClick={() => handleButtonClick(2)}
                        className={`button-style ${activeButton === 2 ? 'active' : ''}`}
                    >
                        MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                    </button>
                </div>
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <CardComponent
                            key={index}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            discount={product.discount}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Section2;
