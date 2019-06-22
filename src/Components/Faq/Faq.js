import React, {Component} from 'react';
import './Faq.css';

const blade = 'I get them from .. I have several I like but my favorites are called Ultra Reverse'

class Faq extends Component{

    constructor(){
        super();
        this.state={
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
        <div className="MainBox">
            <div className="questions">
            <ul>
                <li onClick={()=> {this.change('blade')}}>What width of blade do you use?</li>
                <p style={{display: this.state.blade ? 'block' : 'none'}}>{blade}</p>
                <li onClick={()=> {this.change('piece')}}>How do you cut it all into just one piece?</li>
                <p style={{display: this.state.piece ? 'block' : 'none'}}>Blahblabhlaklb</p>
                <li onClick={()=> {this.change('setup')}}>Where is your saw setup?</li>
                <p style={{display: this.state.setup ? 'block' : 'none'}}>Blahblabhlaklb</p>
                <li onClick={()=> {this.change('cut')}}>Have you ever cut yourself while making signs?</li>
                <p style={{display: this.state.cut ? 'block' : 'none'}}>Blahblabhlaklb</p>
                <li onClick={()=> {this.change('scroll')}}>What scroll saw are you using?</li>
                <p style={{display: this.state.scroll ? 'block' : 'none'}}>Blahblabhlaklb</p>
                <li onClick={()=> {this.change('intro')}}>How did you get into woodcutting?</li>
                <p style={{display: this.state.intro ? 'block' : 'none'}}>Blahblabhlaklb</p>
                <li onClick={()=> {this.change('bulk')}}>Do you have bulk pieces or cut to order?</li>
                <p style={{display: this.state.bulk ? 'block' : 'none'}}>Blahblabhlaklb</p>
            </ul>
        </div>
        </div>
        
        )
    }
}

export default Faq;