import React from 'react'
import Info_box from './Info_box'

const makeSkill = s =>{
	return (
	<div className="col-md-6 col-lg-4">
		<ul>
			<li>{s}</li>
		</ul>
	</div>
	)
}

const Skill = props => {
	return (
		<Info_box id ={props.id}>
			<div className="row section-title">
					<h2>Technical skill</h2>
			</div>
			<div className="row skills">

				{makeSkill("Machine learning")}	
				{makeSkill("Deep learning")}
				{makeSkill("Computer vision")}
				{makeSkill("Algorithm & Datastructure")}
				{makeSkill("Problem solving")}
				{makeSkill("System design")}
				{makeSkill("Working with OSS")}
				{makeSkill("Operating System")}
				{makeSkill("Embedded system")}
			</div>
		</Info_box>
	)
}

export default Skill
