import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css"
import './Slider.scss'

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <div className="test">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slider-lap">
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 1,
          }}
          spaceBetween={220}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slider-tab">
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slider-phone">
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-card">
              <img src="https://salaam.uz/templates/Default/assets/images/place/place2.jpg" alt="" />
              <h2>Nice building</h2>
              <h3>dhaka,bangladesh</h3>
              <h4>$2344<span>$3200</span></h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
