import React from 'react';

import Nav from 'react-bootstrap/Nav';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Nav defaultActiveKey="/about" as="ul">
      <Nav.Item as="li">
        <Nav.Link  href="#about"
          onClick={() => handlePageChange('About')}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link  href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link  href="#contact"
          onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}




   
export default NavTabs;
