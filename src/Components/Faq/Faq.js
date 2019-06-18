import React, {Component} from 'react';
import './Faq.css';

class Faq extends Component{

    // constructor(){
    //     super();
    //     this.store={
    //         blade: false,
    //         piece: false,
    //         setup: false,
    //         cut: false,
    //         scroll: false,
    //         intro: false,
    //         bulk: false
    //     }
    // }

    // change = (str) => {
    //     if(this.state[str]){
    //         this.setState({
    //         [str]: false
    //         })
    //     }else{
    //         this.setState({
    //             [str]: true
    //         })
    //     }
        
    // }

    render(){
         return(
        <div className="questions">
            <ul>
                <li>What width of blade do you use?</li>
                <p>Blahblabhlaklb</p>
                <li>How do you cut it all into just one piece?</li>
                <p>Blahblabhlaklb</p>
                <li>Where is your saw setup?</li>
                <p>Blahblabhlaklb</p>
                <li>Have you ever cut yourself while making signs?</li>
                <p>Blahblabhlaklb</p>
                <li>What scroll saw are you using?</li>
                <p>Blahblabhlaklb</p>
                <li>How did you get into woodcutting?</li>
                <p>Blahblabhlaklb</p>
                <li>Do you have bulk pieces or cut to order?</li>
                <p>Blahblabhlaklb</p>
            </ul>
        </div>
        )
    }
}

export default Faq;