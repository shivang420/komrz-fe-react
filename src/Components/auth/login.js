import React, { Component } from 'react';
import '../../css/auth/login.css';

class Login extends Component {
  state = {
    userData: {
      email: "",
      password: ""
    },
    signInError: {
      email: "",
      password: "",
      non_field_errors: ""
    }
  };

  onInputChange = (e,name) => {
    const value = e.target.value;
    this.setState({
      userData: { ...this.state.userData, [name]: value }
    });
  }

  onForgotClick = (e) => {
    console.log("Password forgot");
  } 

  onSignUpClick = (e) => {
    console.log("Redirect to signup");
  } 

  onFormSubmit = (e) => {
    e.preventDefault();
    const userData = this.state.userData;
    let errorMessage = {}
    if(userData.email && userData.password){
      console.log(userData);
      this.setState({
        userData: {email: "", password: ""}
      })
    } else if (!userData.email && !userData.password){
      errorMessage ={ non_field_errors: "This field may not be blank."}

    } else if(!userData.password) {
      errorMessage ={ password: "Password should not be blank"}

    } else {
      errorMessage ={ email: "Include email"}

    }
    this.setState({
      signInError: errorMessage,
    })
  }
 
  render(){
    return( 
        <div className="modal-signin"> 
          <div className="signIn-container">
            <div className="signIn signUp">
              <form onSubmit={e => {this.onFormSubmit(e)}} className="signIn__details">
                <div className="signIn__logo">
                  <img alt="Komrz" src="./images/project_logo.png" />
                </div>
                <h4 className="signIn__heading">
                  Sign In
                </h4>
                <div className="popup__templateInput">
                  <p>Email Address</p>
                  <input 
                    className="popup__templateInputBox" 
                    type="email"
                    required
                    value= {this.state.userData.email}
                    onChange={e => this.onInputChange(e, "email")}
                  />
                  <div className= "error text-center">{this.state.signInError.email}</div>
                </div>
                <div className="popup__templateInput mt-10">
                  <p>Password</p>
                  <div className="popup__password">
                    <input 
                      className="popup__templateInputBox" 
                      type="password" 
                      id="myInput"
                      required
                      value={this.state.userData.password}
                      onChange={e => {this.onInputChange(e, "password")}}
                    /> 
                    <div className= "error text-center">{this.state.signInError.password}</div>
                    <div className= "error text-center">{this.state.signInError.non_field_errors}</div>
                  </div>
                </div>
                <div className="flexRow" style={{marginTop: '22px'}}>
                  <span className="btn btn__transperant btn__forgot" onClick={e => this.onForgotClick(e)}>
                    Forgot Password
                  </span>
                  <button 
                    className="btn btn__upload ripple btn__sign-in" 
                    type= "submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="signIn__google">
                <div className="signIn__googleIcon"><img alt="Google" src="./images/google1.png" /></div>
                <span>Sign in with Goggle</span> 
              </div>
              <div className="signIn__bottom">
                <h2>Do you have an account?<span className="btn__sign-up" onClick={e => this.onSignUpClick(e)}>Signup</span></h2>
              </div>
            </div>
          </div>
        </div>
    )};
}

export default Login;