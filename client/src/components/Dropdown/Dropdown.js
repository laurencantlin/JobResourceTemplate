import React from "react";
import {  Row,  Col,  Input,  CardPanel} from "react-materialize";
import {  Collapsible,  CollapsibleItem,  Icon} from 'react-materialize'
import {Link} from "react-router-dom";
import {  Collapse} from 'antd';
import 'antd/dist/antd.css' // const Panel = Collapse.Panel;
import {  Cascader} from 'antd';
const options = [{
    value: 'correspondence',
    label: 'Correspondence',
    children: [{
      value: 'preinterview',
      label: 'Pre-Interview',
      children: [{
        value: 'statusofapplication',
        label: 'Status of Job Application',
      }],
    }, {
      value: 'postinterview',
      label: 'Post-Interview',
      children: [{

      }]
    }],
  },

  {
    value: 'coverletter',
    label: 'Cover Letter',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }
];



class Dropdown extends React.Component {
  state = {}
  // onChange = event => {
  //   // console.log(value);
  // }



  render(props) {
    return ( <div>
      < Cascader size = "large"
      options = {options}
      /> </div>

    )
  }
}

export default Dropdown;