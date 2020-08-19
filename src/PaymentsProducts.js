import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Layout} from './components/Layout';
import {Jumbotron} from './components/Jumbotron3';

const Styles=styled.div`
.gif{
float:left;
width:70%;
margin-left:-200px;
border: 2px solid black;
margin-bottom:50px
}

.text{
margin-left:660px;
margin-right:-150px;
font-family: 'Open Sans', sans-serif;
font-size: 24px;
}

.text1{
font-family: 'Open Sans', sans-serif;
margin-right:900px;
margin-left:-200px;
margin-top:100px;
text-align:left;
font-size:24px;
}

.psd2{
float:right;
width:90%;
margin-top:100px;
margin-right:-200px;
margin-bottom:100px;
border: 2px solid black;

}
.email{
float:left;
width:75%;
margin-top:10px;
margin-right:100px;
margin-left:-200px;
margin-bottom:200px;
border: 2px solid black;

}

.title{
margin-left:-200px;
font-family: 'Open Sans', sans-serif;
font-size:69px;
margin-bottom:-70px;
color:#0080b9;
margin-top:90px;

}
.text2{
font-family: 'Open Sans', sans-serif;
margin-top:600px;
text-align:left;
font-size:24px;
margin-left:-20px;
margin-right:-50px;

}


`;
export const PaymentsProducts = () => (
<React.Fragment>
	<Jumbotron />
	<Styles>
			<Layout>

<img src={require('./assets/psd2.gif')} alt="PSD2Gif" Class="gif"/> 	
	<div class="text">
	<p>In 2019, I joined Hilton's digital products organization on the payments team. My main focus was to guide Hilton through Europe's PSD2 e-commerce regulation. PSD2 seeks to make payments more secure in Europe, by introducing two-factor authentication for online purchases.</p>

	<p>My role on the payments team: I provided product vision and strategy, UX/design/copy direction, user engagement/feedback, backlog prioritization, and QA.</p>

	<p Style="font-size:13px;text-align:right;margin-right:40px;"><a href="https://www.finextra.com/blogposting/12932/psd2-explained-in-3-simple-gifs"target="_blank"> GIF provided by Finextra </a></p>	</div>


<img src={require('./assets/psd2tool.png')} alt="PSD2 Payment Tool" Class="psd2" /> 	
		  <img src={require('./assets/email.png')} alt="PSD2 Email Template" Class="email" />
			  


<div className="title">
	<p> PSD2 </p>
	</div>

		  <div className="text1">
		  	<p> Our MVP solution for PSD2: we created a hotel-facing web app that would generate payment links.</p>
			
			<p> The hotels would generate the payment request, and send the payment links to the guest via e-mail. </p>
		  </div>
	<div className="text2">
			<p> The teams engaged on this project include:
			<li>1 UXA</li>
			<li>1 Designer</li>
			<li>1 Copy/Content Writer</li>
			<li>1 Experience Design Researcher</li>
			<li>1 Senior Payments Architect</li>
			<li>4 Developers</li>
			<li>1 QA Analyst</li>
			<li>1 EU Commercial Finance Manager </li></p>

<p>There were also a variety of stakeholders we engaged and kept in the loop, ranging from Directors to SVPs.</p>
</div>

</Layout>

</Styles>
	</React.Fragment>
	)