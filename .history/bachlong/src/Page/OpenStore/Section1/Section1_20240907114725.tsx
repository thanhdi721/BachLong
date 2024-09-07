import React from 'react'
import './Section1.css'
function Section1() {
    return (
        <div className="OpenStore-Section1-Container">
            <div>
                <img
                    className="OpenStore-Section1-bg1"
                    src="https://bachlongmobile.com/_next/image?url=%2Fassets%2Fimages%2Fop-bner.jpg&w=1920&q=75"
                    alt=""
                    width="100%"
                />
                <div className="OpenStore-Section1-open-list">
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
                </div>
                <div className="OpenStore-Section1open-title">
                    <div style={{ display: "flex" }}>
                        <h4 style={{ color: "#fff200", textDecoration: "underline" }}>THỂ Lệ-</h4>{" "}<h4>Áp dụng từ ngày: 03/08 - 30/08/2024</h4>
                    </div>
                    <h3>Chương trình đã kết thúc</h3>
                </div>
            </div>


        </div>
    )
}

export default Section1