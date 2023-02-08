import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import kit from "../../assates/images/kit.jpg";
import cup1 from "../../assates/images/cup1.jpg";
import cup2 from "../../assates/images/cup3.jfif";

import brush1 from "../../assates/images/toothbrush1.jpg";
import brush2 from "../../assates/images/toothbrush2.jpg";

import loofah1 from "../../assates/images/looafh.jfif";
import loofah2 from "../../assates/images/looafh1.jfif";

import straw1 from "../../assates/images/straw1.jpg";
import straw2 from "../../assates/images/straw2.jpg";

import container1 from "../../assates/images/container1.jpg";
import container2 from "../../assates/images/container2.jfif";

// import "./styles.css";
import { Pagination, Navigation } from "swiper";

const ProductSlide = () => {
	const [swiperRef, setSwiperRef] = useState(null);

	return (
		<>
			<Swiper
				slidesPerView={3}
				loop={true}
				// centeredSlides={true}
				spaceBetween={30}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper bg-gradient-to-l from-red-400"
			>
				<SwiperSlide>
					<div>
						<img className="h-80 w-full py-2 rounded-3xl" src={cup1} alt="" />

						<div className="p-4">
							<h2 className="text-center">Plant Based Reusable Cups</h2>
							<p className="text-center">$ 2.39</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img className="w-full py-2 h-80 rounded-3xl" src={brush1} alt="" />
						<div className="p-4">
							<h2 className="text-center">Plant Based Reusable Cups</h2>
							<p className="text-center">$ 2.39</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							className="w-full py-2 h-80 rounded-3xl"
							src={loofah1}
							alt=""
						/>
						<div className="p-4">
							<h2 className="text-center">Plant Based Reusable Cups</h2>
							<p className="text-center">$ 2.39</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							className="w-full py-2 h-80 rounded-3xl"
							src={container2}
							alt=""
						/>
						<div className="p-4">
							<h2 className="text-center">Plant Based Reusable Cups</h2>
							<p className="text-center">$ 2.39</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img className="w-full py-2 h-80 rounded-3xl" src={kit} alt="" />
						<div className="p-4">
							<h2 className="text-center">Plant Based Reusable Cups</h2>
							<p className="text-center">$ 2.39</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img className="w-full py-2 h-80 rounded-3xl" src={straw1} alt="" />
						<div className="p-4">
							<h2 className="text-center">Plant Based Reusable Cups</h2>
							<p className="text-center">$ 2.39</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default ProductSlide;
