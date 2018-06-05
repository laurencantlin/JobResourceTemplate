import React from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css'// const Panel = Collapse.Panel;
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class Formpanel extends React.Component {
  state={
    formfield:"hi"
  }

  handleSubmit(){
  }

  handleFN= (event) => {
    event.preventDefault();
    this.setState({firstname: event.target.value})
  }
  handleLN= (event) => {
    event.preventDefault();
    this.setState({lastname: event.target.value})
  }
  handleCoName= (event) => {
    event.preventDefault();
    this.setState({Companyname: event.target.value})
  }
  handleCoAddr1= (event) => {
    event.preventDefault();
    this.setState({CoAddr1: event.target.value})
  }
  handleCoAddr2= (event) => {
    event.preventDefault();
    this.setState({CoAddr2: event.target.value})
  }
  handlePosition= (event) => {
    event.preventDefault();
    this.setState({Position: event.target.value})
  }

  render(props) {
    return (
      <div>
        <Form layout="inline">
          <FormItem>
            <Input placeholder="First Name" onChange={this.handleFN}/>
            <Input placeholder="Last Name" onChange={this.handleLN}/>
            <Input placeholder="Company Name" onChange={this.handleCoName}/>
            <Input placeholder="Company Addr 1" onChange={this.handleCoAddr1}/>
            <Input placeholder="Company Addr 2" onChange={this.handleCoAddr2}/>
            <Input placeholder="Position Title" onChange={this.handlePosition}/>
            <Button>save</Button>

          </FormItem>
        </Form>
        
      </div>

    )
  }
}

export default Formpanel;
