import React, {Component} from 'react';
import './Faq.css';

class Faq extends Component{

    constructor(){
        super();
        this.store={
            blade: false,
            piece: false,
            setup: false,
            cut: false,
            scroll: false,
            intro: false,
            bulk: false
        }
    }

    change = (str) => {
        if(this.state[str]){
            this.setState({
            [str]: false
            })
        }else{
            this.setState({
                [str]: true
            })
        }
        
    }

    render(){
         return(
        <div className="questions">
            <ul>
                <li onClick={() => {this.change(blade)}}>What width of blade do you use?</li>
                <p style={{ display: this.state.blade ? block : none }}>Blahblabhlaklb</p>
                <li>How do you cut it all into just one piece?</li>
                <li>Where is your saw setup?</li>
                <li>Have you ever cut yourself while making signs?</li>
                <li>What scroll saw are you using?</li>
                <li>How did you get into woodcutting?</li>
                <li>Do you have bulk pieces or cut to order?</li>
            </ul>
        </div>
        )
    }
}

export default Faq;