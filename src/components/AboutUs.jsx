import React from "react";
import img from "../img/about-btn-bg.8a678a80.svg";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="container">
        <div>
          <div>
            <h1 className="ttitle">О нас</h1>
            <p>
              Auto KG специализируется на предоставлении услуг по поиску,
              подбору и покупке подержанных автомобилей из Канады и США с
              последующей доставкой в Кыргызстан.
            </p>
            <p>
              На нашем сайте вы можете найти весь автопарк автомобилей,
              выставленных на аукционы Copart.com, Iaai.com, Copart.ca,
              Impactauto.ca. Также у нас имеется прямой доступ к аукционам Adesa
              и Manheim. Кроме этого, мы закупаем автомобили у официальных
              дилеров и частных лиц по всей Канаде, чтобы предоставить вам еще
              больше вариантов выбора.
            </p>
            <button
              className="custom-button blink-animate block"
              style={{ marginTop: "20px", cursor: "pointer", width: "250px" }}
            >
              <p className="search-brand-text">Узнать подробнее</p>
            </button>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
