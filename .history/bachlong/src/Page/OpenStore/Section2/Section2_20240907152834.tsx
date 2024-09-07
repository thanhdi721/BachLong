import React, { useState } from 'react';
import './Section2.css';
import Slider from 'react-slick';
import CardComponent from '../../../Component/CardComponent/CardComponent.tsx';

function Section2() {
    const [image, setImage] = useState<string>('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg'); // Default image
    const [activeButton, setActiveButton] = useState<number>(1); // Default button 1

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        if (buttonId === 1) {
            setImage('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg');
        } else {
            setImage('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-TRUNG-QUA.jpg');
        }
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 cards at a time
        slidesToScroll: 1, // Scroll one card at a time
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Show 2 cards for smaller screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Show 1 card for very small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Sample card data (add more cards as needed)
    const cardsData = Array(10).fill({
        imageSrc: 'https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbfb35fd1430014b0a164bf3a48626862%2Fs%2Ft%2Fstar_4_1_5.jpg&w=1080&q=75',
        title: 'Macbook Air 2024 M3 13.6inch 8GB/512GB Chính Hãng Apple VN',
        price: '31,190,000',
        oldPrice: '34,990,000',
        discount: '-11%',
    });

    return (
        <div className='OpenStore-Section2-Container'>
            <div className='OpenStore-Section2-Container-Product'>
                <img
                    src={image}
                    alt=''
                    className='OpenStore-Section2-Container-ProductImage'
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p
                        onClick={() => handleButtonClick(1)}
                        style={{
                            backgroundColor: activeButton === 1 ? '#fff200' : 'white',
                            color: 'black',
                            padding: '20px 20px',
                            width: '45%',
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
                            color: 'black',
                            padding: '20px 20px',
                            width: '45%',
                            textAlign: 'center',
                            borderRadius: '10px',
                            fontSize: '24px',
                            fontWeight: '700',
                        }}
                    >
                        MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                    </p>
                </div>

                {/* Slider for Card Components */}
                <Slider {...settings}>
                    {cardsData.map((card, index) => (
                        <CardComponent
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            price={card.price}
                            oldPrice={card.oldPrice}
                            discount={card.discount}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Section2;
