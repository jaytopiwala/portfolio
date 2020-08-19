import React from 'react'
import {Jumbotron} from './components/Jumbotron';
import styled from 'styled-components';
import {Layout} from './components/Layout';
import {Container} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';
import {ReactDOM} from 'react-dom';


const Styles=styled.div`

.headshot{
float:left;
width:40%;
margin-left:-200px;
border: 2px solid black;
margin-bottom:200px;

}

.text{
margin-left:400px;
margin-right:-120px;
font-family: 'Open Sans', sans-serif;
font-size: 24px;
}

.socials{
margin-left:420px;
float:right;
}
`;

export const Home = ()=> (

<React.Fragment>		
	<Jumbotron />
<Styles>
		<Layout>
		<img src={require('./assets/headshot.jpg')} alt="headshot" Class="headshot"/> 
	<div class="text">
	<p>I'm a digital enthusiast currently living in Dallas, TX. I graduated in 2016 with my BBA in Management Information Systems from the University of Alabama in Huntsville. Since then, I've spent my oxygen leading project teams & building digital experience for customers</p>

	<p> Due to the impacts of Covid-19, I'm looking for work. <a href="mailto:jayhtopiwala@gmail.com">We should talk </a> if you're interested!</p>


	<p Style="float:right;margin-top:80px;"> You can also find me online here:</p>
	<div className="socials">
	<SocialIcon url="http://twitter.com/jay_topiwala"/>
	<SocialIcon url="http://www.linkedin.com/in/jay-topiwala-901b47120/"/>
	<SocialIcon url="http://www.instagram.com/jaytopiwala"/>	
	<SocialIcon url="mailto:jayhtopiwala@gmail.com"/>

	
	</div>
	</div>
</Layout>
</Styles>

	</React.Fragment>

) 