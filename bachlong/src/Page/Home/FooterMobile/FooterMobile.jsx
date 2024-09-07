import React, { useState } from "react";
import "./FooterMobile.css";
import imageATM from "../../../images/atm.jpg";
import imageATM1 from "../../../images/atm1.jpg";

function FooterMobile() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle function to change visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className="footer1-mb">
        <div>
          <p class="name-upper-red-mb">Báo chí nói về Bạch Long Mobile</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            src="https://old.bachlongmobile.com/media/theme/Asset%2016.png"
            alt=""
            width={150}
            height={50}
          />
          <img
            src="https://old.bachlongmobile.com/media/theme/Asset%2021.png"
            alt=""
            width={150}
            height={50}
          />
          <img
            src="https://old.bachlongmobile.com/media/theme/Asset%2020.png"
            alt=""
            width={150}
            height={50}
          />
          <img
            src="https://old.bachlongmobile.com/media/theme/Asset%2019.png"
            alt=""
            width={150}
            height={50}
          />
          {/* <img
            src="https://old.bachlongmobile.com/media/theme/Asset%2017.png"
            alt=""
            width={150}
            height={50}
          />
          <img
            src="https://old.bachlongmobile.com/media/theme/Asset%2018.png"
            alt=""
            width={150}
            height={50}
          /> */}
        </div>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li
            className="footer-s1-item"
            style={{ fontSize: "18px", fontWeight: "450" }}
          >
            Thông tin liên lạc
          </li>
          <li className="footer-s1-item">
            Gọi Mua hàng/Tư vấn (8h00 - 21h30):
            <span style={{ color: "red" }}>1900.63.64.69</span>
          </li>
          <li className="footer-s1-item">
            Gọi Bảo hành/Sửa chữa (9h00 - 18h00):
            <span style={{ color: "red" }}> 1900.63.69.81</span>
          </li>
          <li className="footer-s1-item">
            Thời gian phục vụ tại cửa hàng: 8h00 - 21h30
          </li>
          <li className="footer-s1-item">
            Khiếu nại, góp ý:
            <span style={{ color: "red" }}> 0938.038.038</span>
          </li>
          <li className="footer-s1-item">
            Hợp tác kinh doanh:
            <span style={{ color: "red" }}> 0908.038.038</span> (điện
            thoại/zalo)
          </li>
          <li className="footer-s1-item">
            Email:
            <span style={{ color: "red" }}>nganhhang@bachlongmobile.com</span>
          </li>
        </ul>

        <p
          style={{
            fontWeight: "400",
            color: "#333",
            textTransform: "uppercase",
          }}
        >
          Tìm cửa hàng gần bạn
        </p>
        <div>
          {/* Toggle button */}
          <p
            onClick={toggleVisibility}
            style={{
              fontSize: "12px",
              fontWeight: "500",
              margin: "3px 0px",
            }}
          >
            {isVisible ? "Hệ thống cửa hàng ▲" : "Hệ thống cửa hàng ▼ "}
          </p>

          {/* Conditional rendering of the store list */}
          {isVisible && (
            <ul>
              <li>Apple Center: 83 Trần Phú, P.4, Q.5</li>
              <li>Samsung Premium Store: 134 Trần Phú, P.4, Q.5</li>
              <li>136 Trần Phú, P.4, Q.5</li>
              <li>225 Trần Quang Khải, P.Tân Định, Q.1</li>
              <li>251 - 253 Trần Hưng Đạo, P.Cô Giang, Q.1</li>
              <li>581 Nguyễn Thị Thập, P.Tân Phong, Q.7</li>
              <li>316 - 318 Ba Tháng Hai, P.12, Q.10</li>
              <li>480 - 482 Quang Trung, P.10, Gò Vấp</li>
              <li>194 Võ Văn Ngân, P.Bình Thọ, Thủ Đức</li>
              <li>Trung tâm bảo hành: 81 Trần Phú, P.4, Q.5</li>
            </ul>
          )}
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <img
            src="https://bachlongcare.com/wp-content/uploads/2024/08/220824-LOGO-BLM.png"
            alt=""
            width={105}
            height={35}
            style={{
              backgroundColor: "#ffd503",
              borderRadius: "10px",
              padding: "3px",
            }}
          />
          <img
            src="https://bachlongcare.com/wp-content/uploads/2024/08/220824-LOGO-VLBLM.png"
            alt=""
            width={105}
            height={35}
            style={{
              backgroundColor: "#ffd503",
              borderRadius: "10px",
              padding: "3px",
            }}
          />
          <img
            src="https://bachlongcare.com/wp-content/uploads/2024/08/220824-LOGO-BLC.png"
            alt=""
            width={105}
            height={35}
            style={{
              backgroundColor: "#003b77",
              borderRadius: "10px",
              padding: "3px",
            }}
          />
        </div>
        <p
          style={{
            fontWeight: "400",
            color: "#333",
            textTransform: "uppercase",
            margin: "0.2em",
          }}
        >
          Phương thức thanh toán
        </p>
        <img src={imageATM} alt="" width={200} height={90} />
        <p
          style={{
            fontWeight: "400",
            color: "#333",
            textTransform: "uppercase",
            margin: "0.2em",
          }}
        >
          Hình thức vận chuyển
        </p>
        <img src={imageATM1} alt="" width={170} height={50} />
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <div>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li className="footer-s1-item">Giới thiệu Bạch Long Mobile</li>
              <li className="footer-s1-item">Giới thiệu Bạch Long Care</li>
              <li className="footer-s1-item">Tra cứu B-member</li>
              <li className="footer-s1-item">Hướng dẫn mua hàng Online</li>
              <li className="footer-s1-item">Hình thức thanh toán</li>
              <li className="footer-s1-item">Quy định giao hàng</li>
              <li className="footer-s1-item">Tuyển dụng</li>
              <li className="footer-s1-item">Tin tức Bnews</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li className="footer-s1-item">Chính sách bảo hành</li>
              <li className="footer-s1-item">Bảo hành toàn diện</li>
              <li className="footer-s1-item">Đổi cũ lấy mới</li>
              <li className="footer-s1-item">Trả góp 0% lãi suất</li>
              <li className="footer-s1-item">Chính sách bảo mật</li>
              <li className="footer-s1-item">Điều khoản sử dụng</li>
              <li className="footer-s1-item">Câu hỏi thường gặp</li>
            </ul>
          </div>
        </div>
        <div
          style={{ margin: "auto", justifyContent: "center", display: "grid" }}
        >
          <p
            style={{
              fontWeight: "600",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Theo dõi chúng tôi tại
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/icon-ft-fb-100724.png"
              alt=""
              width={46}
              height={46}
            />
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/icon-ft-instagam-100724.png"
              alt=""
              width={46}
              height={46}
            />
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/icon-ft-youtube-100724.png"
              alt=""
              width={46}
              height={46}
            />
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/icon-ft-tiktok-100724.png"
              alt=""
              width={46}
              height={46}
            />
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/07/icon-ft-zalo-100724.png"
              alt=""
              width={46}
              height={46}
            />
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/220824-LOGO-SHOPEE-MALL-1.png"
              alt=""
              width={46}
              height={46}
            />
          </div>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>
            © 2019. Công ty TNHH Thương mại công nghệ Bạch Long. <br />
            GPDKKD: 0311767538 do sở KH & ĐT TP.HCM cấp ngày 03/05/2012. <br />
            Địa chỉ: 134 - 136 Trần Phú, Phường 4, Quận 5, TP. Hồ Chí Minh
          </p>
          <img
            src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
            alt=""
            width={150}
            height={60}
            style={{ display: "block", margin: "auto" }}
          />
        </div>
        <div class="ftr1-3">
          <p>
            <a href="https://bachlongmobile.com/apple.html">
              Chuyên trang Apple (AAR)
            </a>
            &nbsp;/{" "}
            <a href="https://bachlongmobile.com/samsung">
              Chuyên trang Samsung (SPS)
            </a>
            &nbsp;/{" "}
            <a href="https://bachlongmobile.com/iphone-15-pro-max.html">
              iPhone 15 Pro Max
            </a>{" "}
            /{" "}
            <a href="https://bachlongmobile.com/iphone-15-pro.html">
              iPhone 15 Pro
            </a>{" "}
            /{" "}
            <a href="https://bachlongmobile.com/iphone-15-plus.html">
              iPhone 15 Plus
            </a>{" "}
            / <a href="https://bachlongmobile.com/iphone-15.html">iPhone 15</a>
            &nbsp;/&nbsp;
            <a href="https://bachlongmobile.com/iphone-14-pro-max.html">
              iPhone 14 Pro | 14 Pro Max
            </a>
            &nbsp; /{" "}
            <a href="https://bachlongmobile.com/iphone-14.html">
              iPhone 14 | 14 Plus
            </a>
            &nbsp;/{" "}
            <a href="https://bachlongmobile.com/iphone-13.html">iPhone 13</a>
            &nbsp;/{" "}
            <a href="https://bachlongmobile.com/apple-iphone-11.html">
              iPhone 11
            </a>
            &nbsp;/{" "}
            <a href="https://bachlongmobile.com/may-dung-roi.html">
              Điện thoại cũ
            </a>{" "}
            /{" "}
            <a href="https://bachlongmobile.com/samsung">Điện thoại Samsung</a>{" "}
            / <a href="https://bachlongmobile.com/apple">Điện thoại iPhone</a> /{" "}
            <a href="https://bachlongmobile.com/ipad-pro.html">iPad Pro</a>{" "}
            /&nbsp;
            <a href="https://bachlongmobile.com/ipad-pro-m1.html">
              iPad Pro M1
            </a>
            &nbsp;/{" "}
            <a href="https://bachlongmobile.com/ipad-air-2020.html">iPad Air</a>{" "}
            /&nbsp;
            <a href="https://bachlongmobile.com/ipad-mini-6-2021.html">
              iPad mini 6
            </a>
            /<a href="https://bachlongmobile.com/apple-ipad.html">iPad</a>
            &nbsp;/
            <a href="https://bachlongmobile.com/apple-watch-ultra-2.html">
              Apple Watch Ultra&nbsp;2
            </a>
            &nbsp;/
            <a href="https://bachlongmobile.com/apple-watch-series-59.html">
              Apple Watch Series 9
            </a>
            &nbsp;/
            <a href="https://bachlongmobile.com/apple-watch-ultra.html">
              Apple Watch Ultra
            </a>
            &nbsp;/
            <a href="https://bachlongmobile.com/apple-watch-series8.html">
              Apple Watch 8
            </a>
            /&nbsp;&nbsp;
            <a href="https://bachlongmobile.com/apple-watch-se.html">
              Apple Watch SE
            </a>
            /
            <a href="https://bachlongmobile.com/dien-thoai-xiaomi.html">
              Điện thoại xiaomi
            </a>
            &nbsp;
            <a href="https://bachlongmobile.com/oppo.html">Điện thoại oppo</a>
            &nbsp;
            <a href="https://bachlongmobile.com/apple-macbook-pro-m2.html">
              Macbook Pro M2
            </a>
            /&nbsp;
            <a href="https://bachlongmobile.com/macbook-pro.html">
              Macbook Pro M1
            </a>
            /
            <a href="https://bachlongmobile.com/apple-macbook-air-m2.html">
              Macbook Air M2
            </a>
            /&nbsp;
            <a href="https://bachlongmobile.com/apple-macbook-air-2020-chip-m1.html">
              Macbook Air M1
            </a>
            &nbsp;/
            <a href="https://bachlongmobile.com/imac.html">Mac Studio | iMac</a>
            &nbsp;/
            <a href="https://bachlongmobile.com/laptop-lg.html">Laptop LG</a>
            &nbsp;/
            <a href="https://bachlongmobile.com/smart-home.html">
              Smart Home (Nhà thông minh)
            </a>
            &nbsp;/
            <a href="https://bachlongmobile.com/phu-kien-apple.html">
              Phụ kiện Apple
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
