
import {Component} from 'react'

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors:['red', 'green', 'blue','#ccc']
    }
  }
  changecolor(color){
      this.props.getcolor(color);
  }
  newColor(color){
    return {
      backgroundColor: color
    };
  }
  render() {
    var colors = this.state.colors.map((color,index) =>{
          return <span 
          key={index} 
          style={this.newColor(color)} 
          className={this.props.color === color ? "item_color active":"item_color"}
          onClick={() =>this.changecolor(color)}
          >                      
          </span>
    })
      return (
      <div className="ColorPicker_warp">
        <div className="header_ColorPicker">
            Color Picker
        </div>
        <div className="content_ColorPicker">
          {colors}
        </div>
    </div>
      )
  }
    
}

export default ColorPicker;
