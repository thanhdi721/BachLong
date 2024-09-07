import React from "react";
import "./Section1.css";
function Section1() {
  return (
    <div className="HomePayLater-S1-Container">
      <img
        className="HomePayLater-Section1-bg1"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/12/head-homepaylater-1920x600_5-111223.png"
        alt=""
        width="100%"
      />
      <img
        className="HomePayLater-Section1-bg2"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/12/head-homepaylater-900x900_5-111223.png"
        alt=""
        width="100%"
      />

      <div className="HomePayLater-S1-banner-header">
        <img
          src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/10/top-banner-first-homepaylater-131023.png"
          alt="HOME PayLater dành tặng bạn"
          className="HomePayLater-S1-banner-title-image"
        />
      </div>
      <div className="HomePayLater-S1-offer-banner">
        <div className="HomePayLater-S1-offer-content">
          <div className="HomePayLater-S1-offer-details">
            <h3>Ưu đãi:</h3>
            <p>- Giảm 5% đến 1.250.000</p>
            <p>- Giảm 10% tới đa 500.000 (áp dụng cho thứ 7, chủ nhật).</p>
          </div>
          <ul className="HomePayLater-S1-conditions">
            <li>- Áp dụng khi thanh toán tại Bạch Long Mobile.</li>
            <li>- Thời gian khuyến mãi: từ 01/08/2024 đến 31/08/2024.</li>
            <li>- Các chương trình không được áp dụng đồng thời.</li>
            <li>- Mỗi user được sử dụng khuyến mãi 4 lần/tháng.</li>
            <li>- Voucher sẽ không được sử dụng lại nếu đơn hàng bị hủy.</li>
          </ul>
          <div className="HomePayLater-S1-terms">
            <h3>Điều khoản khác:</h3>
            <p>
              Chương trình sẽ kết thúc khi hết ngân sách khuyến mãi hoặc vào hạn
              cuối của chương trình, tùy vào điều kiện nào đến trước nhất. Khi
              có bất kỳ thắc mắc nào, vui lòng liên hệ: 0908225588
            </p>
          </div>
        </div>
      </div>
      <div className="HomePayLater-S1-banner-header">
        <img
          src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/07/infor-second-new-200723-min.png"
          alt="HOME PayLater dành tặng bạn"
          className="HomePayLater-S1-banner-title-image"
          style={{ marginTop: "30px" }}
        />
      </div>
      <div className="HomePayLater-S1-banner-header">
        <img
          src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/07/infor-thirst-new-200723-min.png"
          alt="HOME PayLater dành tặng bạn"
          className="HomePayLater-S1-banner-title-image"
          style={{ marginTop: "100px" }}
        />
      </div>
    </div>
  );
}

export default Section1;
