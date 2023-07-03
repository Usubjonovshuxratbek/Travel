import React from 'react'
import './About.scss'
import { Fade } from 'react-reveal';

function About() {
    return (
        <section className='about'>
            <div className="container">
                <Fade top>
                    <h2>Biz Haqimizda</h2>
                </Fade>
                <div className="about__inner">
                    <Fade left>
                        <div className="img">
                            <img src="https://salaam.uz/templates/Default/assets/images/about.png" alt="" />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="info">
                            <p>
                                Salaam travel turizm yo'nalishida 2017-yildan buyon xizmat qilib keladi. Asosiy yo'nalishi Umra va Haj safarlari tashkil etish bo'yicha ishlaydi. Bu boradagi tajribasi asosida shu kungacha 5000 dan ziyod umrachilarning chiroyli holatda Umra safarlariga borib kelishlariga xizmat qildi.
                                <br /><br />
                                Umrachilarni asosiy yo'nalishda to'g'ridan to'g'ri reys bilan, shuningdek tranzit yo'nalishda safarga olib borib keladi. Ayni vaqtda Toshkent, Samarqand, Namangan shaharlaridan uchuvchi ishonchli avia kompaniyalar, Qanotsharq, O'zbekiston Havo yo'llari, Air arabia, Flydubai, Jazira airwayslar bilan ishlaydi.
                                <br /><br />
                                Hozirgi kunda O'zbekistonda 15 dan ortiq filiallari xizmat ko'rsatmoqda, Bulardan Toshkent shahrida, Yangiyo'l tumani, Toshkent viloyati, Andijon shahri, Namangan shahri, Marg'ilon shahri, Qo'qon shahri, Sirdaryo shahri, Jizzax shahri, Samarqand shahri, Urgut tumani, Buxoro shahri, Qarshi shahri, Denov tumanlarida filiallari mavjud.
                                <br /><br />
                                Firma safarlarni chiroyli tashkil etish maqsadida doimiy ravishda Makka va Madinadagi qulay mehmonxonalar bilan hamkorlik qilib keladi. Ulardan Umrachilarga eng qulayini tanlab xizmat ko'rsatadi.
                                <br /><br />
                                Shuningdek, firma nomidan xizmat qiluvchi ellikboshilar, tajribali malakali bo'lib barchasi ahli ilm kishilar. Saudiyada, Azharda, shuningdek O'zbekistodagi madrasalarda ta'lim olgan, masjidlarda imomlik qilgan domlalar, Hofizi qur'on qorilardan iborat.
                                <br /><br />
                                Ushbu ulug‘ sunnati muakkada bo‘lgan Umra amalini bajarishni niyat qilganlarga mehribon va rahmli Allohning o‘zi kuch-quvvat ato qilsin.
                                <br /><br />
                                Ushbu ulug‘ sunnati muakkada bo‘lgan Umra amalini bajarishni niyat qilganlarga mehribon va rahmli Allohning o‘zi kuch-quvvat ato qilsin.
                                <br /><br />
                                Bizlarni sizlarga ko‘makchi qilib qo‘ygan Zotga cheksiz hamd-u sanolar bo‘lsin deya, hurmat bilan Salaam travel jamoasi.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default About
