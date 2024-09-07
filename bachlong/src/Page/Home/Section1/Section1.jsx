import React from "react";
import "./Section1.css";
function Section1() {
  return (
    <div className="Section1-container">
      <img
        className="Section1-bg1"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/HEAD-KREDIVO-T8-1920-030824.png"
        alt=""
        width="100%"
      />
      <img
        className="Section1-bg2"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/HEAD-KREDIVO-T8-900-030824.png"
        alt=""
        width="100%"
      />
      <div>
        <nav class="Section1-navbar">
          <div class="logo">
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/logo.png"
              alt="Kredivo Logo"
              className="Section1-logo"
            />
          </div>
          <ul class="Section1-nav-links">
            <li>
              <a href="#uudai">Ưu đãi</a>
            </li>
            <li>
              <a href="#hd">Giới thiệu</a>
            </li>
            <li>
              <a href="#hd">Hướng dẫn đăng ký</a>
            </li>
            <li>
              <a href="#tn">Cách thanh toán</a>
            </li>
            <li>
              <a href="#ch">Câu hỏi thường gặp</a>
            </li>
          </ul>
        </nav>
      </div>
      <section id="uudai">
        <p className="guide-title">Ưu đãi</p>
        <div className="container infor-uudais1">
          <strong>
            Duy Nhất Dịp Này Có Tại Bạch Long Mobile – Hỗ Trợ Thanh Toán Tốt
            Nhất Thị Trường
          </strong>
          <ul style={{ listStyleType: "none" }}>
            <li>
              - Độc quyền giảm <strong>2% tối đa đến 500.000</strong> do Bạch
              Long Mobile hỗ trợ
            </li>
            <li>
              - Kredivo tặng thêm ưu đãi <strong>5% tối đa đến 200.000</strong>{" "}
              cho đơn hàng sử dụng dịch vụ
            </li>
          </ul>
          <strong>Khách hàng lưu ý giúp cho Bạch Long Mobile</strong>
          <br />
          <span>
            + Chương trình áp dụng cho khách hàng thanh toán mua hàng qua dịch
            vụ của Kredivo tại Bạch Long Mobile lần thứ 2(Cách nhau tối thiểu
            24h)
          </span>
          <br />
          <span>
            + Máy sau khi thanh toán phải kích hoạt ngay tại cửa hàng để đảm bảo
            quyền lợi cao nhất cho khách hàng.
          </span>
          <br />
          <strong style={{ fontSize: "18px" }}>
            ***Đặc quyền 5 sao tại Bạch Long Mobile
          </strong>
          <ul className="box-uudai">
            <li>
              Khi mua hàng và thanh toán qua Kredivo, khách hàng sẽ có quyền
              tham gia quay số với <strong>100% trúng quà</strong>
            </li>
            <li>
              Khi mua kèm Bảo Hành Toàn Diện (BHTD) cho sản phẩm, Bạch Long
              Mobile <strong>giảm thêm 1.000.000</strong>
            </li>
            <li>
              Hỗ trợ cực khủng lên <strong>đến 5.000.000</strong> cho chương
              trình thu cũ đổi mới cho khách hàng
            </li>
            <li>
              Đối với máy Likenew (99%), khách hàng sẽ được Bạch Long Mobile{" "}
              <strong>tặng ngay cho 1 củ sạc chính hãng 20W</strong>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section1;
