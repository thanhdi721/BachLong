import React, { useState } from 'react'
import './Section2.css'
import CardComponent from "../../../Component/CardComponent/CardComponent";
function Section2() {
    const [image, setImage] = useState<string>('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg'); // Hình ảnh mặc định
    const [activeButton, setActiveButton] = useState<number>(1); // Mặc định nút 1
    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        if (buttonId === 1) {
            setImage('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-FREE-CHUYEN-DI.jpg');
        } else {
            setImage('https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/150824-BANNER-BL-MALL-TRUNG-QUA.jpg');
        }
    };
    return (
        <div className='OpenStore-Section2-Container'>
            <div className='OpenStore-Section2-Container-Product'>
                <img src='https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&w=3840&q=75' alt='' className='OpenStore-Section2-Container-ProductImage' />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p
                        onClick={() => handleButtonClick(1)}
                        style={{
                            backgroundColor: activeButton === 1 ? '#fff200' : 'white',
                            color: activeButton === 1 ? 'black' : 'black',
                            padding: '20px 20px',
                            width: "40%",
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
                            width: "40%",
                            textAlign: "center",
                            borderRadius: "10px",
                            fontSize: "24px",
                            fontWeight: "700"
                        }}
                    >
                        MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                    </p>
                </div>
                <CardComponent
                    imageSrc="https://example.com/macbook-air.png"
                    title="Macbook Air 2024 M3 13.6inch 8GB/512GB Chính Hãng Apple VN"
                    price="31,190,000"
                    oldPrice="34,990,000"
                    discount="-11%"
                />
                {/* <div>
                    <img src={image} alt="Dynamic" style={{ borderRadius: "10px", width: "80vw" }} />
                </div> */}
                <div>

                </div>
            </div>

        </div>
    )
}

export default Section2