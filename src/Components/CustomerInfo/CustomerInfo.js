import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as Actions from '../../Redux/action_creators/action_creators';

class CustomerInfo extends Component {

    firstNameChange = (event) => {
        this.props.firstName(event.target.value);        
    }

    render(){
        return(
            <div> 
                {this.props.firstName}
                <div className="InputGroup">
                    <label>
                    First Name:
                        
                        <input type="text" placeholder="..." value={this.props.name} onChange={this.handleNameChange} />
                    </label>

                    <label>
                    Last Name:
                        <input type="text" />
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