import React from "react";
import "./Section3.css";
import GuideStep from "./Component/ItemSection3"; // Import the new component

function Section3() {
  const guideSteps = [
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-126.png",
      description: "Bước 1: Mở Kredivo",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-127.png",
      description: "Bước 2: Điền thông tin",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-128.png",
      description: "Bước 3: Chụp CMND/CCCH",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-129.png",
      description: "Bước 4: Selfie",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-130.png",
      description: "Bước 5: Gửi hồ sơ",
    },
    {
      src: "https://bachlongmobile.com/bnews/wp-content/uploads/2022/09/Intro-Deck-KREDIVO-VIETNAM-Training-for-Ba%CC%A3ch-Long-Mobile-131.png",
      description: "Bước 6: Hoàn tất",
    },
  ];

  return (
    <div className="Section3-container" id="hd">
      <div className="guide-titles3">
        <p className="Section3-title1" style={{ padding: "0", margin: "0" }}>
          Hướng dẫn sử dụng Kredivo
        </p>
        <p
          className="Section3-title2"
          style={{ padding: "0", margin: "0", fontSize: "24px" }}
        >
          (dành cho khách hàng mới hoặc khách hàng chưa có tài khoản)
        </p>
      </div>
      <div className="Section3-steps">
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

export default Section3;
