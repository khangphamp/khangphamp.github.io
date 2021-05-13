
import {Component} from 'react'

class sizeSetting extends Component {
  sizeUp(){
    if(this.props.fontsize <32){
      this.props.getsize(this.props.fontsize+2);
    }
   
  }
sizeDown(){
  if(this.props.fontsize>8)
  this.props.getsize(this.props.fontsize-2);
}
  render() {
      return (
    <div className="SizeSetting_warp">
      <div className="header_SizeSetting">
            size :{this.props.fontsize}
        </div>
        <div className="content_SizeSetting">
            <button onClick={()=>this.sizeDown()} className="btn">Giảm</button>
            <button onClick={()=>this.sizeUp()} className="btn">Tăng</button>
        </div>
    </div>
      )
  }
    
}

export default sizeSetting;
