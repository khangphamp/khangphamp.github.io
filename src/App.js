
import {Component} from 'react'
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/sizeSetting';
import Reset from './components/reset';
import Result from './components/result';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color:'green',
      fontsize:14
    }
    this.getcolor=this.getcolor.bind(this);
    this.getsize=this.getsize.bind(this);
    this.resetall=this.resetall.bind(this);
  }
  getcolor(color) {
    this.setState({color:color})
  }
  getsize(size) {
    this.setState({fontsize:size})
  }
  resetall(){
    this.setState({color:'red',fontsize:14}) 
  }
  render() {
      return (
        <div className="grid wide">
        <div className="app row">      
          <ColorPicker color={this.state.color} getcolor={this.getcolor}/>
          <div>
          <SizeSetting fontsize={this.state.fontsize} getsize={this.getsize}/>
          <Reset resetall={this.resetall}/>
          </div>
         
        </div>
        <Result color={this.state.color} fontsize={this.state.fontsize}/>
        </div>
      )
  }
    
}

export default App;
