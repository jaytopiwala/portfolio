import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../assets/banner.jpeg';

const Styles = styled.div`

.jumbo {
	background: url(${banner}); no-repeat fixed bottom;
	background-size: cover;
	color: #efefef;
	margin-left:-100px;
	height: 200px;
	position: relative;
	z-index: -2;
font-family: 'Open Sans', sans-serif;


}

.overlay {
	background-color: #000;
	opacity: 0.6;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
font-family: 'Open Sans', sans-serif;

}

`;


export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h1>Creative Operations <span role="img" aria-label="Artist Pallet and Paintbrush">🎨 🖌</span></h1>
				<p> I helped shape and evolve the Experience Design deparment at Hilton</p>
			</Container>
		</Jumbo>
	</Styles>

)
