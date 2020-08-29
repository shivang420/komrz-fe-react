import React, { Component } from 'react';
import '../../css/auth/signUp.css';
import { Row, Col } from 'react-bootstrap';
import { Dropdown} from 'semantic-ui-react';


const prefCurrency = [
  {value: 'USD', label: 'American Dollars'}, 
  {value: 'INR', label: 'Indian Rupees'}, 
  {value: 'EUR', label: 'Euro'}
];

const industryType = [
  {key: '1', value: 'BANKING', label: 'BANKING'},
  {key: '2', value: 'RETAIL', label: 'RETAIL'},
  {key: '3', value: 'AIRLINES', label: 'AIRLINES'},
  {key: '4', value: 'HEATHCARE', label: 'HEATHCARE'},
  {key: '5', value: 'IT', label: 'IT'},
  {key: '6', value: 'AUTOMOBILE', label: 'AUTOMOBILE'},
  {key: '7', value: 'TELECOM', label: 'TELECOM'},
  {key: '8', value: 'OTHERS', label: 'OTHERS'}
];

class SignUp extends Component {
  state = {
    userData: {
      email: '',
      password: '',
      matchedPass: '',
      name: '',
      companyName: '',
      industryType: '',
      prefCurr: '',
    },
    signUpError: {
      matchedPass: '',
      non_field_errors: ''
    }
  };

  onInputChange = (e,name) => {
    const value = e.target.value;
    if(name === 'matchedPass'){
      if(this.state.userData.password === value){
        this.setState({signUpError: {matchedPass: ''}});
      }
    }
    this.setState({
      userData: { ...this.state.userData, [name]: value }
    });
  }

  onIndustryChange = (e, {value}) => {
    this.setState({
      userData: {...this.state.userData, industryType: `${value}`}}
      );
  }
  onCurrencyChange = (e, {value}) => {
    this.setState({
      userData: {...this.state.userData, prefCurr: `${value}`}}
      );
  }

  onPasswordClick = (e) => {
    console.log("Redirect to forgot pass");
  }

  onSignInClick = (e) => {
    console.log("Redirect to Sign In page");
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const userData = this.state.userData;
    if(userData.password === userData.matchedPass){
      console.log(this.state.userData);
    }else{
      this.setState({signUpError: {matchedPass: 'Password does not match'}})
    }
  }

  render(){
    return(
      <div className="modal-signin">
        <div className="signIn-container">
          <div className="signUp">
            <form onSubmit={e => {this.onFormSubmit(e)}} className="signIn__details">
              <div className="signIn__logo">
                <img alt="Komrz" src="./images/project_logo.png" />
              </div>
                <h4 className="signIn__heading">
                  Create new Account
                </h4>
              <div className="popup__templateInput">
                <label style={{width: '100%'}}>Full Name 
                <input 
                  className="popup__templateInputBox" 
                  type="text"
                  value= {this.state.userData.name}
                  onChange={e => this.onInputChange(e, "name")}
                  required
                />
                </label>
              </div>
              <div className="popup__templateInput" style={{marginTop: '10px'}}>
                <label style={{width: '100%'}}>Email Address
                <input 
                  className="popup__templateInputBox" 
                  type="email"
                  value= {this.state.userData.email}
                  onChange={e => this.onInputChange(e, "email")} 
                  required
                />
                </label>
              </div>
              <Row>
                <Col>
                  <div className="popup__templateInput" style={{marginTop: '10px'}}>
                    <label style={{width: '100%'}}>Password
                    <div className="popup__password">
                      <input 
                        className="popup__templateInputBox" 
                        type="password" id="myInput"
                        value= {this.state.userData.password}
                        onChange={e => this.onInputChange(e, "password")} 
                        required 
                      />
                    </div>
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className="popup__templateInput" style={{marginTop: '10px'}}>
                    <label style={{width: '100%'}}>Re-Enter Password
                    <div className="popup__password">
                      <input 
                        className="popup__templateInputBox" 
                        type="password"
                        value= {this.state.userData.matchedPass}
                        onChange={e => this.onInputChange(e, "matchedPass")} 
                        required 
                      />
                    </div>
                    </label>
                    <p style={{fontSize: '15px', color: 'red'}}>{this.state.signUpError.matchedPass}</p>
                  </div>
                </Col>
              </Row>
              <div className="popup__templateInput">
                <label style={{width: '100%'}}>Company Name 
                <input 
                  className="popup__templateInputBox" 
                  type="text"
                  value= {this.state.userData.companyName}
                  onChange={e => this.onInputChange(e, "companyName")}
                  required
                />
                </label>
              </div>
              <Row>
                <Col>
                  <div className="popup__templateInput" style={{marginTop: '10px'}}> 
                    <label style={{width: '100%'}}>Industry Type 
                    <Dropdown
                      onChange={this.onIndustryChange}
                      className="popup__templateInputBox"
                      options={industryType}
                      placeholder='Industry Type'
                      selection
                      upward
                      fluid
                      required
                      value={this.state.userData.industryType}
                      text={this.state.userData.industryType}
                    />
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className="popup__templateInput" style={{marginTop: '10px'}}> 
                    <label style={{width: '100%'}}>Preference Currency 
                      <Dropdown
                        onChange={this.onCurrencyChange}
                        className="popup__templateInputBox"
                        options={prefCurrency}
                        placeholder='Preference Currency'
                        selection
                        fluid
                        upward
                        value={this.state.userData.prefCurr}
                        text={this.state.userData.prefCurr}
                      />
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
              <div className="flexRow" style={{marginTop: '22px'}}>
                <Col>
                <span className="btn btn__transperant btn__forgot" onClick={e => this.onPasswordClick(e)} style={{width: '100%'}}>
                  Forgot Password
                </span>
                </Col>
                <Col style={{marginLeft: '80px'}}>
                <button className="btn btn__upload ripple btn__signup" type="submit">
                  Sign Up
                </button>
                </Col>
              </div>
              </Row>
            </form> 
            <div className="signIn__bottom">
              <h2> Have an account?<span className="btn__signIn" onClick={e => this.onSignInClick(e)}>Sign In</span></h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
