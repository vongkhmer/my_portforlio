import React from 'react'
import Info_box from './Info_box'

const makeAchievement = s =>{
	return (
			<li>{s}</li>
	)
}

function Achievements(props) {
	return (
		<Info_box id ={props.id}>
			<div className="row section-title">
					<h2>Reward and achievements</h2>
			</div>
			
			<div className="row">

				<div className="col achievement_description">
					<ul>
						{makeAchievement("Winning an AI Hackathon (2nd place) (HITACHIxINTEL AI Hackathon 2021/6/12-2021/6/26)")}	
						{makeAchievement("Outstanding award for the contribution to new product development (2019 FY)")}
						{makeAchievement("Patent on a distributed system  for fast  processing LiDAR’s data for object detection (submitted  2020/3)")}
						{makeAchievement("Patent on KPI based OTA system for construction machines (submitted 2021/3)")}
					</ul>

				</div>
			</div>
			
		</Info_box>
	)
}

export default Achievements
