import React, { useState } from 'react'
import './Section2.css'
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
                <div>
                    {/* <img src={image} alt="Dynamic" style={{ borderRadius: "10px", width: "80vw" }} /> */}
                    <div class="swiper-slide prt-slide-item col" style="height: calc(50% + 0px); width: 297px;" data-swiper-slide-index="1"><div class="prt-box open-prt-item"><div class="prt-info-tab"><ul className="info-tab-list"><li class="info-tab-item --bd"><span class="txt t10">Trả góp 0%</span></li></ul></div><div class="prt-info-img"><a class="info-img" href=""><img src="https://beta-api.bachlongmobile.com/media/landingpagebanner/150824-FRAME-18-SAP-SAN-300.png" alt="" loading="lazy"><img alt="" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" class="img-sale" srcset="/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbfb35fd1430014b0a164bf3a48626862%2Fm%2Fa%2Fmac-topzone-promax-black-650x650_1_1.png&amp;w=1080&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbfb35fd1430014b0a164bf3a48626862%2Fm%2Fa%2Fmac-topzone-promax-black-650x650_1_1.png&amp;w=2048&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbfb35fd1430014b0a164bf3a48626862%2Fm%2Fa%2Fmac-topzone-promax-black-650x650_1_1.png&amp;w=2048&amp;q=75" style="color: transparent;"></a></div><div class="prt-info-dt"><div class="info-name t14 fw-7"><span class="inner-txt">Macbook Pro 2023 (M3 Pro) 14 inch 18GB/1TB - Chính hãng Apple VN</span></div><div class="info-price"><p class="price-curr t16 fw-7 ">56.390.000 VNĐ</p><p class="price-origin t14">65.990.000 VNĐ<span class="info-tab-item --bg"><span class="txt t13">-15%</span></span></p></div><a class="btn-buy-prt btn --buy !w-full" href="/products/macbook-pro-2023-m3-pro-14-inch-18gb-1tb-chinh-h-ng-apple-vn"><span class="txt t18 fw-6 --upper">Mua ngay</span></a></div></div></div>
                    </div>
                </div>

            </div>
            )
}

            export default Section2