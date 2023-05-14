import React, { useRef} from 'react'
import './Plan.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper';


 

function Plan() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const progressCircle2 = useRef(null);
  const progressContent2 = useRef(null);
  const onAutoplayTimeLeft2 = (s, time, progress) => {
    progressCircle2.current.style.setProperty('--progress', 1 - progress);
    progressContent2.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  return (
    <div className='plan'>
      <div className="container"><br/>
        <h1>Uylarning tepadan ko`rinishi</h1><br/>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper1"
      >
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/17.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/21.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room1/little/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/26.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/9.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room2/big/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
        <div className="swiper-pagination"></div>
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper><br/><br/>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft2}
        className="mySwiper1"
      >
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/26.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/big/21.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room1/little/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/9.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room2/big/1.png" alt="" /><h2>Жилой комплекс на "Сергели 6А" "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>1 комнатная квартира</h3></SwiperSlide>
        <SwiperSlide><img src="https://china-house.uz/wp-content/themes/china-house/plancarousel/imagesshohsaroy/room3/little/17.png" alt="" />
        <h2>Жилой комплекс на "Сергели 6А "SHOXSAROY RESIDENCE"</h2><br/>
        <h3>3 комнатная квартира</h3></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
        <div className="swiper-pagination"></div>
          <svg viewBox="0 0 48 48" ref={progressCircle2}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent2}></span>
        </div>
      </Swiper><br/>
      </div><br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.4527151585676!2d69.20736951535793!3d41.23369557927865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61c6e80af101%3A0x153984bb4ff2a338!2sChina%20House!5e0!3m2!1sru!2s!4v1681309407133!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='maps'></iframe>
    </div>
  )
}

export default Plan