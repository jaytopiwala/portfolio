import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Layout} from './components/Layout';
import {Jumbotron} from './components/Jumbotron5';

const Styles=styled.div`
.gif{
float:left;
width:65%;
margin-left:-200px;
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
margin-left:50px;
margin-right:100px;
margin-top:2px;
margin-bottom:150px;
text-align:left;
font-size:24px;
}

.psd2{
float:right;
width:30%;
margin-top:175px;
margin-right:-100px;
margin-bottom:200px;
margin-left:50px;
border: 2px solid black;

}
.email{
float:left;
width:65%;
margin-right:100px;
margin-left:-200px;
margin-bottom:500px;
margin-top:300px;
border: 2px solid black;
}

.title{
margin-left:50px;
font-family: 'Open Sans', sans-serif;
font-size:69px;
color:#0080b9;
margin-top:150px;
letter-spacing:normal;
margin-bottom:20px;


}
.text2{
font-family: 'Open Sans', sans-serif;
text-align:left;
font-size:24px;
margin-left:200px;
margin-right:-100px;
margin-bottom:200px;

}
.title2{

font-family: 'Open Sans', sans-serif;
font-size:69px;
color:#0080b9;
margin-top:-0px;
letter-spacing:normal;
margin-bottom:20px;
text-align:left;
margin-right:-200px;
}
}

mark.blue{
	color:#0080b9;
	background: none;
	margin-left:-5px;
	font-weight:bold;
}
.text3{
font-family: 'Open Sans', sans-serif;
margin-right:900px;
margin-left:-200px;
margin-top:400px;
text-align:left;
font-size:24px;
}
.text4{
font-family: 'Open Sans', sans-serif;
margin-right:900px;
margin-left:-200px;
margin-top:-200px;
text-align:left;
font-size:24px;
margin-bottom:100px;
`;
export const Sanmina = () => (
<React.Fragment>
	<Jumbotron />
		<Layout>
	<Styles>
		

<img src={require('./assets/sanmina.png')} alt="Creative Operations Stock Image" Class="gif"/> 	
	<div class="text">
	<p>In 2015, I joined Sanmina as an intern in their Global IT department. Sanmina is a Fortune-500 electronics & medical manufacturing company.</p>
	<p>I dove right in on a few small-scope projects to get my feet wet with the fundamentals of project management, and followed closely on the higher-profile projects led by my supervisor. The type of projects included IT infrastructure updates, SaaS application updates, IT security deployments, and proof-of-concept projects used to vet various IT solutions. I had quickly proven myself to the IT leadership, and at the start of my senior year in 2016, I was converted to a full-time employee.</p>	

	<p> My role as an IT Project Manager: I documented project requirements, presented projects for updates and progression amongst CIO staff, created and maintained portfolio roadmaps, tracked project progress and project schedule, identified roles and responsibilities for each project, coordinated communication between the business and IT, and worked alongside project team members to identify and docuement solutions.</p>
	
</div>
<img src={require('./assets/secureauth.png')} alt="SecureAuth" Class="psd2" /> 	





<div className="title">
	<p> SecureAuth </p>
	</div>

		  <div className="text1">
		  	<p> At the time, Sanmina used a legacy 2FA tool. I led the replacement of it; we partnered with <a href="http://secureauth.com/" target="_blank">SecureAuth</a> for the solution. </p>
			
			<p> The project was broken into phases. The first phase was an initial setup of the tool, and a pilot with the North America IT teams.</p>
		  <p> After all of the kinks were sorted, we proceeded with phase 2 - the global roll-out. This targeted roughly 22,000 employees, and covered our VPN application, Google Apps, and our homegrown IT helpdesk</p>
		<p> The teams I led on this project include:
			<li>3 Enterprise Applications Admins</li>
			<li>2 Windows System Admin</li>
			<li>1 IT Communications Specialist</li></p>
						  </div>
		  		  		  <img src={require('./assets/google.jpeg')} alt="Google Splash" Class="email" /> 	

<div className="title2">

		<p>Growing Google</p>
	</div>
			<div className="text2">
				
			<p>My personal favorite project, Growing Google had 2 purposes: increase the usage of Google Apps within the company, and reduce cost by eliminating Microsoft licenses. I had the opportunity to partner with Google, and work directly under the CIO. You can read more on the overall strategy <a href="https://gsuite.google.com/customers/sanmina.html"target="_blank">here</a>.</p>
			
			<p>Partnering with Google, our initial project strategized the who, what, when, where, and how. The outcome was an internal marketing pitch, a training plan, and agendas for a pilot. Our two pilot sites were chosen in this discovery phase - Huntsville, Alabama, and Guadalajara, Mexico.</p>
			
			<p>We executed the above in the next phase, and successfully introduced Google Apps where we saw fit - not only were we able to remove 1000+ Microsoft Office licenses, but we increased collaboration due to Google's cloud capability. Pushing the envelope even further, we also successfully implemented 500+ ChromeOS devices across both sites.</p>
			<p> The core team consisted of:
			<li>Our VP of Digital Workplace & his whole team</li>
			<li>Our Sr. Director of IT infrastructure and his Sr. Manager</li></p>
			<li>Our Director of Enterprise Applications</li>

		</div>	  


</Styles>
		  </Layout>

	</React.Fragment>
	)