import React from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css'// const Panel = Collapse.Panel;
import { Input } from 'antd';


class Inputbox extends React.Component {
  state={
  }
// onChange = event => {
//   // console.log(value);
// }



render(props) {
return(
  <div>

<Input placeholder={this.props.children}  /> </div>

)}}

export default Inputbox;
