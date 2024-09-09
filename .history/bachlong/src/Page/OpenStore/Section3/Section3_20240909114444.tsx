import React, { useEffect, useState } from 'react';
import './Section3.css';
import CardComponent from '../../../Component/CardComponent1/CardComponent1.tsx';
import ButtonTable from '../../../Component/ButtonTable/ButtonTable.tsx';

// Define an interface for card data
interface CardData {
    imageSrc: string;
    title: string;
    price: string;
    oldPrice: string;
    discount: string;
}

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

    const [visibleItems, setVisibleItems] = useState<number>(10);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (screenWidth <= 767) {
            setVisibleItems(4);
        } else if (screenWidth <= 1000) {
            setVisibleItems(8);
        } else {
            setVisibleItems(10);
        }
    }, [screenWidth]);
    // Function to handle "Xem thêm" button click
    const handleSeeMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 8); // Show 8 more items each time
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
                        <ButtonTable
                            isActive={activeButtonProduct === 5}
                            onClick={() => handleButtonProductClick(5)}
                            label="Nokia"
                        />
                    </div>
                )}
                {activeButton === 2 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                        <ButtonTable
                            isActive={activeButtonProduct === 1}
                            onClick={() => handleButtonProductClick(1)}
                            label="Ipad"
                        />
                        <ButtonTable
                            isActive={activeButtonProduct === 2}
                            onClick={() => handleButtonProductClick(2)}
                            label="SamSung "
                        />
                        <ButtonTable
                            isActive={activeButtonProduct === 3}
                            onClick={() => handleButtonProductClick(3)}
                            label="Xiaomi"
                        />

                    </div>
                )}
                {activeButton === 3 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                        <ButtonTable
                            isActive={activeButtonProduct === 1}
                            onClick={() => handleButtonProductClick(1)}
                            label="LG"
                        />



                    </div>
                )}
                {activeButton === 4 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                        <ButtonTable
                            isActive={activeButtonProduct === 1}
                            onClick={() => handleButtonProductClick(1)}
                            label="Mackbook Pro"
                        />
                        <ButtonTable
                            isActive={activeButtonProduct === 2}
                            onClick={() => handleButtonProductClick(2)}
                            label="Mackbook Air "
                        />
                        <ButtonTable
                            isActive={activeButtonProduct === 3}
                            onClick={() => handleButtonProductClick(3)}
                            label="iMac"
                        />

                    </div>
                )}

                {activeButtonProduct === 1 && (
                    <div className="grid-container">
                        {fakeData1.slice(0, visibleItems).map((data, index) => (
                            <div key={index} className="grid-item no-select">
                                {data.imageSrc ? (
                                    <CardComponent
                                        imageSrc={data.imageSrc}
                                        title={data.title}
                                        price={data.price}
                                        oldPrice={data.oldPrice}
                                        discount={data.discount}
                                    />
                                ) : (
                                    <div className="placeholder-item" /> // Render a placeholder if data is empty
                                )}
                            </div>
                        ))}

                        {/* Xem thêm Button */}
                        {visibleItems < fakeData1.length && (
                            <button onClick={handleSeeMore} className="see-more-button">
                                Xem thêm
                            </button>
                        )}
                    </div>
                )}
                {activeButtonProduct === 2 && (
                    <div className="grid-container">

                        {fakeData1.slice(0, visibleItems).map((data, index) => (
                            <div key={index} className="grid-item no-select">
                                {data.imageSrc ? (
                                    <CardComponent
                                        imageSrc={data.imageSrc}
                                        title={data.title}
                                        price={data.price}
                                        oldPrice={data.oldPrice}
                                        discount={data.discount}
                                    />
                                ) : (
                                    <div className="placeholder-item" /> // Render a placeholder if data is empty
                                )}
                            </div>
                        ))}

                        {/* Xem thêm Button */}
                        {visibleItems < fakeData1.length && (
                            <button onClick={handleSeeMore} className="see-more-button">
                                Xem thêm
                            </button>
                        )}
                    </div>
                )}
                {activeButtonProduct === 3 && (
                    <div className="grid-container">

                        {fakeData1.slice(0, visibleItems).map((data, index) => (
                            <div key={index} className="grid-item no-select">
                                {data.imageSrc ? (
                                    <CardComponent
                                        imageSrc={data.imageSrc}
                                        title={data.title}
                                        price={data.price}
                                        oldPrice={data.oldPrice}
                                        discount={data.discount}
                                    />
                                ) : (
                                    <div className="placeholder-item" /> // Render a placeholder if data is empty
                                )}
                            </div>
                        ))}

                        {/* Xem thêm Button */}
                        {visibleItems < fakeData1.length && (
                            <button onClick={handleSeeMore} className="see-more-button">
                                Xem thêm
                            </button>
                        )}
                    </div>
                )}
                {activeButtonProduct === 4 && (
                    <div className="grid-container">
                        {fakeData.slice(0, visibleItems).map((data, index) => (
                            <div key={index} className="grid-item no-select">
                                {data.imageSrc ? (
                                    <CardComponent
                                        imageSrc={data.imageSrc}
                                        title={data.title}
                                        price={data.price}
                                        oldPrice={data.oldPrice}
                                        discount={data.discount}
                                    />
                                ) : (
                                    <div className="placeholder-item" /> // Render a placeholder if data is empty
                                )}
                            </div>
                        ))}

                        {/* Xem thêm Button */}
                        {visibleItems < fakeData1.length && (
                            <button onClick={handleSeeMore} className="see-more-button">
                                Xem thêm
                            </button>
                        )}
                    </div>
                )}
                {activeButtonProduct === 5 && (
                    <div className="grid-container">
                        {fakeData1.slice(0, visibleItems).map((data, index) => (
                            <div key={index} className="grid-item no-select">
                                {data.imageSrc ? (
                                    <CardComponent
                                        imageSrc={data.imageSrc}
                                        title={data.title}
                                        price={data.price}
                                        oldPrice={data.oldPrice}
                                        discount={data.discount}
                                    />
                                ) : (
                                    <div className="placeholder-item" /> // Render a placeholder if data is empty
                                )}
                            </div>
                        ))}

                        {/* Xem thêm Button */}
                        {visibleItems < fakeData1.length && (
                            <button onClick={handleSeeMore} className="see-more-button">
                                Xem thêm
                            </button>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Section2;