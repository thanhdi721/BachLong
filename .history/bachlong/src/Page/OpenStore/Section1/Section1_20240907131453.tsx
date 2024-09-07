import React, { useState } from 'react'
import './Section1.css'
function Section1() {
    const [image, setImage] = useState<string>('https://via.placeholder.com/400'); // Hình ảnh mặc định
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        if (buttonId === 1) {
            setImage('https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+1');
        } else {
            setImage('https://via.placeholder.com/400/0000FF/FFFFFF?text=Image+2');
        }
    };
    return (
        <div className="OpenStore-Section1-Container">
            <div>
                <img
                    className="OpenStore-Section1-bg1"
                    src="https://bachlongmobile.com/_next/image?url=%2Fassets%2Fimages%2Fop-bner.jpg&w=1920&q=75"
                    alt=""
                    width="100%"
                />
                {/* <div className="OpenStore-Section1-open-list">
                    <div className="OpenStore-Section1-open-item x1">
                        <a href="#deal-shock-list"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-1.png" alt='' /></a>
                    </div>
                    <div className="OpenStore-Section1-open-item x2">
                        <a href="#list-mega-sale"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-2.png" alt='' /></a>
                    </div>
                    <div className="OpenStore-Section1-open-item x3">
                        <a href="#trung-qua-sn18"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-3.png" alt='' /></a>
                    </div>
                    <div className="OpenStore-Section1-open-item x2">
                        <a href="#trung-qua-sn18"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-4.png" alt='' /></a>
                    </div>
                    <div className="OpenStore-Section1-open-item x1">
                        <a href="#trung-qua-sn18"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-5.png" alt='' /></a>
                    </div>
                </div> */}

            </div>

            <div className="OpenStore-Section1open-title">
                <div style={{ display: "flex" }}>
                    <h4 style={{ color: "#fff200", textDecoration: "underline" }}>THỂ Lệ- </h4>{" "}<h4>Áp dụng từ ngày: 03/08 - 30/08/2024</h4>
                </div>
                <h3>Chương trình đã kết thúc</h3>
            </div>
            <div className='OpenStore-Section1-video'>
                <div style={{ borderRadius: "10px" }}>
                    <iframe src="https://www.youtube.com/embed/9smCZlhqumg" title="video" className='OpenStore-Section1-video-item'></iframe>
                </div>
                <div style={{ borderRadius: "10px" }} >
                    <iframe src="https://www.youtube.com/embed/XT_osb4eUOo" title="video" className='OpenStore-Section1-video-item'></iframe>
                </div>
            </div>
            <div >
                <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <button
                            onClick={() => handleButtonClick(1)}
                            style={{
                                backgroundColor: activeButton === 1 ? 'red' : 'initial',
                                color: 'white',
                                padding: '10px 20px',
                                marginRight: '10px',
                            }}
                        >
                            Nút 1
                        </button>
                        <button
                            onClick={() => handleButtonClick(2)}
                            style={{
                                backgroundColor: activeButton === 2 ? 'red' : 'initial',
                                color: 'white',
                                padding: '10px 20px',
                            }}
                        >
                            Nút 2
                        </button>
                    </div>
                    <div>
                        <img src={image} alt="Dynamic" style={{ border: '1px solid black' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1