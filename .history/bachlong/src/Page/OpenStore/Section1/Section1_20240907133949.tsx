import React, { useState } from 'react';
import './Section1.css';

function Section1() {
    const [activeButton, setActiveButton] = useState<number>(1); // Mặc định nút 1

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
    };

    return (
        <div className="OpenStore-Section1-Container" style={{ backgroundColor: "#fcf9d6" }}>
            <div>
                <img
                    className="OpenStore-Section1-bg1"
                    src="https://bachlongmobile.com/_next/image?url=%2Fassets%2Fimages%2Fop-bner.jpg&w=1920&q=75"
                    alt=""
                    width="100%"
                />
            </div>

            <div className="OpenStore-Section1open-title">
                <div style={{ display: "flex" }}>
                    <h4 style={{ color: "#fff200", textDecoration: "underline" }}>THỂ Lệ- </h4>{" "}
                    <h4>Áp dụng từ ngày: 03/08 - 30/08/2024</h4>
                </div>
                <h3>Chương trình đã kết thúc</h3>
            </div>

            <div style={{ textAlign: 'center' }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p
                        onClick={() => handleButtonClick(1)}
                        style={{
                            backgroundColor: activeButton === 1 ? 'red' : '#fff200',
                            color: activeButton === 1 ? 'white' : 'black',
                            padding: '20px 40px',
                            width: "35%",
                            marginRight: '10px',
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
                            backgroundColor: activeButton === 2 ? 'red' : '#fff200',
                            color: activeButton === 2 ? 'white' : 'black',
                            padding: '20px 40px',
                            width: "35%",
                            borderRadius: "10px",
                            fontSize: "24px",
                            fontWeight: "700"
                        }}
                    >
                        MIỄN PHÍ CHUYẾN ĐI. 100% CÓ QUÀ
                    </p>
                </div>

                {/* Hiển thị nội dung dựa trên nút đã chọn */}
                {activeButton === 1 && (
                    <div className='OpenStore-Section1-boxText'>
                        <strong>Nội dung cho nút 1</strong>
                        <p>- Duy nhất và độc quyền trong sự kiện sinh nhật lần này, tất cả các khách hàng đến tham quan mua sắm tại hệ thống Bạch Long Mobile có hóa đơn theo thể lệ sau đây:</p>
                        <strong style={{ textAlign: "center" }}>- Hóa đơn mua MÁY từ 5.000.000</strong><br />
                        <strong style={{ textAlign: "center" }}>=={">"} Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng Galaxy Z Flip6 256GB Chính Hãng</strong><br />
                        <strong style={{ textAlign: "center" }}>- Hóa đơn mua PHỤ KIỆN từ 300.000</strong><br />
                        <strong style={{ textAlign: "center" }}>=={">"} Nhận 1 Phiếu Hẹn tham gia vòng quay vật lý trúng thưởng Trạm sạc Pisen Chính Hãng</strong>
                        <p>- Mỗi số điện thoại khách hàng chỉ được tham gia 1 lần cho 1 giải thưởng...</p>
                    </div>
                )}

                {activeButton === 2 && (
                    <div className='OpenStore-Section1-boxText'>
                        <strong>Nội dung cho nút 2</strong>
                        <p><strong>MỪNG SINH NHẬT: 100% MUA LÀ CÓ QUÀ </strong> Tất cả các khách hàng đến tham quan mua sắm trong chương trình với tổng hóa đơn từ 5.000.000 sẽ nhận được 1 phần quà sinh nhật cùng với Bạch Long Mobile...</p>
                        <strong>- Hoàn 100% chi phí chuyến đi cho khách hàng (tối đa 300.000Đ).</strong>
                        <p>- Áp dụng hoàn tiền cho khách hàng có tổng hóa đơn mua sắm từ 5.000.000</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Section1;
