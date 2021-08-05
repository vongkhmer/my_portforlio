import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import robot from '../robot.jpg'
import constructionmachine from '../constructionmachine.jpg'
import iot_icon from '../iot.jpg'
import Info_box from './Info_box';

const ROBOT = () => {
	return (
		<div>
			<img
				className="img_logo"
				src={robot}
				style={{
					border: "1px solid #d1c8c8"
				}}
			/>
		</div>
	)
}

const CONSTRUCTIONMACHINE = () =>{
	return (
		<div>
			<img
				className="img_logo"
				src={constructionmachine}
				style={{
					border: "1px solid #d1c8c8"
				}}
			/>
		</div>
	)
}

const IOT = () => {
	return (
		<div>
			<img
				className="img_logo"
				src={iot_icon}
				style={{
					border: "10px solid black"
				}}
			/>
		</div>
	)
}

const Experience = props => {
	return (
		<Info_box id={props.id}>
			<div className="row section-title">
					<h2>Experience</h2>
			</div>

			<div className="row experience_descrtiption">
				<p>
					<b>Hitachi, Ltd</b> | Tokyo, Japan
					<br></br>
					Research engineer (Machine Learning Engineer)
					<br></br>
					2019-present
				</p>
				<p>
					<b>Projects that I have been working on:</b> 
				</p>
			</div>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'white', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
					date="2021 - present"
					iconStyle={{ background: '#fff', color: '#fff' }}
					icon={<ROBOT />}
				>
					<h3 className="vertical-timeline-element-title">Scene undertanding for robots</h3>
					<p className="experience_detail">
						Extracting environment context from camera's video using various deep learning models. 
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'white', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
					date="2020 - 2021"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<CONSTRUCTIONMACHINE />}
				>
					<h3 className="vertical-timeline-element-title">OTA for construction machine</h3>
					<p>
						Designing a highly reliable remote software update system for mission-ciritical contorl based on DPKG and journal filesystem.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'white', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
					date="2019 - 2020"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<CONSTRUCTIONMACHINE />}
				>
					<h3 className="vertical-timeline-element-title">Information control platform</h3>
					<p>
						Designing a  scalable unified sensor-information-platform for next generation construction machines.
					</p>
				</VerticalTimelineElement>
				</VerticalTimeline>
		</Info_box>
	)
}

export default Experience
