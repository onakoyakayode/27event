import React from 'react'
import './Blogs.css'
// import { Swiper, SwiperSlide } from 'swiper/react'

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules
// import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const Blogs = () => {

  return (
    <div className='blog'>
        <h1 className='blog-title'>Blogs</h1>
      <div className='swipe-blog'>
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            // clickable: true,
            // }}
            navigation={true}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            }}
            modules={[Navigation]}
            className="mySwiper"
        >
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-09-1024x640.jpg.webp' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>21 June, 2022</h6>
                    <h2>Our 10 Most-Popular Healthy Recipes</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://burst.shopifycdn.com/photos/fruit-topped-pancakes-to-start-the-day.jpg?width=373&format=pjpg&exif=1&iptc=1' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>04 November, 2021</h6>
                    <h2>5 reasons why you failed to lose fat</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://burst.shopifycdn.com/photos/hotel-room-service-classic-breakfast.jpg?width=373&format=pjpg&exif=1&iptc=1' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>01 January, 2022</h6>
                    <h2>Get more muscle mass with food</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>05 May, 2022</h6>
                    <h2>Our 10 Most-Popular Healthy Recipes</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-16-1024x640.jpg.webp' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>09 July, 2022</h6>
                    <h2>5 reasons why you failed to lose fat</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74636.jpg?size=626&ext=jpg&uid=R21425444&ga=GA1.2.1483839923.1664359848' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>04 October, 2022</h6>
                    <h2>Get more muscle mass with food</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Nigerian-Food-Egusi-Soup-1536x1024.jpg' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>26 April, 2022</h6>
                    <h2>Our 10 Most-Popular Healthy Recipes</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://images.unsplash.com/photo-1592222720114-38bcd5fc2c14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJlYWtmYXN0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>18 August, 2021</h6>
                    <h2>Get more muscle mass with food</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-details'>
                <div className='slide-image'>
                    <img src='https://img.freepik.com/free-photo/fried-rice-with-minced-pork-tomato-carrot-cucumber-plate_1150-27179.jpg?size=626&ext=jpg&uid=R21425444&ga=GA1.2.1483839923.1664359848' alt='blog' />
                </div>
                <div className='slide-items'>
                    <h6>21 June, 2022</h6>
                    <h2>5 reasons why you failed to lose fat</h2>
                    <h5>Read more</h5>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Blogs