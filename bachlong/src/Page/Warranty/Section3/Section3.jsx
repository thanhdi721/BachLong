import React from "react";
import "./Section3.css";
import { tableDataS3 } from "../../utils/DataTable";

function Section3() {
  return (
    <div className="Warranty-S3-Box">
      <div className="Warranty-S3-table-container">
        <table
          className="Warranty-S3-table"
          border="1"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th className="Warranty-S3-table-title" colSpan={8}>
                ĐẠI TIỆC KHUYẾN MÃI VÀNG GIẢM GIÁ GÓI BẢO HÀNH LÊN ĐẾN 50%
                <br />
                GÓI BẢO HÀNH TOÀN DIỆN 2024 - LỖI ĐỔI MỚI
              </th>
            </tr>
            <tr>
              <th colSpan="8">
                Áp dụng Điện thoại Samsung S Series, Z Series
                <br /> (Áp dụng từ ngày 23/01/2024)
              </th>
            </tr>
            <tr>
              <th colSpan="2">KHOẢNG GIÁ TRỊ MÁY</th>
              <th colSpan="3">
                ÁP DỤNG CÁC DÒNG SAMSUNG S SERIES VÀ Z SERIES (BAO GỒM CẢ GALAXY
                S24 SR)
              </th>
              <th colSpan="3">ÁP DỤNG RIÊNG SAMSUNG Z FOLD5 VÀ Z FLIP5</th>
            </tr>
            <tr>
              <th colSpan="1" rowSpan="2">
                Từ
              </th>
              <th colSpan="1" rowSpan="2">
                Đến
              </th>
              <th colSpan="1">Mua thẳng</th>
              <th colSpan="2">MUA KÈM MÁY GIẢM 1 TRIỆU (Giá đã giảm)</th>
              <th colSpan="1" rowSpan="2">
                Sản Phẩm
              </th>
              <th colSpan="1">MUA THẲNG</th>
              <th colSpan="1">MUA KÈM MÁY GIẢM 1 TRIỆU (Giá đã giảm)</th>
            </tr>
            <tr>
              <th colSpan="1">Giá khuyến mãi 12 tháng</th>
              <th colSpan="1">Giá khuyến mãi 12 tháng</th>
              <th colSpan="1">Giá khuyến mãi 24 tháng</th>
              <th colSpan="1">GIÁ KHUYẾN MÃI 12 THÁNG</th>
              <th colSpan="1">GIÁ KHUYẾN MÃI 12 THÁNG</th>
            </tr>
          </thead>
          <tbody>
            {tableDataS3.map((row, index) => (
              <tr key={index}>
                <td>{row.from}</td>
                <td>{row.to}</td>
                <td>{row.straightPurchase}</td>
                <td>{row.discountWithPhone12Months}</td>
                <td>{row.discountWithPhone24Months}</td>
                {row.product && row.straightPrice && row.discountPrice ? (
                  <>
                    <td rowSpan={6}>{row.product}</td>
                    <td rowSpan={6} style={{ textDecoration: "line-through" }}>
                      {row.straightPrice}
                    </td>
                    <td rowSpan={6}>{row.discountPrice}</td>
                  </>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <strong>III. Lưu ý:</strong>
      <ul>
        <li>
          Bảo hành trước mọi điều kiện kể cả rơi vỡ, vào nước,…
          <br />
          (Lưu ý: linh kiện của máy phải còn và không bị tách rời khỏi thân máy,
          Bạch Long Mobile sẽ từ chối bảo hành nếu máy không thỏa điều kiện.)
        </li>
        <li>
          Nếu không có sản phẩm đổi, Bạch Long Mobile sẽ sửa chữa miễn phí hoặc
          sẽ nhập lại sản phẩm bảo hành của khách với mức giá hỗ trợ để khách
          hàng đổi/ bù phí lên đời các sản phẩm khác hoặc hoàn tiền cho khách
          hàng theo công thức:
          <br />
          *Giá trị nhập lại/Mức hoàn tiền = Giá bán sản phẩm máy 99% hiện tại
          (X) * 90%.
          <br />
          (Theo đó: giá bán sản phẩm máy 99% hiện tại (X) nhỏ hơn hoặc bằng giá
          mua sản phẩm ban đầu, trường hợp giá bán sản phẩm máy 99% hiện tại (X)
          lớn hơn giá mua sản phẩm ban đầu thì giá bán hiện tại sản phẩm được
          tính bằng giá mua ban đầu).
        </li>
        <li>
          Hợp đồng chỉ áp dụng cho máy, các phụ kiện kèm theo như: Sạc, cáp, tai
          nghe… sẽ không được hưởng quyền lợi bảo hành.
        </li>
        <li>
          Trợ giá chương trình thu cũ đổi mới cho lần sau khi khách hàng tham
          gia Bảo Hành Toàn Diện lên đến 98% (Phải đủ điều kiện máy loại 1).
        </li>
        <li>
          Trường hợp Quý Khách muốn gia hạn gói bảo hành toàn diện, phải mang
          sản phẩm đến các TTBH của Bạch Long Mobile để được thẩm định lại.
        </li>
        <li>
          Bạch Long Mobile tiếp nhận sản phẩm BẢO HÀNH TOÀN DIỆN trong khung giờ
          từ 09h00 đến 18h00 (trừ Chủ Nhật và ngày lễ, Tết).
        </li>
        <li>
          Thời gian xử lý tối đa 7-15 ngày làm việc (trừ ngày lễ và chủ nhật) kể
          từ khi TTBH tiếp nhận máy.
        </li>
        <li>
          Gói bảo hành toàn diện sẽ mất hiệu lực nếu sản phẩm bị thay thế linh
          kiện bởi bên thứ 3.
        </li>
        <li>
          Các vấn đề về thẩm mỹ bên ngoài như cấn móp, tróc sơn , điểm sáng, bụi
          màn hình, màn hình ám hồng…nhưng không ảnh hưởng tới trải nghiệm trên
          máy, sẽ không thuộc phạm vi bảo hành.
        </li>{" "}
        <li>
          Quý khách phải sao lưu các tài khoản cá nhân trước khi đem máy đến
          TTBH, Bạch Long Mobile không chịu trách nhiệm về các tài khoản cá nhân
          như (iCloud, MiCloud, Samsung Account, Google, Facebook, Zalo, tài
          khoản ngân hàng …) khi có vấn đề tranh chấp về sau.
        </li>
      </ul>
      <strong>
        ***Mọi chi tiết thắc mắc xin quý khách liên hệ: 1900.63.64.69 -
        1900.63.69.81.
      </strong>
    </div>
  );
}

export default Section3;
