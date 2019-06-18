import React, { Component } from 'react';
import './Order.css';

class Order extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: "#aa393f",
            mainText: 'Sonya',
            secText: 'Estrid'
        }
    }

    updateColor = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="sign" style={{backgroundColor: this.state.backgroundColor}}>
                    <h2>{this.state.mainText}</h2>
                    <h4>{this.state.secText}</h4>
                </div>

                <div className="inputs">
                    <label>
                        Background Color:
                        <select name="backgroundColor" onChange={this.updateColor}>
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
                            <option value="#eec3c0">Peachy Punk</option>
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
            </div>
        )
    }

}

export default Order;