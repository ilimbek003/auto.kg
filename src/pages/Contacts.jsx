import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead, MdOutlinePhoneInTalk } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";

export default function Contacts() {
  return (
    <>
      <div className="page-header contact-bg">
        <h1 className="title_about" style={{ marginLeft: "9%" }}>
          Наши контакты
        </h1>
      </div>
      <div className="contacts-wrap">
        <div className="container">
          <div className="ttitle">Контактная информация</div>
          <p className="contacts-text">
            Если вы заинтересованы в сотрудничестве с нами, напишите нам.
          </p>
          <div className="contacts">
            <div className="contas">
              <div>
                <div className="hponex">
                  <div style={{ display: "flex" }}>
                    <MdOutlinePhoneInTalk
                      color="red"
                      size={"25px"}
                      className="icon"
                    />
                    <p>Телефон</p>
                  </div>
                  <div>
                    <a style={{ marginLeft: "32px" }} className="hone" href="">
                      +996 (554) 888 484
                    </a>
                    <a style={{ marginLeft: "32px" }} className="hone" href="">
                      +996 (554) 888 484
                    </a>
                    <a style={{ marginLeft: "32px" }} className="hone" href="">
                      +996 (554) 888 484
                    </a>
                    <a style={{ marginLeft: "32px" }} className="hone" href="">
                      +996 (554) 888 484
                    </a>
                  </div>
                </div>
                <div className="hponex">
                  <div style={{ display: "flex" }}>
                    <RiTimerLine color="red" size={"25px"} className="icon" />
                    <p>График работы</p>
                  </div>
                  <div>
                    <p style={{ marginLeft: "32px" }}>
                      Пн-Пт <span>08:00-19:00</span>
                    </p>
                    <p style={{ marginLeft: "32px" }}>
                      Сб <span>08:00-16:00</span>
                    </p>
                    <p style={{ marginLeft: "32px" }}>
                      Вс <span>Выходной</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="hponex">
                  <div style={{ display: "flex"}}>
                    <MdOutlineMarkEmailRead
                      color="red"
                      size={"25px"}
                      className="icon"
                    />
                    <p>Электронная почта</p>
                  </div>
                  <p style={{ marginLeft: "32px" }} className="hone">
                    kutso11alty@gmail.com
                  </p>
                </div>
                <div className="hponex">
                  <div style={{display:"flex"}}>
                    <IoLocationSharp
                      color="red"
                      size={"25px"}
                      className="icon"
                    />
                    <p>Наш адрес</p>
                  </div>
                  <p style={{ marginLeft: "32px" }} className="hone">Бишкек, ул. Суюмбаева 43 офис 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
