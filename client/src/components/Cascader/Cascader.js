import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
import {Collapsible,CollapsibleItem, Icon} from 'react-materialize'
import { Link } from "react-router-dom";
import { Collapse } from 'antd';
import 'antd/dist/antd.css'// const Panel = Collapse.Panel;
import { Casc } from 'antd';
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];



class Cascader extends React.Component {
  state={
  }
onChange = event => {
  console.log(value);
}



render(props) {
return(
  <div>

  <Cascader size="large" options={options} onChange={onChange}/>
  </div>

)}}

export default Cascader;
