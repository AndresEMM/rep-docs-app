import React, {Component} from 'react';
import ImgDownload from './ImgDownload'
import ImgLink from './ImgLink'
import Media from './Media'
import NetworksBan from './NetworksBan'

class Home extends Component {
    constructor() {
        super();
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

  render(){
    return (
        <>
        <img src={"https://via.placeholder.com/"+this.state.width+"x450"} className="imgBanner" />
        <ImgDownload/>
        <Media/>
        <ImgLink/>
        <NetworksBan/>
        </>
    );
  }
}

export default Home;
