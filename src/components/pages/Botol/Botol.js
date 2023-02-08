import React from 'react';
import { Parallax, Background } from "react-parallax";
import botol from '../../assates/images/kit.jpg'

const Botol = () => {
    return (
        <Parallax
			blur={{ min: -30, max: 15 }}
			bgImage={botol}
			bgImageAlt="the dog"
			strength={-300}
            
		>
			
			<div style={{ height: "400px", }} />
		</Parallax>
    );
};

export default Botol;