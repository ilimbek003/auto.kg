import React from 'react'
import image from '../img/about-img.png'
import { useNavigate } from 'react-router-dom'

export default function AboutCompany() {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='about-company'>
                <div className="about-company_text">
                    <h1 className="ttitle">О компании</h1>
                    <p>
                        <span className='span'>Auto Canada KG</span> специализируется на предоставлении услуг по поиску,
                        подбору и покупке подержанных автомобилей из Канады и США с последующей
                        доставкой в Кыргызстан.
                    </p>
                    <br />
                    <p>
                        На нашем сайте вы можете найти весь автопарк автомобилей, выставленных
                        на аукционы <span className='span'>Copart.com, Iaai.com, Copart.ca, Impactauto.ca.</span> Также у нас
                        имеется прямой доступ к аукционам <span className='span'>Adesa</span> и <span className='span'>Manheim</span>. Кроме этого, мы закупаем
                        автомобили у официальных дилеров и частных лиц по всей Канаде, чтобы
                        предоставить вам еще больше вариантов выбора.
                    </p>
                    <button
                        className="custom-button blink-animate block"
                        style={{ marginTop: "20px", cursor: "pointer", width: "250px" }}
                        onClick={() => navigate('/about')}
                    >
                        <p className="search-brand-text">Узнать подробнее</p>
                    </button>
                </div>
                <div className="about-company_Image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
