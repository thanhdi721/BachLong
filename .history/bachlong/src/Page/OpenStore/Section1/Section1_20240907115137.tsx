import React from 'react'
import './Section1.css'
import { Col, Row } from 'antd'
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
                <div className="OpenStore-Section1open-title">
                    <div style={{ display: "flex" }}>
                        <h4 style={{ color: "#fff200", textDecoration: "underline" }}>THỂ Lệ- </h4>{" "}<h4>Áp dụng từ ngày: 03/08 - 30/08/2024</h4>
                    </div>
                    <h3>Chương trình đã kết thúc</h3>
                </div>
                <div className='OpenStore-Section1-video'>
                    <div >
                        <iframe  src="https://www.youtube.com/embed/9smCZlhqumg"></iframe>
                    </div>
                    <div >
                        <iframe width="595" height="315" src="https://www.youtube.com/embed/XT_osb4eUOo"></iframe>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Section1