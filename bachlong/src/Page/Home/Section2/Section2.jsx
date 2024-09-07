import React from "react";
import "./Section2.css"; // Make sure to create a corresponding CSS file
import { Row, Col } from "antd";
const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-content">
        <div className="section2-text">
          <p>
            Kredivo là ứng dụng Mua trước trả sau hàng đầu Đông Nam Á. Người
            dùng Kredivo có thể mua trước trả sau hoặc vay cá nhân với mức lãi
            suất thấp mà không cần chứng minh thu nhập. Ứng dụng hiện có 4 triệu
            người dùng trên khắp Đông Nam Á
          </p>
        </div>
        <Row className="section2-features" gutter={[12, 12]}>
          <Col span={12} className="feature-item">
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/ic-1.png"
              alt=""
            />
            <p>Mua hàng trước, trả tiền sau</p>
          </Col>
          <Col span={12} className="feature-item">
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/ic-1.png"
              alt=""
            />
            <p>Trả góp 6 tháng, 12 tháng</p>
          </Col>
        </Row>
        <Row className="section2-features" gutter={[12, 12]}>
          <Col span={12} className="feature-item">
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/ic-1.png"
              alt=""
            />
            <p>Hạn mức đến 25 triệu</p>
          </Col>
          <Col span={12} className="feature-item">
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/ic-1.png"
              alt=""
            />
            <p>Trả sau 30 ngày, 3 tháng, 0% lãi suất</p>
          </Col>
        </Row>
      </div>
      <div className="Section2-itemImage2">
        <div className="section2-download">
          <h3>Tải ứng dụng Kredivo ngay</h3>
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/google-play.png"
            alt="Google Play"
            className="download-button"
          />
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/appstore.png"
            alt="App Store"
            className="download-button"
          />
        </div>
        <div className="section2-image">
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-26.png"
            alt="App Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
