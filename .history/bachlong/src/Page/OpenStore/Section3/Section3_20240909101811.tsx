import React, { useState } from 'react';
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
                    <div style={{ width: '81vw', marginLeft: '20px' }} className="grid-container">

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
                    <div style={{ width: '81vw', marginLeft: '20px' }} className="grid-container">

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
                    <div style={{ width: '81vw', marginLeft: '20px' }} className="grid-container">

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
                    <div style={{ width: '81vw', marginLeft: '20px' }} className="grid-container">

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
                    <div style={{ width: '81vw', marginLeft: '20px' }} className="grid-container">
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