import React, { Component } from 'react';
import './login.css'
import { Form, Button } from 'react-bootstrap';
import AuthService from './AuthService/AuthService'


class login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login: true,
      signup: false,
      userName: '',
      password: '',
      phone: '',
      email: '',
      LcNo: '',
      name: '',
      address: '',
      UserType: 'Distributer'

    }
    this.Auth = new AuthService();

  }


  handleFormSubmit1 = (e) => {
    console.log(this.state)
    e.preventDefault();
    console.log(this.state.LcNo);
    this.Auth.fetch('http://localhost:5000/api/signup', {
      method: 'POST', body: JSON.stringify({

        "email": this.state.email,
        "password": this.state.password,
        "userName": this.state.userName,
        "name": this.state.name,
        "LcNo": this.state.LcNo,
        'phone': this.state.phone,
        "address": this.state.address,
        "userType": this.state.UserType

      })
    }).then(res => {
      console.log("signup", res)
      this.props.history.replace('/')
    })
      .catch(err => console.log('signup', err))
  }


  handleFormSubmit = (e) => {
    // e.preventDefault();

    // this.Auth.login(this.state.username, this.state.password)
    e.preventDefault();
    console.log(this.state)
    this.Auth.login(this.state.userName, this.state.password)
      .then(res => {
        if (this.state.userName === 'admin')
          this.props.history.replace('/Admin');
        else
          this.props.history.replace('/');
      })
      .catch(err => {
        alert(err);
      })

  }


  handleChange = (e) => {
    let x = e.target.name
    this.setState(
      {
        [x]: e.target.value
      }
    )
  }

  handleThisChange = (e) => {
    this.setState(
      {
        UserType: e.target.value
      }
    )
  }


  componentWillMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/');
  }


  loginstateHandler = () => {
    this.setState({ login: false });

    this.setState({ signup: true });
  }



  signupstateHandler = () => {

    this.setState({ login: true });

    this.setState({ signup: false });
  }



  render() {
    return (

      <div>
        <div className="LFirst">
          <header className="toolbar">
            <nav className="nevigation_menu">
              <div className="Llogo_style">
                <p className="MYAPPNAME">Medicare</p>
              </div>
            </nav>
          </header>
        </div>
        {
          this.state.login === true ?
            <div className="LSecond">
              <div className="Logindiv">
                <div className="TopDesc">
                  <h3>Login</h3><hr />
                </div>
                <div className="Lformdiv">
                  <form>
                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>Username:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="text" name='userName' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />

                    </div>
                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>password:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="password" name='password' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />

                    </div>
                    <Button type="submit" variant="primary" className="formbut" onClick={this.handleFormSubmit}>Sign In</Button><br /><br />

                  </form>
                </div>
                <hr />
                <div className="Lredirectdiv">
                  <p>Not a member</p><p className="clickonme" onClick={this.loginstateHandler}>Sign Up</p>
                </div>
              </div>
            </div>
            : null

        }


        {
          this.state.signup === true ?
            <div className="LSecond">
              <div className="Logindiv">
                <div className="TopDesc">
                  <h3>Sign Up</h3><hr />
                </div>
                <div className="Lformdiv">
                  <form>
                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>Name:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="text" name='name' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />
                    </div>
                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>Username:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="text" name='userName' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />
                    </div>

                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>email:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="text" name='email' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />
                    </div>

                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>Address:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="text" name='address' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />
                    </div>

                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>Phone:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="text" name='phone' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />
                    </div>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <span style={{ float: 'left', marginRight: 250, marginBottom: 16 }}>UserType:</span>
                      <Form.Control as="select" style={{ border: 'none', }} value={this.state.UserType} onChange={this.handleThisChange}>
                        <option>Manufacturer</option>
                        <option>Distributer</option>
                        <option>Retailer</option>
                      </Form.Control>
                    </Form.Group>


                    <div>
                      <span style={{ float: 'left' }}>lisence No.:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="text" name='LcNo' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />
                    </div>


                    <div>
                      <span style={{ float: 'left', marginRight: 250 }}>password:</span>
                      <span style={{ 'color': 'red', float: 'left', fontSize: 16 }}></span>
                      <input type="password" name='password' required onChange={this.handleChange} style={{ border: 'none' }} /><br /><br />

                    </div>
                    <Button type="submit" variant="primary" className="formbut" onClick={this.handleFormSubmit1}>Sign Up</Button><br /><br />

                  </form>
                </div>

                <hr />
                <div className="Lredirectdiv">
                  <p>Already a member</p><p className="clickonme" onClick={this.signupstateHandler}>Sign In</p>
                </div>
              </div>
            </div> : null}

      </div>


    );
  }
}

export default login