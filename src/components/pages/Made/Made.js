import React from "react";
import img1 from "../../assates/images/cup5.png";
import img2 from "../../assates/images/container1-removebg-preview.png";
import img3 from "../../assates/images/cup4.png";

const Made = () => {
	return (
		<div className="p-5 bg-gradient-to-tr from-red-300">
			<div className="flex justify-center items-center">
				<div
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					className="w-1/3 ml-24 mx-auto"
				>
					<h2 className="text-4xl font-bold">BAMBOO AND WHEAT FIBRE</h2>
					<p className="text-lg mt-5 font-semibold">
						Sourced from local farmers, plant residue from Wheat, Barley, and
						Bamboo is molded into durable cups using our proprietary technology.
					</p>
				</div>
				<div data-aos="zoom-in-left" className="w-2/3 justify-end">
					<img className="w-2/3 h-1/2 mx-auto" src={img3} alt="" />
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div
					className="w-1/2 ml-10"
					data-aos="flip-left"
					data-aos-offset="100"
					data-aos-easing="ease-in-sine"
				>
					<img className="w-3/4 h-1/2 mx-auto p-0" src={img1} alt="" />
				</div>
				<div className="w-1/3 mr-20 " data-aos="zoom-in-left">
					<h2 className="text-4xl font-bold">ORANGE FIBRE</h2>
					<p className="mt-5 text-lg font-semibold">
						Made from Orange peels and other organic matter left behind after
						Orange is harvested.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Made;
