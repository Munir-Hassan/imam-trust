import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
	return (
		<div className="Navigation">
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">Imam Trust</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#cause">Our Causes</Nav.Link>
					<Nav.Link href="#blogs">Blog</Nav.Link>
					<Nav.Link href="#contact">Contacts</Nav.Link>
					<FontAwesomeIcon icon={faFacebookF} size="lg" />
					<FontAwesomeIcon icon={faTwitter} size="lg" />
					<FontAwesomeIcon icon={faInstagram} size="lg" />
				</Nav>
			</Navbar>
		</div>
	);
};

export default Navigation;
