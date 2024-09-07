import React, { useState } from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination]);

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

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop={true}
            >
                {products[activeCategory].map((product: Product) => (
                    <SwiperSlide key={product.id}>
                        <div className="OpenStore-Section2 product-card">
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;
