import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component{
    constructor(props){
        super(props)
        this.state = {
            imageList: []
        }
    }

    render(){
        return(
            <div className="GalleryMain">
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/16Floral.jpg' alt='16" FLoral'/>
                {/* <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/16MountainRound2.jpg' alt='16" Mountain Round'/> */}
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/16WoodlandTrees.jpg' alt='16" Woodland Trees'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20DecorativeRound.jpg' alt='20" Decorative Round'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20FamilyEstArrowDetail.jpg' alt='20" Family Est Sign'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20Floral.jpg' alt='20" FLoral'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20FloralAntlers.jpg' alt='20" FLoral Antlers'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20MoonandStars.jpg' alt='20" Moon and Stars'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20OceanThemed.jpg' alt='20" Ocean Themed'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20PlainTrainTractor.jpg' alt='20" Plain Tractor'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20TribalTeepee.jpg' alt='20" Tribal Teepee'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/20WoodlandTrees.jpg' alt='20" Woodland Trees'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/24BohoLlama.jpg' alt='24" Boho Llama'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/24DecorativeRoundHerringboneOrBrick.jpg' alt='24" Decorative Round'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/24Mountain.jpg' alt='24" Mountain'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/24RainbowRound.jpg' alt='24" Rainbow Round'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/24RusticMountainSign.jpg' alt='24" Rustic Mountain'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/24SportsBallRound.jpg' alt='24" Sports Ball'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/24Unicorn.jpg' alt='24" Unicorn'/>
                <img src='https://creating-happiness-gallery.s3-us-west-2.amazonaws.com/34JumboMountain.jpg' alt='34" Jumbo Mountain'/>
            </div>
        )
    }

}

export default Gallery;