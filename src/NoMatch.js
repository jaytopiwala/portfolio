import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Layout} from './components/Layout';
import {Jumbotron} from './components/Jumbotron7'; 
const Styles=styled.div`
.gif{
float:center;
width:40%;
border: 2px solid black;
margin-bottom:50px

`;
export const NoMatch = () => (
	<React.Fragment>
		<Jumbotron />
		<Styles>
		<Layout>
	<img src={require('./assets/apollo.jpg')} alt="Dog!" Class="gif"/> 
</Layout>
	</Styles>

</React.Fragment>
)