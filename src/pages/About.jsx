import React from 'react'
import image from '../img/about-v2-image.png'
import { FaUserShield } from "react-icons/fa";

const fetchData = [
    {
        id: 1,
        icons: '<i class="about-feature-icon-v2 shield"></i>',
        title: 'ГАРАНТИЯ',
        description: 'Желаете ли вы массажа в области конваллиса и волютпата у портитора. Это масса тинцидунта, обладающая ронкусной силой.'
    },
    {
        id: 2,
        icons: '<i class="about-feature-icon-v2 quality"></i>',
        title: 'КАЧЕСТВО',
        description: 'Желаете ли вы массажа в области конваллиса и волютпата у портитора. Это масса тинцидунта, обладающая ронкусной силой.'
    },
    {
        id: 3,
        icons: '<i class="about-feature-icon-v2 clock2"></i>',
        title: 'CКОРОСТЬ',
        description: 'Желаете ли вы массажа в области конваллиса и волютпата у портитора. Это масса тинцидунта, обладающая ронкусной силой.'
    },
    {
        id: 4,
        icons: '<i class="about-feature-icon-v2 experience"></i>',
        title: 'ОПЫТ',
        description: 'Желаете ли вы массажа в области конваллиса и волютпата у портитора. Это масса тинцидунта, обладающая ронкусной силой.'
    },
    {
        id: 5,
        icons: '<i class="about-feature-icon-v2 service"></i>',
        title: 'СЕРВИС',
        description: 'Желаете ли вы массажа в области конваллиса и волютпата у портитора. Это масса тинцидунта, обладающая ронкусной силой.'
    },
    {
        id: 6,
        icons: '<i class="about-feature-icon-v2 economy"></i>',
        title: 'ЭКОНОМИЯ',
        description: 'Желаете ли вы массажа в области конваллиса и волютпата у портитора. Это масса тинцидунта, обладающая ронкусной силой.'
    }
]

export default function About() {
    return (
        <>
            <div className='container'>
                <div className='about-company'>
                    <div className="about-company_Image">
                        <img src={image} alt="" />
                    </div>
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
                        <p>
                            Наша компания предлагает два варианта сотрудничества. Первый вариант включает
                            полное сопровождение клиента нашим опытным менеджером по продажам, который
                            поможет вам выбрать автомобиль, проведет осмотр, организует покупку и
                            обеспечит надежную доставку в Кыргызстан.
                        </p>
                        <br />
                        <p>
                            Второй вариант - самостоятельная покупка через наш сайт с использованием
                            интерактивного портала доступа к онлайн-аукционам Канады и США. Для этого
                            необходимо зарегистрироваться и получить уникальный логин и пароль,
                            внести требуемый депозит, который дает право делать ставку до определенной
                            суммы.
                        </p>
                        <br />
                        <p>
                            Мы работаем с проверенными и надежными партнерами, чтобы обеспечить
                            высокое качество наших услуг и своевременную доставку автомобилей в
                            Кыргызстан. Свяжитесь с нами сегодня, чтобы получить дополнительную
                            информацию и помощь в выборе автомобиля, соответствующего вашим
                            потребностям и бюджету.
                        </p>
                    </div>
                </div>
            </div>
            <div className="whyTurest">
                <div className="container">
                    <h1 className="ttitle" style={{ color: '#fff', padding: '60px 0' }}>
                        Почему нам доверяют?
                    </h1>
                    <div className="turestGrid">
                        {
                            fetchData?.map((item) => (
                                <div className="turest">
                                    <div>
                                        <FaUserShield color='#fff' size={50} />
                                    </div>
                                    <div style={{ display: 'grid' }}>
                                        <span>{item.title}</span>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
