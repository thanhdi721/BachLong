import React from "react";
import "./Header.css";
import images from "../../../images/banner-top-header-aar-new-251023.png";
import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
function Header() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),

      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <div className="HeaderContainer">
      <div className="HeaderTitleImage">
        <img
          src={images}
          alt=""
          style={{ margin: "auto", display: "block", width: "100%" }}
        />
      </div>
      <p className="HeaderTitle">
        TRẢI NGHIỆM WEBSITE THƯƠNG MẠI ĐIỆN TỬ HOÀN TOÀN MỚI
      </p>
      <div className="line-logo">
        <div className="head-flex">
          <div className="logo-new">
            <a className="logo" href="https://old.bachlongmobile.com/">
              <i className="iconblm-logo"></i>
            </a>
          </div>
          <div className="top-search-MB">
            <p>Mua hàng: </p>
            <p style={{ color: "red", fontWeight: "500" }}>1900.63.64.69</p>
            <p>Bảo Hành: </p>
            <p style={{ color: "red", fontWeight: "500" }}>1900.63.69.81</p>
          </div>
          <div id="header-search">
            <div>
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Tên sản phẩm cần tìm?"
                />
                <button className="search-button">
                  <SearchOutlined />
                </button>
              </div>
            </div>
            <div className="top-search">
              <a>15 pro max</a>,<a>s24 ultra</a>,<a>z fold6</a>,<a>z flip6</a>,
              <a>macbook pro</a>, <a>ipad</a>,<a>macbook air m2</a>
            </div>
          </div>
          <div className="skip-account">
            <div>
              <div style={{ display: "flex" }}>
                <i className="iconlogo-blc-new"></i>
                <p style={{ marginLeft: "6px" }}>
                  Sửa chữa
                  <br />
                  lấy liền
                </p>
              </div>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <i className="iconlogo-htch-new"></i>
                <p style={{ marginLeft: "6px" }}>
                  Hệ thống
                  <br />
                  cửa hàng
                </p>
              </div>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <i className="iconlogo-call-new"></i>
                <p style={{ marginLeft: "6px" }}>
                  Mua hàng giao nhanh
                  <p className="sdt-bl">1900.63.64.69</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HeaderItem3">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-dthoai-topmenu-240823.png"
                alt=""
                width={30}
                height={30}
              />
              <p>Điện thoại </p>
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-ipad-topmenu-240823.png"
                alt=""
                width={30}
                height={30}
              />
              <p>Máy tính bảng </p>
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <img
                src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-macbook-topmenu-240823.png"
                alt=""
                width={30}
                height={30}
              />
              <p>Laptop&Mac </p>
            </Space>
          </a>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Link
              to="/three-zero-installment"
              style={{ color: "#333", display: "flex", textDecoration: "none" }}
            >
              <Space>
                <img
                  src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-watch-topmenu-240823.png"
                  alt=""
                  width={20}
                  height={30}
                />
                <p>Đồng hồ</p>
              </Space>
            </Link>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Link
              to="/warranty"
              style={{ color: "#333", display: "flex", textDecoration: "none" }}
            >
              <Space>
                <img
                  src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-maycu-topmenu-240823.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <p>Máy cũ giá rẻ </p>
              </Space>
            </Link>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Link
              to="/buy-in-installments"
              style={{ color: "#333", display: "flex", textDecoration: "none" }}
            >
              <Space>
                <img
                  src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-phukien-topmenu-240823.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <p>Phụ kiện </p>
              </Space>
            </Link>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Link
              to="/hd-saison"
              style={{ color: "#333", display: "flex", textDecoration: "none" }}
            >
              <Space>
                <img
                  src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-gift-home-250823.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <p>Thu cũ đổi mới </p>
              </Space>
            </Link>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Link
              to="/home-pay-later"
              style={{ color: "#333", display: "flex", textDecoration: "none" }}
            >
              <Space>
                <img
                  src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/08/icon-gift-home-250823.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <p>KM thanh toán</p>
              </Space>
            </Link>
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
