import React from "react";
import { Parallax, Background } from "react-parallax";
import img from '../../assates/images/botol3.jpg'
import img1 from '../../assates/images/botol2.jpg'
const Aware = () => {
	return (
		<Parallax
			// blur={{ min: -55, max: 15 }}
			bgImage={img1}
			// bgImageAlt="the dog"
			strength={-300}
		>
			
			<div style={{ height: "400px" }} >
                <h2 className="text-center mt-10 text-5xl font-bold">Ireland Discards more than 200 Million <br /> coffee cups a year</h2>
                <p className="text-center mt-4 text-2xl font-bold">Join us in our mission towards reducing our Carbon Footprint and making <br /> Ireland a Zero-waste Circular Economy</p>
            </div>
		</Parallax>
	);
};

export default Aware;
