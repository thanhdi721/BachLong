import React from "react";
import "./Section5.css";
function Section5() {
  return (
    <div>
      <section id="uudais5">
        <p className="guide-titles5">Câu hỏi thường gặp</p>
        <div className="container infor-uudai">
          <div className="Section5-item1">
            <strong className="Section5-title">
              Tôi có đủ điều kiện để đăng ký Kredivo?
            </strong>
            <br />
            <p className="Section5-content">
              Để đăng ký Kredivo, bạn phải đảm bảo các tiêu chí sau:
            </p>
            <ul>
              <li className="Section5-content">Bạn ở độ tuổi từ 18 đến 60</li>
              <li className="Section5-content">Bạn phải cư trú tại Việt Nam</li>
              <li className="Section5-content">
                Bạn có thu nhập hằng tháng từ 4.000.000 đ trở lên
              </li>
            </ul>
          </div>
        </div>
        <div className="container infor-uudai">
          <strong className="Section5-title">
            Hạn mức tín dụng tối đa khi sử dụng Kredivo là bao nhiêu?
          </strong>
          <br />
          <p className="Section5-content">
            Với Kredivo, hạn mức tín dụng tối đa sẽ tùy vào cấp độ tài khoản của
            bạn
          </p>
          <ul>
            <li className="Section5-content">
              Nếu bạn có tài khoản Basic: Hạn mức tối đa bạn có thể nhận được là
              5.000.000 đ với ưu đãi trả góp lên đến 3 tháng
            </li>
            <li className="Section5-content">
              Nếu bạn có tài khoản Premium: Hạn mức tối đa bạn có thể nhận được
              là 25.000.000 đ với ưu đãi trả góp lên đến 12 tháng
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section5;
