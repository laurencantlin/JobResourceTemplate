import React, {Component} from "react";
import Inputbox from "../../components/Input"
import Template from "../../components/Template"
// import Dropdown from "../../components/Dropdown"
import Formpanel from "../../components/Form"
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import { Menu, Dropdown } from 'antd';
const SubMenu = Menu.SubMenu;



const FormItem = Form.Item;

class Home extends Component {
    state={
        template:"Cover Letter",
        firstname: "Lauren",
        lastname: "Cantlin",
        Companyname: "BrainTree",
        CoAddr1: "addr1",
        CoAddr2: "addr2",
        Position: "Web Developer"

      }
    componentDidMount(){
        this.setDate();
    }
      handleSubmit(e){
        e.preventDefault();

            console.log("submit", this)
      }
      handleTemplate= (e) => {
        // e.preventDefault();
        this.setState({template:e.item.props.children })
            console.log("submit", e.item.props.children)
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
      handleDateApplied= (event) => {
        event.preventDefault();
        this.setState({DateApplied: event.target.value})
      }
      handleMethod= (event) => {
        event.preventDefault();
        this.setState({appMethod: event.target.value})
      }
      setDate=()=>{
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var d=new Date;
        var month=months[d.getMonth()]
        var year=d.getFullYear();
        var date=d.getDate();
        this.setState({date:`${month} ${date}, ${year}`}) 
        }
      handleDrop=(event)=>{
          this.preventDefault();
          console.log("handledrop")
          this.setState({template: event.target.value})
      }

    render() {
        return ( 
        <div className="container"> 
            home
            {/* <Dropdown onChange={this.handleDrop}></Dropdown> <br/> */}
            <div className="columns">
            <div className="column is-2">
                <Dropdown overlay={<Menu>
                    <Menu.Item onClick={this.handleTemplate}>Cover Letter</Menu.Item>
                    {/* <Menu.Item onClick={this.handleTemplate}>2nd menu item</Menu.Item> */}
                    <SubMenu title="Pre-Interview">
                        <Menu.Item onClick={this.handleTemplate}>Status of Job Application</Menu.Item>
                        <Menu.Item onClick={this.handleTemplate}>Networking/Information Interview Request</Menu.Item>
                    </SubMenu>
                    <SubMenu title="Post-Interview" >
                        <Menu.Item onClick={this.handleTemplate}>5d menu item</Menu.Item>
                        <Menu.Item onClick={this.handleTemplate}>6th menu item</Menu.Item>
                    </SubMenu>
                </Menu>}>
                    <a className="ant-dropdown-link" href="#">
                    Select Template <Icon type="down" />
                    </a>
                </Dropdown>
                </div>
                <div className="column is-3">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem >
                        <Input placeholder="First Name" onChange={this.handleFN}/>
                        <Input placeholder="Last Name" onChange={this.handleLN}/>
                        <Input placeholder="Company Name" onChange={this.handleCoName}/>
                        <Input placeholder="Company Addr 1" onChange={this.handleCoAddr1}/>
                        <Input placeholder="Company Addr 2" onChange={this.handleCoAddr2}/>
                        <Input placeholder="Position Title" onChange={this.handlePosition}/>
                        <Input placeholder="Date Applied" onChange={this.handleDateApplied}/>
                        <Input placeholder="Applied Via (method)" onChange={this.handleMethod}/>
                        <Button htmlType="submit">save</Button>
                    </FormItem>
                </Form> 
        
          
                    <br/>
                </div>
                <div className="column ">  <Template date={this.state.date} firstname={this.state.firstname} lastname={this.state.lastname} Companyname={this.state.Companyname} Position={this.state.Position}
           CoAddr1={this.state.CoAddr1} CoAddr2={this.state.CoAddr2}
           template={this.state.template} DateApplied={this.state.DateApplied} appMethod={this.state.appMethod}></Template>
                </div>
            </div>
         
        </div>
        )
    }
}
export default Home;