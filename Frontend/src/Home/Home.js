import React, { Component } from 'react';
import './Home.css'
import { Nav, Navbar, Card, Container, Col, Row, Button } from 'react-bootstrap';
import AuthService from '../AuthService/AuthService.js';
import withAuth from '../withAuth'


class Home extends Component {


    componentWillMount() {
        this.getTrans()
        this.getNotifs()
        this.Auth.fetch('http://localhost:5000/api/getuser', {
            method: 'POST', body: JSON.stringify({
            })
        }).then(res => {

            this.setState({ typeofuser: res.typeofuser, userName: res.userName })
        })
            .catch(err => console.log('view own Question error', err))

    }
    getTrans = () => {
        this.Auth.fetch('http://localhost:5000/api/gettrans', {
            method: 'POST', body: JSON.stringify({
                userName: this.state.userName
            })
        }).then(res => {
            this.setState({ results: res })
            console.log(this.state)
        })
            .catch(err => console.log(err))
    }
    getNotifs = () => {
        this.Auth.fetch('http://localhost:5000/api/getnotifs', {
            method: 'POST', body: JSON.stringify({

                userName: this.state.userName
            })
        }).then(res => {
            this.setState({ notifs: res })
            console.log(this.state)
        })
            .catch(err => console.log(err))
    }

    addmed = () => {
        this.Auth.fetch('http://localhost:5000/api/addmed', {
            method: 'POST', body: JSON.stringify({
                medname: this.state.medname,
                manuname: this.state.manuname,
                sid: this.state.sid,
                eid: this.state.eid,
                to: this.state.to,
                toname: this.state.toname

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
        this.type = {
            Manufacturer: <Container style={{ marginTop: 50 }} className="addmedi">
                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan">Medicine Name:</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='medname' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>
                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan">Manufacture Name:</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='manuname' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>


                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan">Start Id:</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='sid' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>
                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan">End Id:</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='eid' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>

                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan"> Destination Address :</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='to' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>

                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan">Distributer Name:</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='toname' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>

                <Row className="addmedirow">
                    <Col sm={3} >
                    </Col>
                    <Col sm={9}>
                        <Button variant="outline-primary" className="addmedibutt" onClick={this.addmed}>Add This Medicine</Button>
                    </Col>
                </Row>



            </Container>,
            Distributer: <Container style={{ marginTop: 50 }} className="addmedi"> <Row className="addmedirow">
                <Col sm={3} >
                    <span className="addmediformspan">Start Id:</span>
                </Col>
                <Col sm={9}>
                    <input type="text" name='sid' required onChange={this.handleChange} /><br /><br />
                </Col>
            </Row>
                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan">End Id:</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='eid' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>

                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan"> Retailer Address :</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='to' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>

                <Row className="addmedirow">
                    <Col sm={3} >
                        <span className="addmediformspan">Retailer Name:</span>
                    </Col>
                    <Col sm={9}>
                        <input type="text" name='toname' required onChange={this.handleChange} /><br /><br />
                    </Col>
                </Row>

                <Row className="addmedirow">
                    <Col sm={3} >
                    </Col>
                    <Col sm={9}>
                        <Button variant="outline-primary" className="addmedibutt" onClick={this.addmed}>Add This Medicine</Button>
                    </Col>
                </Row></Container>
        }

        this.state = {
            mytry: true,
            addmedi: false,
            userName: '',
            notifi: false,
            showForward: false,
            typeofuser: '',
            Name: '',
            results: [{ id: '1314245', last: 'Reliance', from: '111', to: '222' }],
            notif: [{ id: 1 }],
            medname: '',
            manuname: '',
            sid: '',
            eid: '',
            to: '',
            toname: ''



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


    mytryHandler = () => {
        this.setState({ mytry: true });

        this.setState({ addmedi: false });

        this.setState({ notifi: false });
    }



    adddmediHandler = () => {
        this.setState({ mytry: false });

        this.setState({ addmedi: true });

        this.setState({ notifi: false });
    }



    notifiHandler = () => {
        this.setState({ mytry: false });

        this.setState({ addmedi: false });

        this.setState({ notifi: true });
    }


    acceptHandler = () => {

        this.setState({ showForward: true });
        this.Auth.fetch('http://localhost:5000/api/accept', {
            method: 'POST', body: JSON.stringify({

                //send id 
            })
        }).then(res => {
            this.setState({ results: res })
            console.log(this.state)
        })
            .catch(err => console.log(err))


    }

    declineHandler = () => {
        this.setState({ showForward: true });
        this.Auth.fetch('http://localhost:5000/api/decline', {
            method: 'POST', body: JSON.stringify({

                //send id and remove from notifs
            })
        }).then(res => {
            this.setState({ results: res })
            console.log(this.state)
        })
            .catch(err => console.log(err))

    }

    forwardHandler = () => {

        this.setState({ addmedi: true });

        this.setState({ notifi: false });

    }



    logout = () => {
        this.Auth.logout()
        this.setState()
    }


    render() {


        let disp = ''
        let notif = ''
        let myDP = ''
        if (this.state.results.length) {
            disp = this.state.results.map(r => {

                return (<Col sm={3}>
                    <Card style={{ marginBottom: 50 }} border="secondary">
                        <Card.Body>
                            <Card.Title>{r.id}</Card.Title>
                            <Card.Text>
                                {r.last}<br></br>
                                {r.from}<br></br>
                                {r.to}

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Trancastion date:22/09/2019</small>
                        </Card.Footer>
                    </Card>

                </Col>
                )
            })
        }
        if (this.state.results.length) {
            notif = this.state.results.map(r => {

                return (<Card style={{ marginBottom: 50 }} border="secondary">
                    <Card.Body>
                        <Card.Title>{r.id}</Card.Title>
                        <Card.Text>
                            {r.last}<br></br>
                            {r.from}<br></br>
                            {r.to}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {
                            this.state.showForward === false ?
                                <div>
                                    <Button variant="outline-success" className="abut" onClick={this.acceptHandler}>Accept</Button><Button variant="outline-danger" className="rejectBut abut" onClick={this.declineHandler}>Decline</Button>
                                </div>
                                : <Button variant="outline-primary" className="abut" onClick={this.forwardHandler}>Forward</Button>
                        }
                    </Card.Footer>
                </Card>
                )
            })
        }
        let nav = ''
        if (this.state.typeofuser !== 'Retailer')
            nav = <Nav.Link eventKey={1} href="" onClick={this.adddmediHandler}>Add Medicine</Nav.Link>

        let nav1 = ''
        if (this.state.typeofuser !== 'Manufacturer')
            nav1 = <Nav.Link eventKey={4} href="" onClick={this.notifiHandler}>Notification</Nav.Link>

        return (

            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="">Medicare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            {nav}
                            <Nav.Link eventKey={2} href="" onClick={this.mytryHandler}>
                                My Transaction
                            </Nav.Link>
                            {nav1}
                            <Nav.Link eventKey={3} href="/" style={{ 'color': 'white', fontWeight: 700 }} onClick={this.logout}>LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                {

                    this.state.mytry === true ?
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

                        </Container> : null

                }


                {

                    this.state.addmedi === true ?
                        this.type[this.state.typeofuser] : null

                }




                {

                    this.state.notifi === true ?
                        <Container style={{ marginTop: 50 }}>

                            <Row>

                                <Col sm={3}>
                                    {notif}
                                </Col>


                            </Row>

                        </Container> : null

                }


            </div>

        );
    }
}

export default withAuth(Home)

