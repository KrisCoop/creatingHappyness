import React, {Component} from 'react';
import './Login.css'

class Login extends Component{

    constructor(){
        super();
        this.state={
            password: ""
        }
    }

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    loginUser = () => {
        let password = this.state.password;
        if (password === "Astoria"){
            this.props.successfulLogin()
        }else{
            alert("That password is invalid. Go away.")
            this.props.hide();
        }
    }

    render(){
        return(
            <div className="loggin">
                <div >
                    <p>Access to this area is restricted.</p>
                    <p>Please enter your password</p>
                    <input type="password" onChange={this.updatePassword}/>
                    <button onClick={this.loginUser}>Submit</button>
                </div>
                
            </div>
        )
    }
    
}

export default Login;