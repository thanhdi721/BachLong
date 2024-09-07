import React from "react";
import "./Section4.css";
import GuideStep from "./Component/itemSection4"; // Import the new component

function Section4() {
  const guideSteps = [
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/1-1.png",
      description: "Bước 1: Chọn sản phẩm và chọn Kredivo",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/2.png",
      description: "Bước 2: Nhập số tiền trả trước và Mã giảm giá",
    },

    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/4.png",
      description: "Bước 3: Nhập thông tin",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-149.png",
      description: "Bước 4: Chọn kỳ hạn",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-150.png",
      description: "Bước 5: Đăng nhập",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-151.png",
      description: "Bước 6: Xác nhận & hoàn tất",
    },
  ];

  return (
    <div className="Section4-container" id="tn">
      <div className="guide-titles4">
        <p className="Section4-title1" style={{ padding: "0", margin: "0" }}>
          TRẢI NGHIỆM THANH TOÁN QUA KREDIVO
        </p>
        <p
          className="Section4-title2"
          style={{ padding: "0", margin: "0", fontSize: "24px" }}
        >
          trên website/app đối tác khách hàng
        </p>
      </div>
      <div className="Section4-steps">
        {guideSteps.map((step, index) => (
          <GuideStep
            key={index}
            src={step.src}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Section4;
