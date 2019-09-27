import React, { Component } from 'react';
import './Home.css'
import { Nav, Navbar, Card, Container, Col, Row, Button } from 'react-bootstrap';
import AuthService from '../AuthService/AuthService.js';
import withAuth from '../withAuth'

class Home extends Component {

    constructor(props) {
        super(props)
        this.Auth = new AuthService()
        this.state = {
            mytry: true,
            addmedi: false,
            Searchinput: ''
        }
    }


    componentDidMount() {
        this.getResults()
    }

    getResults = () => {
        this.Auth.fetch('http://localhost:5000/api/viewotherprofile', {
            method: 'POST', body: JSON.stringify({

                username: this.state.username
            })
        }).then(res => {
            this.setState({ results: res })
            console.log(this.state)
        })
            .catch(err => console.log('downques', err))
    }

    handleSearchChange = (e) => {
        let x = e.target.name
        this.setState(
            {
                [x]: e.target.value
            }
        )
        this.getResults()
    }



    mytryHandler = () => {
        this.setState({ mytry: true });

        this.setState({ addmedi: false });
    }



    adddmediHandler = () => {
        this.setState({ mytry: false });

        this.setState({ addmedi: true });
    }



    logout = () => {
        this.Auth.logout()
        this.setState()
    }


    handleChange = (e) => {
        let x = e.target.name
        this.setState(
            {
                [x]: e.target.value
            }
        )
    }


    handleSearchSubmit = (e) => {


    }



    render() {

        // let disp = ''
        // let myDP = ''
        // if (this.state.results.length) {
        //     disp = this.state.results.map(r => {

        //         return (<Col sm={3}>
        //             <Card style={{ marginBottom: 50 }} border="secondary">
        //                 <Card.Body>
        //                     <Card.Title>Card title</Card.Title>
        //                     <Card.Text>
        //                         This is a wider card with supporting text below as a natural lead-in to
        //                         additional content. This card has even longer content than the first to
        //                         show that equal height action.
        //          </Card.Text>
        //                 </Card.Body>
        //                 <Card.Footer>
        //                     <small className="text-muted">Trancastion date:22/09/2019</small>
        //                 </Card.Footer>
        //             </Card>
        //         </Col>
        //         )
        //     })
        // }



        return (

            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="">Medicare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={3} href="" onClick={this.adddmediHandler}>Add Medicine</Nav.Link>
                            <Nav.Link eventKey={2} href="" onClick={this.mytryHandler}>
                                My Transaction
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="/" style={{ 'color': 'white', fontWeight: 700 }} onClick={this.logout}>LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {
                    this.state.mytry === true ?
                        <Container style={{ marginTop: 50 }}>

                            <Row>

                                <Col sm>
                                    <input type="text" name='Searchinput' className="searchinput" placeholder="Type Name Of Medicine" required onChange={this.handleSearchChange} /><br /><br />
                                </Col>
                                <Col sm>
                                    
                                </Col>
                            </Row>

                            <br />
                            <br />


                            <Row>

                                {/* {disp} */}

                            </Row>




                        </Container> : null
                }


                {

                    this.state.addmedi === true ?
                        <Container style={{ marginTop: 50 }} className="addmedi">
                            <Row className="addmedirow">
                                <Col sm={3} >
                                    <span className="addmediformspan">Medicine Name:</span>
                                </Col>
                                <Col sm={9}>
                                    <input type="text" name='LiNumberofnewuser' required onChange={this.handleChange} /><br /><br />
                                </Col>
                            </Row>
                            <Row className="addmedirow">
                                <Col sm={3} >
                                    <span className="addmediformspan">Manufacture Name:</span>
                                </Col>
                                <Col sm={9}>
                                    <input type="text" name='LiNumberofnewuser' required onChange={this.handleChange} /><br /><br />
                                </Col>
                            </Row>


                            <Row className="addmedirow">
                                <Col sm={3} >
                                    <span className="addmediformspan">Id:</span>
                                </Col>
                                <Col sm={9}>
                                    <input type="text" name='LiNumberofnewuser' required onChange={this.handleChange} /><br /><br />
                                </Col>
                            </Row>


                            <Row className="addmedirow">
                                <Col sm={3} >
                                    <span className="addmediformspan">Address Destination:</span>
                                </Col>
                                <Col sm={9}>
                                    <input type="text" name='LiNumberofnewuser' required onChange={this.handleChange} /><br /><br />
                                </Col>
                            </Row>

                            <Row className="addmedirow">
                                <Col sm={3} >
                                    <span className="addmediformspan">Distributer Name:</span>
                                </Col>
                                <Col sm={9}>
                                    <input type="text" name='LiNumberofnewuser' required onChange={this.handleChange} /><br /><br />
                                </Col>
                            </Row>

                            <Row className="addmedirow">
                                <Col sm={3} >
                                </Col>
                                <Col sm={9}>
                                    <Button variant="outline-primary" className="addmedibutt">Add This Medicine</Button>
                                </Col>
                            </Row>



                        </Container> : null

                }


            </div>

        );
    }
}

export default withAuth(Home)