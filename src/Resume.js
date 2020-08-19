import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import {Layout} from './components/Layout';
import {Jumbotron} from './components/Jumbotron6';
import styled from 'styled-components';

const Styles =styled.div`
.stuff{
font-family: 'Open Sans', sans-serif;
margin-bottom:100px;
margin-left:-100px;
}


`;
export const Resume = ()=> (
<React.Fragment>
<Jumbotron />
		<Layout>
		<Styles>
<div className="stuff">
	<h2> Hilton | 2019-2020</h2>
	<h4> Senior Product Business Analyst: Payments</h4>
	<h5> Key Accomplishments </h5>
	<li> Created product vision, strategy and global payments providor approach for 2020</li>
	<li> Built MVP tool for PSD2/SCA requirement</li>
	<li> Launched virtual credit card acceptance enhancements to all hotels </li>
	<li> Liased with Visa, Mastercard, and American Express on card acceptance optimization and new product devolopment. </li> 
	<li> Liased with BarclayCard and Elavon (primary Hilton acquirers) on global payments data for Hilton </li>
	<br></br><h2> Hilton | 2017-2019</h2>
<h4> Senior Creative Operations Specialist </h4>
	<h5> Key Accomplishments </h5>
	<li> Created agile processes for enterprise-facing projects </li>
	<li> Provided digital project management for a new product to hotel software for 2+ years</li>
	<li> Provided digital project management for Hilton's public facing API portal </li>
	<li> Provided weekly updates to leadership on project status </li>
	<li> Created process & executed new employee onboarding </li>
	<br></br><h2> Sanmina | 2015-2017</h2>
<h4> Senior Creative Operations Specialist </h4>
	<h5> Key Accomplishments </h5>
	<li> Deployed new company-wide 2FA solution </li>
	<li> Increased Google Apps & Chromebook usage within the company </li>
	<li> Deployed IT security software to all company endpoints (servers, PCs, laptops, etc.)</li>
	<li> Led projects to replace IT infrastructure: servers, PBX machines, network, etc. </li>
	</div>
</Styles>
		</Layout>
</React.Fragment>
) 