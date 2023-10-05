import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Navigationbar() {
    return (
        <Navbar className="bg-body-tertiary" style={{width:'100%'}}>
            <Container className='navBar'>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src="https://media.istockphoto.com/id/1402674567/vector/camera.jpg?s=612x612&w=0&k=20&c=1yc-LLrLd0okngQr5KrGWwx-AJc5eExx_ifZsD1f9mU="
                        width="50rem"
                        height="50rem"
                    />
                </Navbar.Brand>
                <h1 style={{fontFamily:"cursive"}}>Image Library</h1>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;