
import {Component} from 'react'

class reset extends Component {
  reset(){
    this.props.resetall();
  }
  render() {
  const listColor=["red",'blue','yellow','green']
  // const colors=listColor.map(color =>{
  //   return  
  // })
      return (  
        <button onClick={()=>this.reset()} className="btn">Reset</button>
      )
  }
    
}

export default reset;
