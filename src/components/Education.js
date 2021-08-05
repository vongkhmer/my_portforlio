import React from 'react'
import Info_box from './Info_box'
import my_photo from '../me.jpeg'

const Education = props => {
	return (	
		<Info_box id ={props.id}>
			<div className="row section-title">
					<h2>Education</h2>
			</div>
			
			<div className="row">

				<div className="col education_description">
			
					<p>
						<b>The University of Tokyo</b> | Tokyo, Japan
						<br></br>	
 						Master Degree in Micro Electronic Devices
						<br></br>	
 						Graduation Year: 2019
					</p>

					 <br></br>

 					<p>
						 <b>Tokyo Institute of Technology</b> | Tokyo, Japan 
						 <br></br>
 							Bachelor degree in Electrical and Electronic Engineering
						 <br></br>
							Graduation Year: 2017
					</p>
					<br></br>

						<p>
 							<b>Institute of Technology of Cambodia</b> | Tokyo, Japan
							<br></br>
							--
								<br></br>
								Drop out: 2012 (going to study in Japan)	
						</p>
						<br></br>
						<p>
								<b>Preah Sihanouk Highschool</b> | Kampong Cham, Cambodia
								<br></br>
								High school degree
								<br></br>
								Graduation Year: 2010
 						</p>


				</div>
			</div>
			
		</Info_box>
	)
}

export default Education
