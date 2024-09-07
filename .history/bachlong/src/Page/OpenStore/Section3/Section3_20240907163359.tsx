import React, { useState } from 'react';
import './Section3.css';
import { Carousel } from 'antd';
import CardComponent from '../../../Component/CardComponent/CardComponent.tsx';

// Define an interface for card data
interface CardData {
    imageSrc: string;
    title: string;
    price: string;
    oldPrice: string;
    discount: string;
}
const settings = {
    className: "center",
    infinite: false,
    rows: 2,
    autoplaySpeed: 2000,
    slidesPerRow: 4,
    autoplay: false,  // Disable autoplay
    dots: true,  // Enable dots if you want to use them
    arrows: true,  // Enable arrows for manual navigation
};
// Create an array with 20 unique fake data items

function Section2() {
    const [activeButton, setActiveButton] = useState<number>(1); // Default button 1
    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
    };

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div className='OpenStore-Section3-Container'>
            <div className='OpenStore-Section3-Container-Product'>
                <img
                    src='https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&w=3840&q=75'
                    alt=''
                    className='OpenStore-Section3-Container-ProductImage'
                />
                <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                    <p
                        onClick={() => handleButtonClick(1)}
                        style={{
                            backgroundColor: activeButton === 1 ? '#fff200' : 'white',
                            color: activeButton === 1 ? 'black' : 'black',
                            padding: '5px 10px',
                            width: '10%',

                            textAlign: 'center',
                            borderRadius: '20px',
                            fontSize: '20px',
                            fontWeight: '700',
                        }}
                    >
                        Điện thoại
                    </p>
                    <p
                        onClick={() => handleButtonClick(2)}
                        style={{
                            backgroundColor: activeButton === 2 ? '#fff200' : 'white',
                            color: activeButton === 2 ? 'black' : 'black',
                            padding: '5px 10px',
                            width: '10%',
                            textAlign: 'center',
                            borderRadius: '20px',
                            fontSize: '20px',
                            fontWeight: '700',
                        }}
                    >
                        Máy tính bảng

                    </p>
                    <p
                        onClick={() => handleButtonClick(3)}
                        style={{
                            backgroundColor: activeButton === 3 ? '#fff200' : 'white',
                            color: activeButton === 3 ? 'black' : 'black',
                            padding: '5px 10px',
                            width: '10%',
                            textAlign: 'center',
                            borderRadius: '20px',
                            fontSize: '20px',
                            fontWeight: '700',
                        }}
                    >
                        Laptop
                    </p>
                    <p
                        onClick={() => handleButtonClick(4)}
                        style={{
                            backgroundColor: activeButton === 4 ? '#fff200' : 'white',
                            color: activeButton === 4 ? 'black' : 'black',
                            padding: '5px 10px',
                            width: '10%',
                            textAlign: 'center',
                            borderRadius: '20px',
                            fontSize: '20px',
                            fontWeight: '700',
                        }}
                    >
                        Macbook
                    </p>

                </div>


            </div>
        </div>
    );
}

export default Section2;