import React from 'react'
import './Section1.css'
import banner from "../../../images/baner.png"
function Section1() {
    return (
        <div className="OpenStore-Section1-Container">
            <img
                className="OpenStore-Section1-bg1"
                src="https://bachlongmobile.com/_next/image?url=%2Fassets%2Fimages%2Fop-bner.jpg&w=1920&q=75"
                alt=""
                width="100%"
            />
            <div style={{ display: "flex" }}>
                {/* <img src='https://www.bachlongmobile.com/assets/images/box-khai-truong-1.png' alt='' />
                <img src='https://www.bachlongmobile.com/assets/images/box-khai-truong-2.png' alt='' />
                <img src='https://www.bachlongmobile.com/assets/images/box-khai-truong-3.png' alt='' />
                <img src='https://www.bachlongmobile.com/assets/images/box-khai-truong-4.png' alt='' />
                <img src='https://www.bachlongmobile.com/assets/images/box-khai-truong-5.png' alt='' /> */}
                <img src={banner} alt='' className='OpenStore-Section1' />
            </div>
        </div>
    )
}

export default Section1