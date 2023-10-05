import React from 'react';
import './navigationBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Navigationbar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container className='navBar'>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src="https://media.istockphoto.com/id/1420039843/photo/cloud-computing-backup-cyber-security-fingerprint-identity-encryption-technology.jpg?s=2048x2048&w=is&k=20&c=GFD9OS1LFOvjEyqPvXCA_ueQxSQSBMilnF-zZpPG4IQ="
                        width="50rem"
                        height="50rem"
                    />
                </Navbar.Brand>
                <h1>React Bootstrap</h1>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;