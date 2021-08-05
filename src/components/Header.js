import React from 'react'
import Typed from "react-typed"

const Header = props => {
	return (
		<div className="header-wrapper" id={props.id}>
			<div className="main-info">
				<h1>Machine Learning Engineer and Software engineer</h1>
				<Typed
				className="typed-text"
				strings={["Machine Learning", "Deep Learning", "Computer vision", "Software design"]}
				typeSpeed={40}
				backSpeed={60}
				loop
				/>
			</div>

		</div>
	)
}

export default Header
