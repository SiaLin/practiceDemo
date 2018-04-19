import React,{Component} from 'react';  //{Component} es6解构语法

class ListPage extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <ul>
            <li>列表01</li>
            <li>列表02</li>
            <li>列表03</li>
            <li>列表04</li>
            <li>列表05</li>
        </ul>
      </div>
    )
  }
}

export default ListPage;
