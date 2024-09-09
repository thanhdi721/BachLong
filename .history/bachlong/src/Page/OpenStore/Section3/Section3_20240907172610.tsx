import React, { useState } from 'react';
import './Section3.css';
import { Carousel } from 'antd';
import CardComponent from '../../../Component/CardComponent/CardComponent.tsx';
import ButtonTable from '../../../Component/ButtonTable/ButtonTable.tsx';

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
    const [activeButtonProduct, setActiveButtonProduct] = useState<number>(1); // Default button 1
    const handleButtonProductClick = (buttonId: number) => {
        setActiveButtonProduct(buttonId);
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
                    src='https://bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-SP-SIEU-SALE-1200.jpg&w=1200&q=75'
                    alt=''
                    className='OpenStore-Section3-Container-ProductImage'
                />
                <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                    <ButtonTable
                        isActive={activeButton === 1}
                        onClick={() => handleButtonClick(1)}
                        label="Điện thoại"
                    />
                    <ButtonTable
                        isActive={activeButton === 2}
                        onClick={() => handleButtonClick(2)}
                        label="Máy tính bảng "
                    />
                    <ButtonTable
                        isActive={activeButton === 3}
                        onClick={() => handleButtonClick(3)}
                        label="Laptop"
                    />
                    <ButtonTable
                        isActive={activeButton === 4}
                        onClick={() => handleButtonClick(4)}
                        label="Macbook"
                    />

                </div>
                {activeButton === 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                        <ButtonTable
                            isActive={activeButtonProduct === 1}
                            onClick={() => handleButtonProductClick(1)}
                            label="Apple"
                        />
                        <ButtonTable
                            isActive={activeButtonProduct === 2}
                            onClick={() => handleButtonProductClick(2)}
                            label="Samsung "
                        />
                        <ButtonTable
                            isActive={activeButtonProduct === 3}
                            onClick={() => handleButtonProductClick(3)}
                            label="Xiaomi"
                        />
                        <ButtonTable
                            isActive={activeButtonProduct === 4}
                            onClick={() => handleButtonProductClick(4)}
                            label="Oppo"
                        />

                    </div>
                )}
                {activeButton === 2 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                        <p
                            onClick={() => handleButtonProductClick(1)}
                            style={{
                                backgroundColor: activeButtonProduct === 1 ? 'red' : 'white',
                                color: activeButtonProduct === 1 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',

                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            222
                        </p>
                        <p
                            onClick={() => handleButtonProductClick(2)}
                            style={{
                                backgroundColor: activeButtonProduct === 2 ? 'red' : 'white',
                                color: activeButtonProduct === 2 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            2222

                        </p>
                        <p
                            onClick={() => handleButtonProductClick(3)}
                            style={{
                                backgroundColor: activeButtonProduct === 3 ? 'red' : 'white',
                                color: activeButtonProduct === 3 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            2222
                        </p>
                        <p
                            onClick={() => handleButtonProductClick(4)}
                            style={{
                                backgroundColor: activeButtonProduct === 4 ? 'red' : 'white',
                                color: activeButtonProduct === 4 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            2222
                        </p>

                    </div>
                )}
                {activeButton === 3 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                        <p
                            onClick={() => handleButtonProductClick(1)}
                            style={{
                                backgroundColor: activeButtonProduct === 1 ? 'red' : 'white',
                                color: activeButtonProduct === 1 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',

                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            3333
                        </p>
                        <p
                            onClick={() => handleButtonProductClick(2)}
                            style={{
                                backgroundColor: activeButtonProduct === 2 ? 'red' : 'white',
                                color: activeButtonProduct === 2 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            333
                        </p>
                        <p
                            onClick={() => handleButtonProductClick(3)}
                            style={{
                                backgroundColor: activeButtonProduct === 3 ? 'red' : 'white',
                                color: activeButtonProduct === 3 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            3333
                        </p>
                        <p
                            onClick={() => handleButtonProductClick(4)}
                            style={{
                                backgroundColor: activeButtonProduct === 4 ? 'red' : 'white',
                                color: activeButtonProduct === 4 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            3333
                        </p>

                    </div>
                )}
                {activeButton === 4 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                        <p
                            onClick={() => handleButtonProductClick(1)}
                            style={{
                                backgroundColor: activeButtonProduct === 1 ? 'red' : 'white',
                                color: activeButtonProduct === 1 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',

                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            4444
                        </p>
                        <p
                            onClick={() => handleButtonProductClick(2)}
                            style={{
                                backgroundColor: activeButtonProduct === 2 ? 'red' : 'white',
                                color: activeButtonProduct === 2 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            4444

                        </p>
                        <p
                            onClick={() => handleButtonProductClick(3)}
                            style={{
                                backgroundColor: activeButtonProduct === 3 ? 'red' : 'white',
                                color: activeButtonProduct === 3 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            444
                        </p>
                        <p
                            onClick={() => handleButtonProductClick(4)}
                            style={{
                                backgroundColor: activeButtonProduct === 4 ? 'red' : 'white',
                                color: activeButtonProduct === 4 ? 'black' : 'black',
                                padding: '5px 10px',
                                width: '15%',
                                textAlign: 'center',
                                borderRadius: '20px',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            44
                        </p>

                    </div>
                )}

                {activeButton === 1 && (
                    <Carousel {...settings}
                        infinite={false}
                        autoplay
                        dots={false}
                        arrows
                        style={{ width: '76vw', marginLeft: '-10px' }}
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
                        style={{ width: '76vw', marginLeft: '-10px' }}
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
    );
}

export default Section2;