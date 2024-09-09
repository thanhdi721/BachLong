import React, { useState } from 'react';
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
    autoplaySpeed: 2000,
    autoplay: false,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 2000, // Adjust for larger screens
            settings: {
                slidesPerRow: 4,
            }
        },
        {
            breakpoint: 1000, // Adjust for smaller screens
            settings: {
                slidesPerRow: 3,
            }
        },
        {
            breakpoint: 767, // Adjust for very small screens
            settings: {
                slidesPerRow: 2,
            }
        }
    ]
};

// Create an array with 20 unique fake data items
const fakeData: CardData[] = [
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+1',
        title: 'Apple iPhone 15 Pro Max',
        price: '30,000,000',
        oldPrice: '35,000,000',
        discount: '-14%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+2',
        title: 'Samsung Galaxy S23 Ultra',
        price: '28,000,000',
        oldPrice: '32,000,000',
        discount: '-12%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+3',
        title: 'Sony WH-1000XM5 Headphones',
        price: '10,000,000',
        oldPrice: '12,000,000',
        discount: '-17%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+4',
        title: 'Dell XPS 13 Laptop',
        price: '25,000,000',
        oldPrice: '27,000,000',
        discount: '-7%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+5',
        title: 'Samsung QLED TV 55"',
        price: '20,000,000',
        oldPrice: '22,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+6',
        title: 'Apple iPad Pro 12.9"',
        price: '18,000,000',
        oldPrice: '20,000,000',
        discount: '-10%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+7',
        title: 'Nikon D850 DSLR Camera',
        price: '40,000,000',
        oldPrice: '45,000,000',
        discount: '-11%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+8',
        title: 'Bose SoundLink Revolve+',
        price: '8,000,000',
        oldPrice: '9,000,000',
        discount: '-11%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+9',
        title: 'Fitbit Charge 5',
        price: '5,000,000',
        oldPrice: '6,000,000',
        discount: '-17%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+10',
        title: 'Huawei Watch GT 3',
        price: '7,000,000',
        oldPrice: '8,000,000',
        discount: '-12%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+11',
        title: 'Lenovo ThinkPad X1 Carbon',
        price: '30,000,000',
        oldPrice: '33,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+12',
        title: 'Oculus Quest 2 VR Headset',
        price: '15,000,000',
        oldPrice: '17,000,000',
        discount: '-12%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+13',
        title: 'Canon EOS R5 Camera',
        price: '50,000,000',
        oldPrice: '55,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+14',
        title: 'Microsoft Surface Pro 9',
        price: '22,000,000',
        oldPrice: '24,000,000',
        discount: '-8%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+15',
        title: 'JBL Charge 5 Speaker',
        price: '6,000,000',
        oldPrice: '7,000,000',
        discount: '-14%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+16',
        title: 'GoPro Hero 11 Black',
        price: '12,000,000',
        oldPrice: '14,000,000',
        discount: '-14%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+17',
        title: 'LG Gram 17 Laptop',
        price: '27,000,000',
        oldPrice: '30,000,000',
        discount: '-10%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+18',
        title: 'Apple Watch Ultra',
        price: '20,000,000',
        oldPrice: '22,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+19',
        title: 'Xiaomi Mi Mix 4',
        price: '16,000,000',
        oldPrice: '18,000,000',
        discount: '-11%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+20',
        title: 'Sony Alpha A7 IV',
        price: '45,000,000',
        oldPrice: '50,000,000',
        discount: '-10%'
    }
];
const fakeData1: CardData[] = [
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+1',
        title: 'dáđấâsdasdasdx',
        price: '30,000,000',
        oldPrice: '35,000,000',
        discount: '-14%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+2',
        title: 'Samsung Galaxy S23 Ultra',
        price: '28,000,000',
        oldPrice: '32,000,000',
        discount: '-12%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+3',
        title: 'Sony WH-1000XM5 Headphones',
        price: '10,000,000',
        oldPrice: '12,000,000',
        discount: '-17%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+4',
        title: 'Dell XPS 13 Laptop',
        price: '25,000,000',
        oldPrice: '27,000,000',
        discount: '-7%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+5',
        title: 'Samsung QLED TV 55"',
        price: '20,000,000',
        oldPrice: '22,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+6',
        title: 'Apple iPad Pro 12.9"',
        price: '18,000,000',
        oldPrice: '20,000,000',
        discount: '-10%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+7',
        title: 'Nikon D850 DSLR Camera',
        price: '40,000,000',
        oldPrice: '45,000,000',
        discount: '-11%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+8',
        title: 'Bose SoundLink Revolve+',
        price: '8,000,000',
        oldPrice: '9,000,000',
        discount: '-11%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+9',
        title: 'Fitbit Charge 5',
        price: '5,000,000',
        oldPrice: '6,000,000',
        discount: '-17%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+10',
        title: 'Huawei Watch GT 3',
        price: '7,000,000',
        oldPrice: '8,000,000',
        discount: '-12%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+11',
        title: 'Lenovo ThinkPad X1 Carbon',
        price: '30,000,000',
        oldPrice: '33,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+12',
        title: 'Oculus Quest 2 VR Headset',
        price: '15,000,000',
        oldPrice: '17,000,000',
        discount: '-12%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+13',
        title: 'Canon EOS R5 Camera',
        price: '50,000,000',
        oldPrice: '55,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+14',
        title: 'Microsoft Surface Pro 9',
        price: '22,000,000',
        oldPrice: '24,000,000',
        discount: '-8%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+15',
        title: 'JBL Charge 5 Speaker',
        price: '6,000,000',
        oldPrice: '7,000,000',
        discount: '-14%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+16',
        title: 'GoPro Hero 11 Black',
        price: '12,000,000',
        oldPrice: '14,000,000',
        discount: '-14%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+17',
        title: 'LG Gram 17 Laptop',
        price: '27,000,000',
        oldPrice: '30,000,000',
        discount: '-10%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+18',
        title: 'Apple Watch Ultra',
        price: '20,000,000',
        oldPrice: '22,000,000',
        discount: '-9%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+19',
        title: 'Xiaomi Mi Mix 4',
        price: '16,000,000',
        oldPrice: '18,000,000',
        discount: '-11%'
    },
    {
        imageSrc: 'https://via.placeholder.com/300x200?text=Product+20',
        title: 'Sony Alpha A7 IV',
        price: '45,000,000',
        oldPrice: '50,000,000',
        discount: '-10%'
    }
];
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
        <div className='OpenStore-Section2-Container'>
            <div className='OpenStore-Section2-Container-Product'>
                <img
                    src='https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&w=3840&q=75'
                    alt=''
                    className='OpenStore-Section2-Container-ProductImage'
                />
                <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                    <p
                        onClick={() => handleButtonClick(1)}
                        style={{
                            backgroundColor: activeButton === 1 ? '#fff200' : 'white',
                            color: activeButton === 1 ? 'black' : 'black',

                        }} className='OpenStore-Section2-boxTextTitle'
                    >
                        MỪNG SINH NHẬT TRÚNG SIÊU PHẨM
                    </p>
                    <p
                        onClick={() => handleButtonClick(2)}
                        style={{
                            backgroundColor: activeButton === 2 ? '#fff200' : 'white',
                            color: activeButton === 2 ? 'black' : 'black',

                        }} className='OpenStore-Section2-boxTextTitle'
                    >
                        MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                    </p>
                </div>

                {/* Carousel with 4 items shown at a time */}
                <div style={{ margin: "auto", display: "flex", justifyContent: 'center' }}>
                    {activeButton === 1 && (
                        <Carousel {...settings}
                            infinite={false}
                            autoplay
                            dots={false}
                            arrows
                            className='OpenStore-Section2-ItemSlider'
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
                    )}
                    {activeButton === 2 && (
                        <Carousel {...settings}
                            infinite={true}
                            autoplay
                            dots={false}
                            arrows
                            className='OpenStore-Section2-ItemSlider'
                        >
                            {fakeData1.map((data, index) => (
                                <div key={index} style={contentStyle} className="no-select">
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
                    )}
                </div>

            </div>
        </div>
    );
}

export default Section2;