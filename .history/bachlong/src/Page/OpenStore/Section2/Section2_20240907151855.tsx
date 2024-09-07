import React, { useState } from 'react';
import './Section2.css';
import CardComponent from "../../../Component/CardComponent/CardComponent.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function Section2() {
    const [image, setImage] = useState<string>('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg');
    const [activeButton, setActiveButton] = useState<number>(1);

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        if (buttonId === 1) {
            setImage('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg');
        } else {
            setImage('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-TRUNG-QUA.jpg');
        }
    };

    // Fake data for the CardComponent slider
    const fakeProducts = Array.from({ length: 10 }, (_, index) => ({
        id: index,
        imageSrc: "https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbfb35fd1430014b0a164bf3a48626862%2Fs%2Ft%2Fstar_4_1_5.jpg&w=1080&q=75",
        title: `Macbook Air 2024 M3 13.6inch 8GB/512GB Chính Hãng Apple VN - ${index + 1}`,
        price: "31,190,000",
        oldPrice: "34,990,000",
        discount: "-11%"
    }));

    return (
        <div className='OpenStore-Section2-Container'>
            <div className='OpenStore-Section2-Container-Product'>
                <img src={image} alt='' className='OpenStore-Section2-Container-ProductImage' />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p
                        onClick={() => handleButtonClick(1)}
                        style={{
                            backgroundColor: activeButton === 1 ? '#fff200' : 'white',
                            color: activeButton === 1 ? 'black' : 'black',
                            padding: '20px 20px',
                            width: "45%",
                            marginRight: '10px',
                            textAlign: "center",
                            borderRadius: "10px",
                            fontSize: "24px",
                            fontWeight: "700"
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
                            width: "45%",
                            textAlign: "center",
                            borderRadius: "10px",
                            fontSize: "24px",
                            fontWeight: "700"
                        }}
                    >
                        MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                    </p>
                </div>

                {/* Slider */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4} // Show 4 cards at a time
                    loop={true} // Infinite loop
                    navigation={true} // Navigation arrows
                    pagination={{ clickable: true }} // Pagination bullets
                    style={{ padding: "20px 0" }}
                >
                    {fakeProducts.map(product => (
                        <SwiperSlide key={product.id}>
                            <CardComponent
                                imageSrc={product.imageSrc}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                discount={product.discount}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Section2;
