import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as Actions from '../../Redux/action_creators/action_creators';

class CustomerInfo extends Component {

    updateRedux = (event) => {
        if(event.target.name === "first name"){
            this.props.updateFirstName(event.target.value);
        }else if(event.target.name === "last name"){
            this.props.updateLastName(event.target.value)
        }else if(event.target.name === "email"){
            this.props.updateEmail(event.target.value)
        }else if(event.target.name === "phone"){
            this.props.updatePhone(event.target.value)
        }else if(event.target.name === "street address"){
            this.props.updateStreetAddress(event.target.value)
        }else if(event.target.name === "city"){
            this.props.updateCity(event.target.value)
        }else if(event.target.name === "state"){
            this.props.updateState(event.target.value)
        }else if(event.target.name === "zip"){
            this.props.updateZip(event.target.value)
        }
                
    }

    render(){
        return(
            <div> 
                <div className="InputGroup">
                    <label>
                    First Name:
                        
                        <input type="text" name="first name" value={this.props.firstName} onChange={this.updateRedux} />
                    </label>

                    <label>
                    Last Name:
                        <input type="text" name="last name" value={this.props.lastName} onChange={this.updateRedux}/>
                    </label>

                    <label>
                    Email Address:
                        <input type="text" name="email" value={this.props.email} onChange={this.updateRedux} />
                    </label>

                    <label>
                    Phone Number:
                        <input type="text" name="phone" value={this.props.phone} onChange={this.updateRedux} />
                    </label>

                    <label>
                    Street Address:
                        <input type="text" name="street address" value={this.props.streetAddress} onChange={this.updateRedux} />
                    </label>

                    <label>
                    City:
                        <input type="text" name="city" value={this.props.city} onChange={this.updateRedux} />
                    </label>

                    <label>
                    State:
                        <input type="text" name="state" value={this.props.state} onChange={this.updateRedux} />
                    </label>

                    <label>

                    Zip:
                        <input type="text" name="zip" value={this.props.zip} onChange={this.updateRedux} />
                    </label>
            
            <button>Finish Order and Submit Info</button>
            </div> 
        </div>
        )
    }
}

export default connect(state => state, Actions)(CustomerInfo);