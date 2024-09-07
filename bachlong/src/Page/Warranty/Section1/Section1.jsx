import React from "react";
import "./Section1.css";
import { dataSourceWarranty, dataSource } from "../../utils/DataTable";
function Section1() {
  return (
    <div className="Warranty-Section1-Container">
      <img
        className="Warranty-Section1-bg1"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/030824-HEAD-BHTD-1920.png"
        alt=""
        width="100%"
      />
      <img
        className="Warranty-Section1-bg2"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/030824-HEAD-BHTD-900.png"
        alt=""
        width="100%"
      />
      <p
        style={{
          color: "#ff0000",
          margin: "15px 0px",
          textAlign: "center",
          fontSize: "24px",
          lineHeight: "34px",
        }}
      >
        BẢO HÀNH TOÀN DIỆN 2024 <br />
        LỖI ĐỔI MỚI 100%
      </p>

      <div className="Warranty-S1-Box">
        <p>
          Tự hào là{" "}
          <strong>
            Hệ thống Uỷ quyền Chính hãng Apple và Đối tác toàn diện Samsung Việt
            Nam
          </strong>
          , Bạch Long Mobile luôn được biết đến là đơn vị uy tín khi đem đến
          những sản phẩm công nghệ chính hãng với chất lượng cao nhất nhưng vẫn
          đảm bảo mức giá thấp nhất thị trường. Quý khách tham gia gói bảo hành
          toàn diện - lỗi đổi MỚI 100% sẽ nhận được các ưu đãi giảm ngay 50% duy
          nhất chỉ có tại Bạch Long Mobile
        </p>
        <strong>I. Bảo hành toàn diện:</strong>
        <p>
          <strong>1. Sản phẩm áp dụng:</strong> Tất cả Điện Thoại, Máy Tính
          Bảng, Laptop, Macbook, iMac, Apple Watch... Máy mới/cũ đang được kinh
          doanh tại hệ thống Bạch Long Mobile.
        </p>
        <p>
          <strong>2. Thời hạn bảo hành:</strong> 12 tháng, có thể gia hạn lên 24
          tháng
        </p>
        <strong>3. Ưu đãi đặc quyền:</strong>
        <p>
          Ưu đãi độc quyền khi tham gia “Bảo Hành Toàn Diện – Lỗi Là Đổi Mới”:
        </p>
        <ul>
          <li>
            Giảm ngay 50% lên đến 1.000.000đ khi mua gói Bảo hành Toàn diện.
          </li>
          <li>
            Tặng ngay bộ sạc nhanh 20W khi mua máy likenew (99%) và tham gia gói
            Bảo Hành Toàn Diện.
          </li>
          <li>
            Tặng ngay Cóc sạc 20W khi mua máy qua chương trình thu cũ đổi mới và
            tham gia gói Bảo Hành Toàn Diện.
          </li>
          <li>
            Giảm ngay 300.000 khi thanh toán 100% đơn hàng qua chuyển khoản và
            tham gia Bảo Hành Toàn Diện.
          </li>
          <li>
            Giảm đến 1.250.000đ khi trả góp qua HD Saison | Kredivo | Home Pay
            Later kèm các dịch vụ đang có tại Bạch Long Mobile.
          </li>
        </ul>
        <strong>4. Nội dung bảo hành:</strong>

        <table className="Warranty-Table">
          <thead>
            <tr>
              <th>Nội dung bảo hành</th>
              <th>Bảo hành tiêu chuẩn</th>
              <th>Bảo hành toàn diện</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item) => (
              <tr key={item.key}>
                <td>{item.issue}</td>
                <td>{item.standardWarranty}</td>
                <td>{item.fullWarranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <strong>LƯU Ý:</strong>
        <p>
          (*) Các trường hợp liên quan đến thẩm mỹ: cấn móp, hở viền… có ảnh
          hưởng tới trải nghiệm trên máy và đáp ứng đủ điều kiện bảo hành theo
          quy định của chính hãng sẽ được hỗ trợ bảo hành.
        </p>
        <strong>
          II. Quyền lợi và nội dung bảo hành toàn diện: (Thời gian xử lý 24h làm
          việc)
        </strong>
        <p>
          Khi máy lỗi do nhà sản xuất (đủ điều kiện bảo hành theo quy định của
          chính hãng) trong 30 ngày đầu{" "}
          <strong>ĐỔI MỚI 100% NHƯ LÚC MUA.</strong>
        </p>
        <p>
          - Khi máy lỗi gặp vấn đề rơi vỡ, vào nước, bể nát, cong vênh, biến
          dạng vẫn được ĐỔI.
        </p>
        <div className="Warranty-Table-Component">
          <table className="Warranty-Table">
            <thead>
              <tr>
                <th>TRƯỜNG HỢP</th>
                <th>LOẠI MÁY</th>
                <th>NỘI DUNG</th>
                <th>TÌNH TRẠNG HỢP ĐỒNG</th>
              </tr>
            </thead>
            <tbody>
              {dataSourceWarranty.map((item) => (
                <tr key={item.key}>
                  <td>{item.key}</td>
                  <td>{item.issue}</td>
                  <td>{item.standardWarranty}</td>
                  <td>{item.fullWarranty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Section1;
