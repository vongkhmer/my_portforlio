import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info_box = props => {
	return (
		<div data-aos='fade-up' className="container info-box shadow rounded" id ={props.id}>
			{props.children}
		</div>
	)
}

export default Info_box
