import React from 'react'
import './Section1.css'
function Section1() {
    return (
        <div className="OpenStore-Section1-Container">
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
            <div className="open-rule">
                <div class="container">
                    <div className="rule-wr">
                        <div className="rule-left t22 fw-6"><span class="rule-popup --unl cursor-pointer">THỂ LỆ - </span><span class="rule-date">Áp dụng từ ngày: 03/08 - 30/08/2024</span></div>
                        <div class="rule-right t22 fw-6"><span class="rule-expired">Chương trình đã kết thúc</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1