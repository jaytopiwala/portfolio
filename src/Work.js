import React from 'react'
import styled from 'styled-components';
import {Layout} from './components/Layout';
import {PaymentsProducts} from './PaymentsProducts';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Jumbotron} from './components/Jumbotron2';

	
	
const Styles = styled.div`
.card{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  text-align: center;
  background-color: D3D3D3;
color:black;
font-family: 'Open Sans', sans-serif;
height:500px;
padding-top:20px;




}
.card:hover{

	transform: scale(1.03);
	color:black;
font-family: 'Open Sans', sans-serif;

	text-decoration: none;


}

.column {
width: 33.3333%;
margin-left: auto;
margin-right auto;
padding-top: 30px;
padding-bottom:30px;
height:500px;


}
.row {
margin: 0px; -5px;
background-color: #efefef;
height:560px;




}

.pictures{
width:auto;
height:65%;
border: 1px solid black;
margin-left:15px;
margin-right:15px;
margin-top:15px;

}
.Container{
font-family: 'Open Sans', sans-serif;
}

.row2{
height:30px;
}


`;
export const Work = ()=> (
	<Styles>
	<Jumbotron />
<div class="row">
  <div class="column">
	<Link to="/PaymentsProducts" Style="text-decoration:none;">
	<Container>
    <div className="card"><h2>Hilton</h2><h5>Payments Products</h5>
	<img src={require('./assets/payments.jpeg')} alt="Credit card" Class="pictures"/> </div>
	</Container>
	
</Link>
  </div>
  <div class="column">
	<Link to="/CreativeOperations" Style="text-decoration:none;">
	<Container>
    <div className="card"><h2>Hilton</h2><h5>Creative Operations</h5>
	<img src={require('./assets/creativeops.jpg')} alt="Creative Operations" Class="pictures"/> </div>
	</Container>
	
</Link>
  </div>
  <div class="column">
	<Link to="/Sanmina" Style="text-decoration:none;">
	<Container>
    <div className="card"><h2>Sanmina</h2><h5>Global IT Project Management </h5>
	<img src={require('./assets/projectmgmt.jpeg')} alt="Project Management" Class="pictures"/> </div>
	</Container>
	
</Link>
  </div>
</div>
<div class="row2">
	</div>

	</Styles>
			

	
) 