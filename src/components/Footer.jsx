import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <h1 className="ttitle one">
            Оставайтесь на связи
          </h1>
          <div className="row">
            <div className="contacts-form-wrap">
              <label>Номер телефона</label>
              <input
                type="text"
                className="form-control"
                placeholder="Введите ваш номер телефона"
              />
              <label>Электронная почта</label>
              <input
                type="text"
                className="form-control"
                placeholder="Электронная почта"
              />
              <button className="custom-button blink-animate block">
                Отправить
              </button>
            </div>
            <div className="dann_with">
              <div className="dann">
                <div className="hpone">
                  <MdOutlinePhoneInTalk
                    color="red"
                    size={"25px"}
                    className="icon"
                  />
                  <div>
                    <a href="">+996 (554) 888 484</a>
                    <a href="">+996 (554) 888 484</a>
                    <a href="">+996 (554) 888 484</a>
                    <a href="">+996 (554) 888 484</a>
                  </div>
                </div>
                <div className="hpone">
                  <RiTimerLine color="red" size={"25px"} className="icon" />
                  <div>
                    <a href="">Пн-Пт 08:00-19:00</a>
                    <a href="">Сб 08:00-16:00</a>
                    <a href="">Вс Выходной</a>
                  </div>
                </div>
              </div>
              <div className="dann">
                <div className="hpone">
                  <MdOutlineMarkEmailRead
                    color="red"
                    size={"25px"}
                    className="icon"
                  />
                  <a href="">kutso11alty@gmail.com</a>
                </div>
                <div className="hpone">
                  <IoLocationSharp color="red" size={"25px"} className="icon" />
                  <a href="">Бишкек, ул. Суюмбаева 43 офис 4</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
