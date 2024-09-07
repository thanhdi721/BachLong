import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ''
interface Product {
    id: number;
    name: string;
    image: string;
}

const products = {
    "machines": [
        { id: 1, name: "Samsung Galaxy Watch7 (Bluetooth)", image: "link1.jpg" },
        { id: 2, name: "Samsung Galaxy Watch6 Classic", image: "link2.jpg" },
        { id: 3, name: "Samsung Galaxy Watch Ultra", image: "link3.jpg" },
        { id: 4, name: "Samsung Galaxy A25 5G", image: "link4.jpg" }
    ],
    "accessories": [
        { id: 5, name: "Phụ kiện 1", image: "link5.jpg" },
        { id: 6, name: "Phụ kiện 2", image: "link6.jpg" },
        { id: 7, name: "Phụ kiện 3", image: "link7.jpg" },
        { id: 8, name: "Phụ kiện 4", image: "link8.jpg" }
    ]
};

const ProductSlider: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'machines' | 'accessories'>('machines');

    const handleCategoryChange = (category: 'machines' | 'accessories') => {
        setActiveCategory(category);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className="OpenStore-Section2 product-slider">
            <div className="OpenStore-Section2 category-buttons">
                <button
                    onClick={() => handleCategoryChange('machines')}
                    className={`OpenStore-Section2 button ${activeCategory === 'machines' ? 'active' : ''}`}
                >
                    Máy
                </button>
                <button
                    onClick={() => handleCategoryChange('accessories')}
                    className={`OpenStore-Section2 button ${activeCategory === 'accessories' ? 'active' : ''}`}
                >
                    Phụ kiện
                </button>
            </div>

            <Slider {...settings}>
                {products[activeCategory].map((product: Product) => (
                    <div key={product.id}>
                        <div className="OpenStore-Section2 product-card">
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;
