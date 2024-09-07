import React from "react";
import CardComponent from "./CardComponent";
import macbookImage from "./assets/macbook-air.png"; // Adjust the path according to your folder structure

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
