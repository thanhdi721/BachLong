import React from "react";
import CardComponent from "./CardComponent";
import macbookImage from "https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbfb35fd1430014b0a164bf3a48626862%2Fs%2Ft%2Fstar_4_1_5.jpg&w=1080&q=75"; // Adjust the path according to your folder structure

const App: React.FC = () => {
    return (
        <div className="App">
            <CardComponent
                imageSrc={macbookImage}  // Use the imported image
                title="Macbook Air 2024 M3 13.6inch 8GB/512GB Chính Hãng Apple VN"
                price="31,190,000"
                oldPrice="34,990,000"
                discount="-11%"
            />
        </div>
    );
};

export default App;
