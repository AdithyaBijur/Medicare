import React, { Component } from 'react';
import './Admin_Home.css'
import { Nav, Navbar, Card, Container, Col, Row, Button } from 'react-bootstrap';
import AuthService from '../AuthService/AuthService.js';
import withAuth from '../withAuth'


class Admin_Home extends Component {


    componentWillMount() {
        this.getResults()
    }


    getResults = () => {
        this.Auth.fetch('http://localhost:5000/api/viewtag', {
            method: 'POST', body: JSON.stringify({

                tid: this.state.Name
            })
        }).then(res => {
            this.setState({ results: res })
            console.log(this.state)
        })
            .catch(err => console.log(err))
    }



    constructor(props) {
        super(props)
        this.Auth = new AuthService()
        this.state = {
            Name: '',
            results: []
        }
    }


    handleChange = (e) => {
        let x = e.target.name
        this.setState(
            {
                [x]: e.target.value
            }
        )
        this.getResults()
    }


    logout = () => {
        this.Auth.logout()
        this.setState()
    }


    acceptHandler = () =>{


    }

    rejectHandler = () =>{


    }


    render() {


        let disp = ''
        let myDP = ''
        if (this.state.results.length) {
            disp = this.state.results.map(r => {

                return (<Col sm={3}>
                    <Card style={{ marginBottom: 50 }} border="secondary">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                         </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-success" className="abut" onClick={this.acceptHandler}>Accept</Button><Button variant="outline-danger" className="rejectBut abut" onClick={this.rejectHandler}>Reject</Button>
                        </Card.Footer>
                    </Card>
                </Col>
                )
            })
        }



        return (

            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="">Medicare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="" onClick={this.mytryHandler}>
                                Transactions
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="/" style={{ 'color': 'white', fontWeight: 700 }} onClick={this.logout}>LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



                <Container style={{ marginTop: 50 }}>
                    <Row>
                        <Col sm>
                            <input type="text" name='Name' className="searchinput" placeholder="Enter Transaction id" onChange={this.handleChange} /><br /><br />
                        </Col>
                        <Col sm>

                        </Col>
                    </Row>

                    <br />
                    <br />

                    <Row>

                        {disp}

                    </Row>

                </Container>

            </div>

        );
    }
}

export default withAuth(Admin_Home)