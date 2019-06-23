import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as Actions from '../../Redux/action_creators/action_creators';

class CustomerInfo extends Component {

    updateRedux = (event) => {
        if(event.target.name === "first name"){
            this.props.updateFirstName(event.target.value);
        }else if(event.target.name === "last name"){
            this.props.updateLastName(event.target.value)
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
                        <input type="text" />
                    </label>

                    <label>
                    Phone Number:
                        <input type="text" />
                    </label>

                    <label>
                    Street Address:
                        <input type="text" />
                    </label>

                    <label>
                    City:
                        <input type="text" />
                    </label>

                    <label>
                    State:
                        <input type="text" />
                    </label>

                    <label>

                    Zip:
                        <input type="text" />
                    </label>

            <button>Finish Order and Submit Info</button>
            </div> 
        </div>
        )
    }
}

export default connect(state => state, Actions)(CustomerInfo);