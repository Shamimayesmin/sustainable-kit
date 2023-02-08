// import React from 'react';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// https://i.ibb.co/Ybv8VxJ/bmwx1.jpg
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import "./banner.css"

import img1 from "../../assates/images/straw1.jpg";
// import img2 from "../../assates/images/cup.jpg";
import img3 from "../../assates/images/cup2.jpg";
import img4 from "../../assates/images/toothbrush1.jpg";
import img5 from "../../assates/images/1913623-990x494.jpg";

import { Pagination, Navigation } from "swiper";

const Banner = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper w-full"
			>
				<SwiperSlide>
					<div className="relative">
						<img className="h-[600px] w-full" src={img3} alt="/" />
						<div className="absolute text-rose-500 top-[25%] left-[17rem]">
							<h3 data-aos="fade-right" className="text-8xl font-extrabold">
								Living <br />
								Sustainably
							</h3>
							<p data-aos="fade-left" className="text-7xl font-serif p-4">
								Shouldn't be Expensive
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img className="h-[600px] w-full" src={img4} alt="/" />
						<div className="absolute top-[25%] left-[17rem]">
							<h3
								data-aos="fade-right"
								className="text-8xl font-bold text-primary p-4"
							>
								Become
							</h3>
							<p
								data-aos="fade-left"
								className="text-7xl font-serif text-fuchsia-600 p-3"
							>
								Sustainable
							</p>
							<button className="btn btn-primary outline px-14 rounded-2xl">
								Start Today
							</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img className="h-[600px] w-full" src={img5} alt="/" />
						<div className="absolute text-white top-[35%] left-[30rem]">
							<h3 data-aos="fade-right" className="text-6xl font-bold text-center">
								Join the Revulation
							</h3>
							<p data-aos="fade-left" className="text-4xl font-serif p-3 mt-3">
								Make it Possible
							</p>
							
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Banner;
