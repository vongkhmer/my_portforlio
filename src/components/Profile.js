import React from 'react'
import my_photo from '../me.jpeg'
import Typed from "react-typed"
import Info_box from './Info_box'

const Profile =  props => {
	var profile = `
	Hello everyone! My name is VUTHEA VONG. I am from Cambodia.
	I am currently working as a research engineer in Japan for Hitachi R&D, 
	focusing on building robots and smart industrial systems. 
	I love programming, AI technology, and software engineering. 
	I want to work on a job that helps improve people's quality of life while doing what I am passionate about.
	`
	return (	
		<Info_box id ={props.id}>
			<div className="row section-title">
					<h2>About me</h2>
			</div>
			
			<div className="row">
				<div className="col-md-12 col-lg-2">
					<img className="profile-photo" src={my_photo}/>
					<div className="photo_description">
						<p>
						<Typed
							className="typed-text"
							strings={["Thanks for visiting my page", "Have a nice day !!!"]}
							typeSpeed={40}
							backSpeed={60}
							loop
							/>
						</p>
					</div>
				</div>

				<div className="col-md-12 col-lg-10 profile_description">
			
					<p>{profile}</p>
					<p>If you want to know more about me, drop me a message in linkedin <space></space> 
						<a href="https://www.linkedin.com/in/vong-vuthea-232a00120/">here</a>.

					</p>

				</div>
			</div>
			
		</Info_box>
	)
}

export default Profile
