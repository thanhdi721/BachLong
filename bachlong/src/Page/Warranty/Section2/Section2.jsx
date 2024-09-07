import React from "react";
import "./Section2.css";
import { laptopData, phoneData } from "../../utils/DataTable";

function Section2() {
  return (
    <div className="Warranty-S2-Box">
      {/* Main Title for Both Tables */}
      <p
        style={{
          color: "#ff0000",
          margin: "15px 0px",
          textAlign: "center",
          fontSize: "24px",
          lineHeight: "34px",
        }}
      >
        BẢNG GIÁ BẢO HÀNH TOÀN DIỆN
      </p>

      <div
        className="Warranty-S2-table-wrapper"
        style={{ display: "flex", justifyContent: "space-around", gap: "20" }}
      >
        {/* First Table: Điện thoại | Máy tính bảng */}
        <div className="Warranty-S2-table-container">
          <table
            className="Warranty-S2-table"
            border="1"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr>
                <th className="Warranty-S2-table-title" colSpan={4}>
                  ĐẠI TIỆC KHUYẾN MÃI VÀNG GIẢM GIÁ GÓI BẢO HÀNH LÊN ĐẾN 50%
                  <br />
                  GÓI BẢO HÀNH TOÀN DIỆN 2024 - LỖI ĐỔI MỚI
                </th>
              </tr>
              <tr>
                <th colSpan="4">
                  Áp dụng Laptop | Macbook | iMac | Watch
                  <br /> (Áp dụng từ ngày 24/11/2023)
                </th>
              </tr>
              <tr>
                <th colSpan="2">Khoảng giá trị máy</th>
                <th colSpan="2">Thời gian bảo hành</th>
              </tr>
              <tr>
                <th colSpan="1" rowSpan="2">
                  Từ
                </th>
                <th colSpan="1" rowSpan="2">
                  Đến
                </th>
                <th colSpan="2">Mua thẳng</th>
              </tr>
              <tr>
                <th colSpan="1">Giá khuyến mãi 12 tháng</th>
                <th colSpan="1">Giá khuyến mãi 24 tháng</th>
              </tr>
            </thead>
            <tbody>
              {phoneData.map((item, index) => (
                <tr key={index}>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.price12Months}</td>
                  <td>{item.price24Months}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Second Table: Laptop | Macbook | iMac | Watch */}
        <div className="Warranty-S2-table-container">
          <table
            className="Warranty-S2-table"
            border="1"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr>
                <th className="Warranty-S2-table-title" colSpan={4}>
                  ĐẠI TIỆC KHUYẾN MÃI VÀNG GIẢM GIÁ GÓI BẢO HÀNH LÊN ĐẾN 50%
                  <br />
                  GÓI BẢO HÀNH TOÀN DIỆN 2024 - LỖI ĐỔI MỚI
                </th>
              </tr>
              <tr>
                <th colSpan="4">
                  Áp dụng Laptop | Macbook | iMac | Watch
                  <br /> (Áp dụng từ ngày 24/11/2023)
                </th>
              </tr>
              <tr>
                <th colSpan="2">Khoảng giá trị máy</th>
                <th colSpan="2">Thời gian bảo hành</th>
              </tr>
              <tr>
                <th colSpan="1" rowSpan="2">
                  Từ
                </th>
                <th colSpan="1" rowSpan="2">
                  Đến
                </th>
                <th colSpan="2">Mua thẳng</th>
              </tr>
              <tr>
                <th colSpan="1">Giá khuyến mãi 12 tháng</th>
                <th colSpan="1">Giá khuyến mãi 24 tháng</th>
              </tr>
            </thead>
            <tbody>
              {laptopData.map((item, index) => (
                <tr key={index}>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.price12Months}</td>
                  <td>{item.price24Months}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Section2;
