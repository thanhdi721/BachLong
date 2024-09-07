import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Section2.css"
interface Product {
    id: number;
    name: string;
    image: string;
}

const products = {
    "machines": [
        { id: 1, name: "Samsung Galaxy Watch7 (Bluetooth)", image: "link1.jpg" },
        { id: 2, name: "Samsung Galaxy Watch6 Classic", image: "link2.jpg" },
        { id: 3, name: "Samsung Galaxy Watch Ultra", image: "link3.jpg" },
        { id: 4, name: "Samsung Galaxy A25 5G", image: "link4.jpg" }
    ],
    "accessories": [
        { id: 5, name: "Phụ kiện 1", image: "link5.jpg" },
        { id: 6, name: "Phụ kiện 2", image: "link6.jpg" },
        { id: 7, name: "Phụ kiện 3", image: "link7.jpg" },
        { id: 8, name: "Phụ kiện 4", image: "link8.jpg" }
    ]
};

const ProductSlider: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'machines' | 'accessories'>('machines');

    const handleCategoryChange = (category: 'machines' | 'accessories') => {
        setActiveCategory(category);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className="OpenStore-Section2 product-slider">
            <div class="prt-sale-wr box-item" style="background:#fc0009">
                <div class="box-bd">
                    <div class="sale-img open-prt-bner mb-tt">
                        <span class="img">
                            <img alt="" loading="lazy" width="1200" height="250" decoding="async" data-nimg="1" class="is-des" style="color:transparent" srcSet="/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&amp;w=1200&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&amp;w=3840&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&amp;w=3840&amp;q=75" />
                            <img alt="" loading="lazy" width="500" height="200" decoding="async" data-nimg="1" class="is-mobile" style="color:transparent" srcSet="/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2F150824-TITLE-18-SP-SAP-SAN-1200.jpg&amp;w=1080&amp;q=75" />
                        </span>
                    </div>
                    <div class="deal-tag mb-it">
                        <ul class="deal-tag-list">
                            <li class="deal-tag-item cursor-pointer active">
                                <span class="deal-tag-name t25 fw-6 --t-center">18 DEAL SHOCK MÁY</span>
                            </li>
                            <li class="deal-tag-item cursor-pointer ">
                                <span class="deal-tag-name t25 fw-6 --t-center">18 DEAL SHOCK PHỤ KIỆN</span>
                            </li>
                        </ul>
                    </div>
                    <div class="product-wr">
                        <div class="prt-list row">
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prt-slide-item col w-full md:w-1/4 ">
                                <div class="prt-box">
                                    <div class="prt-info-img">
                                        <div class="info-img">
                                            <div class="ant-skeleton ant-skeleton-element ant-skeleton-active inner !h-full !w-full css-16d15cc">
                                                <div class="ant-skeleton-image inner !h-full !w-full">
                                                    <svg viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" class="ant-skeleton-image-svg">
                                                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z" class="ant-skeleton-image-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pro-content">
                                        <div class="ant-skeleton ant-skeleton-active css-16d15cc">
                                            <div class="ant-skeleton-content">
                                                <h3 class="ant-skeleton-title" style="width:38%"></h3>
                                                <ul class="ant-skeleton-paragraph" style="margin-top:1.2rem">
                                                    <li></li>
                                                    <li></li>
                                                    <li style="width:61%"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;
