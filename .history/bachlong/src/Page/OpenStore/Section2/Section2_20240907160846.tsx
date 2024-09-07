import React, { useState, useRef } from 'react';
import './Section2.css';
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
    slidesPerRow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
};

const fakeData: CardData[] = [
    // Your existing data here
];

function Section2() {
    const [activeButton, setActiveButton] = useState<number>(1);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const carouselRef = useRef<any>(null);

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        // Calculate the index of the slide to show
        const slideIndex = (buttonId - 1) * 4; // Assuming 4 slides per view
        setCurrentSlide(slideIndex);
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
        <div className='OpenStore-Section2-Container'>
            <div className='OpenStore-Section2-Container-Product'>
                <img
                    src='https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&w=3840&q=75'
                    alt=''
                    className='OpenStore-Section2-Container-ProductImage'
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p
                        onClick={() => handleButtonClick(1)}
                        style={{
                            backgroundColor: activeButton === 1 ? '#fff200' : 'white',
                            color: activeButton === 1 ? 'black' : 'black',
                            padding: '20px 20px',
                            width: '40%',
                            marginRight: '10px',
                            textAlign: 'center',
                            borderRadius: '10px',
                            fontSize: '24px',
                            fontWeight: '700',
                        }}
                    >
                        MỪNG SINH NHẬT TRÚNG SIÊU PHẨM
                    </p>
                    <p
                        onClick={() => handleButtonClick(2)}
                        style={{
                            backgroundColor: activeButton === 2 ? '#fff200' : 'white',
                            color: activeButton === 2 ? 'black' : 'black',
                            padding: '20px 20px',
                            width: '40%',
                            textAlign: 'center',
                            borderRadius: '10px',
                            fontSize: '24px',
                            fontWeight: '700',
                        }}
                    >
                        MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                    </p>
                </div>

                {/* Carousel with 4 items shown at a time */}
                <Carousel
                    {...settings}
                    ref={carouselRef}
                    afterChange={(current) => setCurrentSlide(current)}
                    style={{ width: '75vw', marginLeft: '-10px' }}
                    slickGoTo={currentSlide} // Navigate to the current slide
                >
                    {fakeData.map((data, index) => (
                        <div key={index} style={contentStyle}>
                            <CardComponent
                                imageSrc={data.imageSrc}
                                title={data.title}
                                price={data.price}
                                oldPrice={data.oldPrice}
                                discount={data.discount}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Section2;
