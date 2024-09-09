import React, { useState } from 'react'
import './Section1.css'
function Section1() {
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
        <div className="OpenStore-Section1-Container" style={{ backgroundColor: "#fcf9d6" }}>
            {/* <div>
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

            </div> */}
            <div className="open-bner">

                <img src='https://bachlongmobile.com/_next/image?url=%2Fassets%2Fimages%2Fop-bner.jpg&w=1920&q=75' alt='' width="100%" />

                <div className="open-scroll">
                    <div className="container">
                        <div className="open-list">
                            <div className="open-item x1">
                                <a href="#deal-shock-list"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-1.png" alt='' width="100%" /></a>
                            </div>
                            <div className="open-item x2">
                                <a href="#list-mega-sale"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-2.png" alt='' width="100%" /></a>
                            </div>
                            <div className="open-item x3">
                                <a href="#trung-qua-sn18"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-3.png" alt='' width="100%" /></a>
                            </div>
                            <div className="open-item x2">
                                <a href="#trung-qua-sn18"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-4.png" alt='' width="100%" /></a>
                            </div>
                            <div className="open-item x1">
                                <a href="#trung-qua-sn18"><img src="https://www.bachlongmobile.com/assets/images/box-khai-truong-5.png" alt='' width="100%" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="OpenStore-Section1open-title">
                <div style={{ display: "flex" }}>
                    <h4 style={{ color: "#fff200", textDecoration: "underline" }}>THỂ Lệ- </h4>{" "}<h4>Áp dụng từ ngày: 03/08 - 30/08/2024</h4>
                </div>
                <h4>Chương trình đã kết thúc</h4>
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <p
                            onClick={() => handleButtonClick(1)}
                            className='OpenStore-Section1-boxTextTitle'
                            style={{
                                backgroundColor: activeButton === 1 ? 'red' : '#fff200',
                                color: activeButton === 1 ? 'white' : 'black',

                            }}
                        >
                            MỪNG SINH NHẬT TRÚNG SIÊU PHẨM
                        </p>
                        <p
                            onClick={() => handleButtonClick(2)}
                            className='OpenStore-Section1-boxTextTitle'
                            style={{
                                backgroundColor: activeButton === 2 ? 'red' : '#fff200',
                                color: activeButton === 2 ? 'white' : 'black',

                            }}
                        >
                            MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                        </p>
                    </div>
                    <div>
                        <img src={image} alt="Dynamic" className='OpenStore-Section1-boxTextImage' />
                    </div>
                    {activeButton === 1 && (
                        <div className='OpenStore-Section1-boxText'>
                            <p>- Duy nhất và độc quyền trong sự kiện sinh nhật lần này, tất cả các khách hàng đến tham quan mua sắm tại hệ thống Bạch Long Mobile có hóa đơn theo thể lệ sau đây:</p>
                            <strong style={{ textAlign: "center" }}>- Hóa đơn mua MÁY từ 5.000.000</strong><br />
                            <strong style={{ textAlign: "center" }}>=={">"} Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng Galaxy Z Flip6 256GB Chính Hãng</strong><br />
                            <strong style={{ textAlign: "center" }}>- Hóa đơn mua PHỤ KIỆN từ 300.000</strong><br />
                            <strong style={{ textAlign: "center" }}>=={">"} Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng Trạm sạc Pisen Chính Hãng</strong>
                            <p>- Mỗi số điện thoại khách hàng chỉ được tham gia 1 lần cho 1 giải thưởng. - Số điện thoại tham gia phải là chính chủ và có mặt tại buổi quay thưởng. - Thời gian diễn ra Vòng quay vật lý: <strong>09h30, ngày 31/08/2024 tại Bạch Long Mobile Trần Hưng Đạo Q.1 TP.HCM</strong>
                            </p>
                        </div>
                    )}
                    {activeButton === 2 && (
                        <div className='OpenStore-Section1-boxText'>
                            <p><strong>MỪNG SINH NHẬT: 100% MUA LÀ CÓ QUÀ </strong> Tất cả các khách hàng đến tham quan mua sắm trong chương trình với tổng hóa đơn từ 5.000.000 sẽ nhận được 1 phần quà sinh nhật cùng với Bạch Long Mobile: - <strong>Tặng ngay 1 nón bảo hiểm cao cấp kỷ niệm Bạch Long Mobile 18 năm.</strong> - Số lượng quà tặng có hạn, quý khách hàng hãy nhanh chân đến Bạch Long nhận quà nhé.<strong> MỪNG SINH NHẬT: MIỄN PHÍ CHUYẾN ĐI ĐẾN BẠCH LONG MUA SẮM</strong> Duy nhất và độc quyền trong sự kiện sinh nhật lần này, tất cả các khách hàng trong nội thành TP.HCM đến tham quan mua sắm tại hệ thống Bạch Long Mobile di chuyển bằng các hình thức xe công nghệ có hóa đơn thể hiện lộ trình đến cửa hàng Bạch Long Mobile gần nhất, sẽ nhận được ưu đãi: <strong>- Hoàn 100% chi phí chuyến đi cho khách hàng (tối đa 300.000Đ). - Áp dụng hoàn tiền cho khách hàng có tổng hóa đơn mua sắm từ 5.000.000</strong> - Quý khách vui lòng cung cấp chứng từ hóa đơn di chuyển có thể hiện điểm đến là Bạch Long Mobile gần nhất để được hoàn tiền. - Mỗi khách hàng chỉ được hoàn tiền 1 lần trong suốt thời gian chương trình diễn ra.
                            </p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Section1