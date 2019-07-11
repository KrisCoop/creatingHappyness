import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Order.css';
import * as Actions from '../../Redux/action_creators/action_creators';
// import fonts:
import './../../Fonts/autumn_in_november/Autumn in November.ttf';
import './../../Fonts/a_gentle_touch/A Gentle Touch.ttf';

import order1 from './../../images/order1.png';
import pic from './../../Resources/envelope_read.png'



class Order extends Component{
    constructor(props){
        super(props)
        this.state = {
            mainText: 'Main',
            mainFont: "",
            mainColor: "#eba1c6",
            secText: 'Secondary',
            secFont: "",
            secColor: "#fdd06c",
            backgroundColor: "White",
            comments: ""
        }
    }

    
    updateRedux = (event) => {
        if(event.target.name === "main text"){
            this.props.updateMainText(event.target.value);
        }else if(event.target.name === "main text font"){
            this.props.updateMainTextFont(event.target.value)
        }else if(event.target.name === "main text color"){
            this.props.updateMainTextColor(event.target.value)
        }else if(event.target.name === "secondary text"){
            this.props.updateSecondaryText(event.target.value)
        }else if(event.target.name === "secondary text font"){
            this.props.updateSecondaryTextFont(event.target.value)
        }else if(event.target.name === "secondary text color"){
            this.props.updateSecondaryTextColor(event.target.value)
        }else if(event.target.name === "background color"){
            this.props.updateBackgroundColor(event.target.value)
        }else if(event.target.name === "comments"){
            this.props.updateComments(event.target.value)
        }          
    }

    render(){
        return(
            <div className="Main">
                <div className="Sign" style={{backgroundColor: this.props.backgroundColor}}>
                    <div className="KewlPng" style={{backgroundImage: `url(${order1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <div className="Werds">
                            <h2 style={{fontFamily: this.props.mainTextFont, color: this.props.mainTextColor}}>{this.props.mainText}</h2>
                            <h4 style={{fontFamily: this.props.secondaryTextFont, color: this.props.secondaryTextColor}}>{this.props.secondaryText}</h4>
                        </div>
                    </div>
                </div>
            <div className="InputsDiv">
                <div className="InputGroup">
                    <label>
                        Main Text:
                        <input type="text" name="main text" value={this.props.mainText} onChange={this.updateRedux} />
                    </label>

                    <label> 
                        Main Font:
                        <select name="main text font" value={this.props.mainTextFont} onChange={this.updateRedux}>
                            <option value="Autumn in November">Autumn</option>
                            <option value="A Gentle Touch">A Gentle Touch</option>
                            <option value="./../Fonts/affection_ldr/affection_ldr"></option>
                            <option value="./../Fonts/all_of_me/KGAllofMe"></option>
                            <option value="./../Fonts/amarillo/Amarillo"></option>
                            <option value="./../Fonts/arabella_2/arabella Demo"></option>
                            <option value="./../Fonts/Architect/Flux Architect Regular"></option>
                            <option value="./../Fonts/ballerina_script/Ballerina Script"></option>
                            <option value="./../Fonts/be_still_know/KGBeStillAndKnow"></option>
                            <option value="./../Fonts/black_jack/BLACKJAR"></option>
                            <option value="./../Fonts/brannboll/BrannbollFS_PERSONAL"></option>
                            <option value="./../Fonts/brewery/brewery"></option>
                            <option value="./../Fonts/bridgetown/bridgetown"></option>
                            <option value="./../Fonts/bromello/bromello-Regular"></option>
                            <option value="./../Fonts/brusher/Brusher"></option>
                            <option value="./../Fonts/call_me_maybe/KGCallMeMaybe"></option>
                            <option value="./../Fonts/carrots/carrots"></option>
                            <option value="./../Fonts/dark_side/KGDarkSide"></option>
                            <option value="./../Fonts/diehl_deco/diehl_deco"></option>
                            <option value="./../Fonts/hickory_jack/Hickory Jack"></option>
                            <option value="./../Fonts/dk_wayang/DK Wayang"></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        
                    </label>

                    <label>
                        Main Text Color:
                        <select onChange={this.updateRedux} name="main text color">
                            <option value="#aa393f">Apple</option>
                            <option value="#823b41">Wine</option>
                            <option value="#c46862">Sunburn</option>
                            <option value="#eb8963">Moli</option>
                            <option value="#ee804a">Tangerine</option>
                            <option value="#cf4d34">Daring</option>
                            <option value="#ffc847">Daisy</option>
                            <option value="#fdd06c">Tulip</option>
                            <option value="#e4c390">Giraffe</option>
                            <option value="#d5994c">Mustard</option>
                            <option value="#936845">Caramel</option>
                            <option value="#75c169">Vivid</option>
                            <option value="#c2d774">Spring Green</option>
                            <option value="#93a363">Zesty</option>
                            <option value="#81895b">Pesto</option>
                            <option value="#535d44">G.I. Joe</option>
                            <option value="#7b9f77">Emerald Lake</option>
                            <option value="#027446">Greenbelt</option>
                            <option value="#478b4e">Plant</option>
                            <option value="#448776">Gater</option>
                            <option value="#435c56">Deep Forest</option>
                            <option value="#d1e0c1">Cucumber</option>
                            <option value="#adc9bb">Aloe</option>
                            <option value="#c0e6df">Tame Teal</option>
                            <option value="#b4deca">Mint</option>
                            <option value="#95dfd2">Bali Teal</option>
                            <option value="#5dcaba">Thai Teal</option>
                            <option value="#04a596">Tropical Sea</option>
                            <option value="#30b7b5">Caicos</option>
                            <option value="#80bbc9">Azure</option>
                            <option value="#c6d2d2">Winter</option>
                            <option value="#8cbad3">Baby Blue</option>
                            <option value="#78c8df">By the Sea</option>
                            <option value="#0e6697">Officer</option>
                            <option value="#037597">Mayan</option>
                            <option value="#02a5c5">Yucatan</option>
                            <option value="#0689c3">Clipper Ship</option>
                            <option value="#0c5462">Peacock</option>
                            <option value="#4f6f86">Navy</option>
                            <option value="#273248">Deep Navy</option>
                            <option value="#767a94">Soulful</option>
                            <option value="#4d426d">Ravens</option>
                            <option value="#d2c8d3">Enchant</option>
                            <option value="#c0c2d7">Violet</option>
                            <option value="#aca6a6">Taupe</option>
                            <option value="#d5a4b9">Mauve</option>
                            <option value="#bb88b0">Joy</option>
                            <option value="#7a6e7f">Owynn</option>
                            <option value="#754755">Plum</option>
                            <option value="#f4bb9d">Peach</option>
                            <option value="#e1967f">Sockeye</option>
                            <option value="#e3a8a4">Coral</option>
                            <option value="#eec3c0">Peachy Pink</option>
                            <option value="#e58283">Sugar Poppy</option>
                            <option value="#eba1c6">Bubblegum</option>
                            <option value="#efd2d3">Charming</option>
                            <option value="#f0b7b5">Old Flame</option>
                            <option value="#ea8ba3">Pinkety Pink</option>
                            <option value="#f24e87">Flamingo</option>
                            <option value="#d26483">Dragon Fruit</option>
                            <option value="#bf5e6c">Candy</option>
                            <option value="#ced4cc">Silver Maple</option>
                            <option value="#7e8f8f">Greyed Teal</option>
                            <option value="#ffffff">White</option>
                            <option value="#f1e8d9">Linen</option>
                            <option value="#fcead6">Cream</option>
                            <option value="#afa299">Stone</option>
                            <option value="#c8b8ae">Light Tan</option>
                            <option value="#9c8272">Medium Brown</option>
                            <option value="#655b52">Deep Brown</option>
                            <option value="#bfc5c5">Light Grey</option>
                            <option value="#91908c">Medium Grey</option>
                            <option value="#6f6f6f">Iron</option>
                            <option value="#000000">Black</option>
                            <option value="#e3c5c2">Pink Champagne</option>
                            <option value="#e3c5c2">Gold</option>
                            <option value="#dea080">Copper</option>
                            <option value="#d0d0d0">Silver</option>
                        </select>
                    </label>
                </div>
                <div className="InputGroup">

                    <label>
                        Secondary Text:
                        <input type="text" name="secondary text" onChange={this.updateRedux}  />
                    </label>

                    <label>
                        Secondary Font:
                        <select name="secondary text font" onChange={this.updateRedux}>
                            <option value="Autumn in November">Autumn</option>
                            <option value="./../Fonts/a_gentle_touch/A Gentle Touch">A Gentle Touch</option>
                            <option value="./../Fonts/affection_ldr/affection_ldr"></option>
                            <option value="./../Fonts/all_of_me/KGAllofMe"></option>
                            <option value="./../Fonts/amarillo/Amarillo"></option>
                            <option value="./../Fonts/arabella_2/arabella Demo"></option>
                            <option value="./../Fonts/Architect/Flux Architect Regular"></option>
                            <option value="./../Fonts/ballerina_script/Ballerina Script"></option>
                            <option value="./../Fonts/be_still_know/KGBeStillAndKnow"></option>
                            <option value="./../Fonts/black_jack/BLACKJAR"></option>
                            <option value="./../Fonts/brannboll/BrannbollFS_PERSONAL"></option>
                            <option value="./../Fonts/brewery/brewery"></option>
                            <option value="./../Fonts/bridgetown/bridgetown"></option>
                            <option value="./../Fonts/bromello/bromello-Regular"></option>
                            <option value="./../Fonts/brusher/Brusher"></option>
                            <option value="./../Fonts/call_me_maybe/KGCallMeMaybe"></option>
                            <option value="./../Fonts/carrots/carrots"></option>
                            <option value="./../Fonts/dark_side/KGDarkSide"></option>
                            <option value="./../Fonts/diehl_deco/diehl_deco"></option>
                            <option value="./../Fonts/hickory_jack/Hickory Jack"></option>
                            <option value="./../Fonts/dk_wayang/DK Wayang"></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </label>

                    <label>
                        Secondary Color:
                        <select onChange={this.updateRedux} name="secondary text color">
                            <option value="#aa393f">Apple</option>
                            <option value="#823b41">Wine</option>
                            <option value="#c46862">Sunburn</option>
                            <option value="#eb8963">Moli</option>
                            <option value="#ee804a">Tangerine</option>
                            <option value="#cf4d34">Daring</option>
                            <option value="#ffc847">Daisy</option>
                            <option value="#fdd06c">Tulip</option>
                            <option value="#e4c390">Giraffe</option>
                            <option value="#d5994c">Mustard</option>
                            <option value="#936845">Caramel</option>
                            <option value="#75c169">Vivid</option>
                            <option value="#c2d774">Spring Green</option>
                            <option value="#93a363">Zesty</option>
                            <option value="#81895b">Pesto</option>
                            <option value="#535d44">G.I. Joe</option>
                            <option value="#7b9f77">Emerald Lake</option>
                            <option value="#027446">Greenbelt</option>
                            <option value="#478b4e">Plant</option>
                            <option value="#448776">Gater</option>
                            <option value="#435c56">Deep Forest</option>
                            <option value="#d1e0c1">Cucumber</option>
                            <option value="#adc9bb">Aloe</option>
                            <option value="#c0e6df">Tame Teal</option>
                            <option value="#b4deca">Mint</option>
                            <option value="#95dfd2">Bali Teal</option>
                            <option value="#5dcaba">Thai Teal</option>
                            <option value="#04a596">Tropical Sea</option>
                            <option value="#30b7b5">Caicos</option>
                            <option value="#80bbc9">Azure</option>
                            <option value="#c6d2d2">Winter</option>
                            <option value="#8cbad3">Baby Blue</option>
                            <option value="#78c8df">By the Sea</option>
                            <option value="#0e6697">Officer</option>
                            <option value="#037597">Mayan</option>
                            <option value="#02a5c5">Yucatan</option>
                            <option value="#0689c3">Clipper Ship</option>
                            <option value="#0c5462">Peacock</option>
                            <option value="#4f6f86">Navy</option>
                            <option value="#273248">Deep Navy</option>
                            <option value="#767a94">Soulful</option>
                            <option value="#4d426d">Ravens</option>
                            <option value="#d2c8d3">Enchant</option>
                            <option value="#c0c2d7">Violet</option>
                            <option value="#aca6a6">Taupe</option>
                            <option value="#d5a4b9">Mauve</option>
                            <option value="#bb88b0">Joy</option>
                            <option value="#7a6e7f">Owynn</option>
                            <option value="#754755">Plum</option>
                            <option value="#f4bb9d">Peach</option>
                            <option value="#e1967f">Sockeye</option>
                            <option value="#e3a8a4">Coral</option>
                            <option value="#eec3c0">Peachy Pink</option>
                            <option value="#e58283">Sugar Poppy</option>
                            <option value="#eba1c6">Bubblegum</option>
                            <option value="#efd2d3">Charming</option>
                            <option value="#f0b7b5">Old Flame</option>
                            <option value="#ea8ba3">Pinkety Pink</option>
                            <option value="#f24e87">Flamingo</option>
                            <option value="#d26483">Dragon Fruit</option>
                            <option value="#bf5e6c">Candy</option>
                            <option value="#ced4cc">Silver Maple</option>
                            <option value="#7e8f8f">Greyed Teal</option>
                            <option value="#ffffff">White</option>
                            <option value="#f1e8d9">Linen</option>
                            <option value="#fcead6">Cream</option>
                            <option value="#afa299">Stone</option>
                            <option value="#c8b8ae">Light Tan</option>
                            <option value="#9c8272">Medium Brown</option>
                            <option value="#655b52">Deep Brown</option>
                            <option value="#bfc5c5">Light Grey</option>
                            <option value="#91908c">Medium Grey</option>
                            <option value="#6f6f6f">Iron</option>
                            <option value="#000000">Black</option>
                            <option value="#e3c5c2">Pink Champagne</option>
                            <option value="#e3c5c2">Gold</option>
                            <option value="#dea080">Copper</option>
                            <option value="#d0d0d0">Silver</option>
                        </select>
                    </label>
                </div>
                <div className="InputGroup">
                    <label>
                        Background Color:
                        <select name="background color" onChange={this.updateRedux}>
                            <option selected value="#aa393f">Apple</option>
                            <option value="#823b41">Wine</option>
                            <option value="#c46862">Sunburn</option>
                            <option value="#eb8963">Moli</option>
                            <option value="#ee804a">Tangerine</option>
                            <option value="#cf4d34">Daring</option>
                            <option value="#ffc847">Daisy</option>
                            <option value="#fdd06c">Tulip</option>
                            <option value="#e4c390">Giraffe</option>
                            <option value="#d5994c">Mustard</option>
                            <option value="#936845">Caramel</option>
                            <option value="#75c169">Vivid</option>
                            <option value="#c2d774">Spring Green</option>
                            <option value="#93a363">Zesty</option>
                            <option value="#81895b">Pesto</option>
                            <option value="#535d44">G.I. Joe</option>
                            <option value="#7b9f77">Emerald Lake</option>
                            <option value="#027446">Greenbelt</option>
                            <option value="#478b4e">Plant</option>
                            <option value="#448776">Gater</option>
                            <option value="#435c56">Deep Forest</option>
                            <option value="#d1e0c1">Cucumber</option>
                            <option value="#adc9bb">Aloe</option>
                            <option value="#c0e6df">Tame Teal</option>
                            <option value="#b4deca">Mint</option>
                            <option value="#95dfd2">Bali Teal</option>
                            <option value="#5dcaba">Thai Teal</option>
                            <option value="#04a596">Tropical Sea</option>
                            <option value="#30b7b5">Caicos</option>
                            <option value="#80bbc9">Azure</option>
                            <option value="#c6d2d2">Winter</option>
                            <option value="#8cbad3">Baby Blue</option>
                            <option value="#78c8df">By the Sea</option>
                            <option value="#0e6697">Officer</option>
                            <option value="#037597">Mayan</option>
                            <option value="#02a5c5">Yucatan</option>
                            <option value="#0689c3">Clipper Ship</option>
                            <option value="#0c5462">Peacock</option>
                            <option value="#4f6f86">Navy</option>
                            <option value="#273248">Deep Navy</option>
                            <option value="#767a94">Soulful</option>
                            <option value="#4d426d">Ravens</option>
                            <option value="#d2c8d3">Enchant</option>
                            <option value="#c0c2d7">Violet</option>
                            <option value="#aca6a6">Taupe</option>
                            <option value="#d5a4b9">Mauve</option>
                            <option value="#bb88b0">Joy</option>
                            <option value="#7a6e7f">Owynn</option>
                            <option value="#754755">Plum</option>
                            <option value="#f4bb9d">Peach</option>
                            <option value="#e1967f">Sockeye</option>
                            <option value="#e3a8a4">Coral</option>
                            <option value="#eec3c0">Peachy Pink</option>
                            <option value="#e58283">Sugar Poppy</option>
                            <option value="#eba1c6">Bubblegum</option>
                            <option value="#efd2d3">Charming</option>
                            <option value="#f0b7b5">Old Flame</option>
                            <option value="#ea8ba3">Pinkety Pink</option>
                            <option value="#f24e87">Flamingo</option>
                            <option value="#d26483">Dragon Fruit</option>
                            <option value="#bf5e6c">Candy</option>
                            <option value="#ced4cc">Silver Maple</option>
                            <option value="#7e8f8f">Greyed Teal</option>
                            <option value="#ffffff">White</option>
                            <option value="#f1e8d9">Linen</option>
                            <option value="#fcead6">Cream</option>
                            <option value="#afa299">Stone</option>
                            <option value="#c8b8ae">Light Tan</option>
                            <option value="#9c8272">Medium Brown</option>
                            <option value="#655b52">Deep Brown</option>
                            <option value="#bfc5c5">Light Grey</option>
                            <option value="#91908c">Medium Grey</option>
                            <option value="#6f6f6f">Iron</option>
                            <option value="#000000">Black</option>
                            <option value="#e3c5c2">Pink Champagne</option>
                            <option value="#e3c5c2">Gold</option>
                            <option value="#dea080">Copper</option>
                            <option value="#d0d0d0">Silver</option>
                        </select>
                    </label>

                    <label>
                        Comments:
                        <input type="text" name="comments" onChange={this.updateRedux} />
                    </label>
                    <br />
                    <button onClick={()=>this.props.history.push("/CustomerInfo")}>Finish Order and Submit Info</button>
                </div>
                </div>
            </div>
        )
    }

}

export default connect(state => state, Actions)(Order);