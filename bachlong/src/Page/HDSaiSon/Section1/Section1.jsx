import React from "react";
import "./Section1.css";
import { Table } from "antd";
function Section1() {
  const dataSource = [
    {
      key: "1",
      loanValue: "Từ 25.000.000đ - 30.000.000đ",
      discount: "100.000đ",
    },
    {
      key: "2",
      loanValue: "Từ 30.100.000đ - 35.000.000đ",
      discount: "200.000đ",
    },
    {
      key: "3",
      loanValue: "Từ 35.100.000đ - 40.000.000đ",
      discount: "300.000đ",
    },
    {
      key: "4",
      loanValue: "Trên 40.000.000đ",
      discount: "500.000đ",
    },
  ];

  const columns = [
    {
      title: "Giá trị khoản vay",
      dataIndex: "loanValue",
      key: "loanValue",
    },
    {
      title: "Giảm",
      dataIndex: "discount",
      key: "discount",
    },
  ];
  return (
    <div className="HDSaiSon-S1-Container">
      <img
        className="HDSaiSon-Section1-bg1"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/06/HEAD-TRAGOP-OFFLINE-1920-190624.png"
        alt=""
        width="100%"
      />
      <img
        className="HDSaiSon-Section1-bg2"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/06/HEAD-TRAGOP-OFFLINE-900-190624.png"
        alt=""
        width="100%"
      />
      <div className="HDSaiGon-S1Box">
        <div className="HDSaiGon-S1InBox">
          <h3 style={{ fontWeight: "400" }}>
            Còn gì tiện lợi hơn! Khi trả góp qua HD SaiSon, Home Credit,
            Shinhan, M Credit tại Bachlongmobile ngay bạn ơi! Thời gian duyệt
            nhanh, trả trước chỉ từ 10% là được giảm đến 500.000đ còn được nhận
            thêm quà ngon. Áp dụng cho tất cả các đơn hàng, xem ngay chi tiết
            bên dưới!
          </h3>
          <h2>I. Thể lệ chương trình</h2>
          <ul>
            <li>
              Khách hàng tham gia trả góp qua công ty tài chính HD SaiSon, Home
              Credit, Shinhan, M Credit sẽ được giảm ngay đến{" "}
              <strong>500.000đ</strong> dựa trên khoản vay
            </li>
            <li>Thời gian duyệt nhanh – Trả trước từ 10% – Chỉ cần CCCD</li>
            <li>Áp dụng cho tất cả các sản phẩm</li>
            <li>
              Thời gian: <strong>01/08/2024 - 31/08/2024</strong>
            </li>
          </ul>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            bordered
            className="custom-table"
            style={{ width: "500px", margin: "0 auto" }} // Giới hạn độ rộng và căn giữa bảng
          />
          <h2>
            II. Lợi ích của việc thanh toán trả góp HD SaiSon, Home Credit,
            Shinhan, M Credit online
          </h2>
          <ul>
            <li>Thanh toán nhanh chóng, thủ tục không quá rườm rà</li>
            <li>
              Không cần phải chờ đợi quá lâu như thanh toán ngoài Ngân hàng
            </li>
            <li>Chủ động hơn về tài chính của mình, không lo trễ hạn</li>
            <li>Chi phí thanh toán trả góp rõ ràng, cụ thể</li>
          </ul>
          <h2>III. Thủ tục vay</h2>
          <h2>1. Điều kiện đăng ký</h2>
          <ul>
            <li>Công dân Việt Nam</li>
            <li>Tuổi từ 18 – 70</li>
          </ul>
          <h2>2. Hồ sơ cần cung cấp</h2>
          <ul>
            <li>Căn cước công dân gắn chip điện tử Hoặc</li>
            <li>Bản sao CMND và một trong các loại giấy tờ sau:</li>
            <ul>
              <li>Giấy phép lái xe.</li>
              <li>Sổ hộ khẩu.</li>
              <li>Bản gốc đăng ký kết hôn.</li>
              <li>Bản gốc Cà vẹt xe chính chủ.</li>
            </ul>
          </ul>
          <h2>
            IV. Hướng dẫn trả góp HD SaiSon, Home Credit, Shinhan, M Credit trên
            website bachlongmobile.com
          </h2>
          <p>
            <strong>Bước 1:</strong> Chọn 1 sản phẩm mà khách hàng muốn mua
          </p>
          <p>
            <strong>Bước 2:</strong> Chọn mục Trả góp Tài chính để chuyển đến
            phần thông tin trả góp HD Saison, Home Credit, Shinhan, M Credit
          </p>
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/01/tragop-web-1-new-050124.png"
            alt=""
            className="HDSaiSon-imageHD"
          />
          <p>
            <strong>Bước 3:</strong> Trong Bảng tính trả góp tham khảo, bạn chọn
            phần trăm trả trước, Chọn số tháng trả góp và sau đó xem kết quả gói
            trả góp của của ngân hàng bạn muốn trả góp để tham khảo Số tiền trả
            trước, Khoản vay trả góp, Số tiền trả hàng tháng,.... Tiếp theo chọn
            vào nút "Chọn" để chuyển đến phần thông tin kế tiếp
          </p>
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/04/tragop-web-2-new-020424.png"
            alt=""
            className="HDSaiSon-imageHD"
          />
          <p>
            <strong>Bước 4:</strong> Nhập đầy đủ thông tin khách hàng, chọn chi
            nhánh để duyệt hồ sơ và chọn Đặt mua
          </p>
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/01/tragop-web-3-050124.png"
            alt=""
            className="HDSaiSon-imageHD"
          />
          <p>
            <strong>Bước 5:</strong> Khi khách hàng nhập đầy đủ thông tin, sẽ
            nhận được thông tin và sau đó nhân viên CSKH sẽ liên hệ khách hàng
            để hoàn tất hồ sơ.
          </p>
          <img
            src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/01/tragop-web-4-050124.png"
            alt=""
            className="HDSaiSon-imageHD"
          />
          <h3>***Mọi thắc mắc xin liên hệ CSKH 1900.63.64.69</h3>
        </div>
      </div>
    </div>
  );
}

export default Section1;
