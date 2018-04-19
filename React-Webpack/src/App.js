import React,{Component} from 'react';  //{Component} es6解构语法
import { BrowserRouter as Router,Route,BrowserRouter,Link} from 'react-router-dom';
// import { HashRouter as Router,Route,Link} from 'react-router-dom';
import AboutPage from './routes/AboutPage';
import ListPage from './routes/ListPage';


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
        <BrowserRouter>
            <div>
            <p>Hello,React</p>
              <ul>
                  <li><Link to="/about">关于</Link></li>
                  <li><Link to="/list">列表页</Link></li>
              </ul>
              <Route path="/about" component={AboutPage}/>
              <Route path="/list" component={ListPage}/>
            </div>
        </BrowserRouter>
      )
  }
}

export default App;     //将这个类导出去


//   <input type="text" onChange={e => this.onInputChange(e)}/>   同样的效果
// this进行绑定（没有绑定的话 会丢失）  代表类本身  apply,call,bind===>改变上下文
//react  将页面的跳转封装成link组件
// route定义path，  后端定义路由一般  Link == <a>
//页面刷新报错404    thinktxt ==> react-router browserhistory
//HashRouter
