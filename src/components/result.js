
import {Component} from 'react'

class Result extends Component {
  constructor(props){
    super(props);
    this.change=this.change.bind(this);
  }
  change(){
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontsize
    };
  }

  render() {
  const listColor=["red",'blue','yellow','green']
  // const colors=listColor.map(color =>{
  //   return  
  // })
      return (
      <div>
        <p>color:{this.props.color} fontsize:{this.props.fontsize}</p>
      <div style={this.change()} className="Result_warp">
        nội dung setting
    </div>
      </div>
      )
  }
    
}

export default Result;
