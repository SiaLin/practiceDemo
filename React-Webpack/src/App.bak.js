import React,{Component} from 'react';  //{Component} es6解构语法

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    }
  }
  onInputChange(event) {
    console.log(event.target.value);
    var value = event.target.value;
    this.setState({
      inputValue: value
    });
  }
  render() {
      return(
        <div>
           <input type="text" onChange={this.onInputChange.bind(this)}/>

          <p>当前正在输入的内容：{this.state.inputValue}</p>
        </div>
      )
  }
}

export default App;     //将这个类导出去


//   <input type="text" onChange={e => this.onInputChange(e)}/>   同样的效果
// this进行绑定（没有绑定的话 会丢失）  代表类本身  apply,call,bind===>改变上下文
