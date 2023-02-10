import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#b17a45",
				textAlign: "center",
				marginTop: "-50px" }}>
		Agencia Digital del Estado de Baja California.
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Baja California</Heading>
			<FooterLink href="#">Mexicali</FooterLink>
			<FooterLink href="#">Tijuana</FooterLink>
			<FooterLink href="#">Ensenada</FooterLink>
			<FooterLink href="#">Tècate</FooterLink>
            <FooterLink href="#">Rosarito</FooterLink>
		</Column>
	
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
