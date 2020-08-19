import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Layout} from './components/Layout';
import {Jumbotron} from './components/Jumbotron4';

const Styles=styled.div`
.gif{
float:left;
width:70%;
margin-left:-250px;
border: 2px solid black;
margin-bottom:50px
}

.text{
margin-left:660px;
margin-right:-150px;
font-family: 'Open Sans', sans-serif;
font-size: 22px;
}

.text1{
font-family: 'Open Sans', sans-serif;
margin-top:2px;
margin-bottom:100px;
margin-left:-50px;
text-align:left;
font-size:24px;
}

.psd2{
float:right;
width:60%;
margin-top:250px;
margin-right:-50px;
margin-bottom:200px;
margin-left:60px;
border: 2px solid black;

}
.email{
float:left;
width:66%;
margin-top:25px;
margin-right:100px;
margin-left:-150px;
margin-bottom:100px;
border: 2px solid black;
}

.title{
font-family: 'Open Sans', sans-serif;
font-size:69px;
color:#0080b9;
margin-top:150px;
letter-spacing:normal;
margin-bottom:20px;
text-align:left;
margin-left:-50px;



}
.text2{
font-family: 'Open Sans', sans-serif;
margin-top:2px;
margin-right:-225px;
margin-bottom:200px;
text-align:left;
font-size:24px;



}
.title2{

font-family: 'Open Sans', sans-serif;
font-size:69px;
color:#0080b9;
margin-top:-10px;
margin-bottom:20px;
text-align:left;
margin-right:-200px;
color:#0080b9;
}

mark.blue{
	color:#0080b9;
	background: none;
	margin-left:-5px;
	font-weight:bold;
}
.text3{
font-family: 'Open Sans', sans-serif;
margin-top:450px;
margin-bottom:100px;
margin-left:-50px;
text-align:left;
font-size:24px;
}
.design{
float:right;
width:70%;
margin-top:200px;
margin-right:-50px;
margin-bottom:200px;
margin-left:60px;
border: 2px solid black;
}
`;
export const CreativeOperations = () => (
<React.Fragment>
	<Jumbotron />
	<Styles>
			<Layout>

<img src={require('./assets/cops.jpeg')} alt="Creative Operations Stock Image" Class="gif"/> 	
	<div class="text">
	<p>In 2017, I was recruited to join Hilton's award-winning internal digital agency now known as Experience Design (XD for short). XD  created the look and feel of <a href="http://www.hilton.com/"target="_blank">Hilton's flagship website</a>, and industry-leading iOS/Android apps.</p>

	<p>My mission was slightly different; my teams and myself were leading the efforts to replace & revive Hilton's legacy enterprise software.</p>


	<p> My role in XD: I provided digital project management to the ongoing enterprise-facing intiatives (and other ad-hoc requests, like standing up <a href="https://developer.hilton.io/"target="_blank">Hilton's Developer Portal</a>), creating & maintaining agile processes, maintainence of tools for the department (i.e. JIRA, Confluence, etc.) and stakeholder/client relationships.</p>

	
</div>

<img src={require('./assets/pep.png')} alt="PEP" Class="psd2" /> 	
<img src={require('./assets/designsprint1.jpg')} alt="PEP" Class="email" /> 	
<img src={require('./assets/designsprint2.jpg')} alt="PEP" Class="design" /> 
		  


<div className="title">
	<p> PEP </p>
	</div>

		  <div className="text1">
		  	<p> Our very own mobile hotel management system, PEP stands for "Property Engagement Platform".</p>
			
			<p> PEP was built to replace the existing property software. The current system was built in the early 2000s, and was in dire need of a face-lift. With a new, modern app, we created efficiencies and streamlined the hotel's every-day life. This allowed the staff to focus less on fighting technology, and more on creating a unique and outstanding guest experience. </p>
		<p> The teams I on this project include:
			<li>2 UXAs</li>
			<li>2 Designers</li>
			<li>1 Copy/Content Writer</li>
			<li>1 Experience Design Researcher</li></p>
						  </div>

<div className="title2">
		<p>Design Sprint</p>
	</div>
			<div className="text2">
				
			<p>I led & facilitated the very first design sprint for PEP.</p>
			<p><mark class="blue">Methodology:</mark>We had direction from senior leadership to try this without technology - no laptops and no phones. Completely shut off from the outside world, we used Play-Doh, markers, colored pencils, cardboard, glue, and tape.</p>
			
			<p><mark class="blue">Objective:</mark>At the time, housekeeping attendants used paper and pencil to track their assignments. Our objective was to create an MVP mobile app for housekeeping attendants</p>

		</div>
			  
<div className="text3">
			  				<p><mark class="blue">Outcome:</mark> At the end of 3 intense days of workshopping, we had solutioned 3 MVP paper-style apps. This would have normally taken us weeks, if not months had we done this with JIRA tickets.</p>
									<p><mark class="blue">Learnings:</mark> After this first session, design sprints and co-location became a regular exercise built into the project. We were more flexible about using technology, since trying to undo glue and marker proved difficult. </p>
		  
		  
			  </div>
			  
</Layout>

</Styles>
	</React.Fragment>
	)