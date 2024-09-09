import React from 'react'
import './Section4.css'
import CardUtilityServices from '../../../Component/CardUtilityServices/CardUtilityServices.tsx'
const cardData = [
    {
        imageUrl: 'https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2FMageINIC%2Fbannerslider%2Fgiam1.png&w=1200&q=75',
        description: 'Giảm 10% đến 1.250.000 khi trả góp qua Home PayLater'
    },
    {
        imageUrl: 'https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2FMageINIC%2Fbannerslider%2Fgiam1.png&w=1200&q=75',
        description: 'Another promotion description'
    },
    {
        imageUrl: 'https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2FMageINIC%2Fbannerslider%2Fgiam1.png&w=1200&q=75',
        description: 'Yet another promotion description'
    },
    {
        imageUrl: 'https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2FMageINIC%2Fbannerslider%2Fgiam1.png&w=1200&q=75',
        description: 'Another promotion description'
    },
    {
        imageUrl: 'https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2FMageINIC%2Fbannerslider%2Fgiam1.png&w=1200&q=75',
        description: 'Yet another promotion description'
    }
];
function Section4() {
    return (
        <div className='OpenStore-S4-Container'>
            <h2 className='OpenStore-S4-Title'>Dịch vụ tiện ích</h2>
            <img src='https://www.bachlongmobile.com/_next/image?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Flandingpagebanner%2FBANNER-THUCU-NEW-KT-1200-060724.jpg&w=1200&q=75' alt='' className='OpenStore-S4-Banner' />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: "20px auto", justifyContent: "center" }}>
                {cardData.map((card, index) => (
                    <CardUtilityServices
                        key={index}
                        imageUrl={card.imageUrl}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Section4