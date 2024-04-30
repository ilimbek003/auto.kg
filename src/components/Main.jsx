import React from "react";
import img from "../img/e376c161733649afb76f91f891ad8866.webp";
import images from "../img/e58be97d4a6a45fdbaaeeca4f26ac313.webp";
import images2 from "../img/c650f387d94b40f78ee289037a0ada26.webp";
import Slider from "react-slick";
const data = [
  {
    id: 1,
    img: img,
    title: "AutoCanada",
    text: "AutoCanada Возьми руль в свои руки, без промедления!",
  },
  {
    id: 1,
    img: images,
    title: "Авто под ключ!",
    text: "Покупка - Доставки - Растаможка - Поиск запчастей - Ремонт - Детейлинг - Оформление",
  },
  {
    id: 1,
    img: images2,
    title: "Без посредников!",
    text: "Зарегистрируйся и покупай автомобили самостоятельно.",
  },
];
const Main = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
  };
  return (
    <div className="main">
      <Slider {...settings}>
        {data.map((el, indx) => (
          <div className="slider_img" key={indx}>
            <div className="flag-canada"></div>
            <img className="img" src={el.img} /> 
            <div class="flag-united-state"></div>
            <div className="container position">
              <h6 className="create" style={{ width: "60%" }}>
                {el.title}
              </h6>
              <p className="project ">{el.text}</p>
              <button className="main-btn blink-animate">РЕГИСТРАЦИЯ</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Main;
