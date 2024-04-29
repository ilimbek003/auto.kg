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
          <div className="footer-all">
            <div className="ttitle"></div>
            <h1>Оставайтесь на связи</h1>
          </div>
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
            <div className="dann">
              <div className="hpone">
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "-30px" }}
                >
                  {" "}
                  <MdOutlinePhoneInTalk color="red" size={"25px"} />
                  <a href="">+996 (554) 888 484</a>
                </div>
                <a href="">+996 (554) 888 484</a>
                <a href="">+996 (554) 888 484</a>
                <a href="">+996 (554) 888 484</a>
              </div>
              <div className="hpone">
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "-30px" }}
                >
                  <RiTimerLine color="red" size={"25px"} />
                  <a href="">Пн-Пт 08:00-19:00</a>
                </div>
                <a href="">Сб 08:00-16:00</a>
                <a href="">Вс Выходной</a>
              </div>
              <div
                className=""
                style={{ display: "flex",gap:"80px"}}
              >
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "-30px",marginTop:"20px" }}
                >
                  <MdOutlineMarkEmailRead color="red" size={"25px"} />
                  <a href="">kutso11alty@gmail.com</a>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
