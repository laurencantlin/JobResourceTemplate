import React from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css'// const Panel = Collapse.Panel;
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// const FormItem = Form.Item;


class Template extends React.Component {
    state={

    }
    rendertext=()=>{
        var temp = this.props.template;
        switch (temp) {
            case "Cover Letter":
            return(
                <div>

              <p>{this.props.date}</p>
              <p>{this.props.Companyname}<br/>
              {this.props.CoAddr1}<br/>
              {this.props.CoAddr2}</p>
              <p>Dear Hiring Manager:</p>               
              <p>My name is  {this.props.firstname} {this.props.lastname} – I am a web developer and experienced software test lead. I am writing to express my interest in the open {this.props.Position} with {this.props.Companyname} </p>               
              <p>I think I could be a great fit for the Front-End Web Developer role described in your job posting. I am proficient in HTML, CSS, Javascript, jQuery, MySQL, Node.js, Git, Github and many other technologies. Additionally, I have considerable UX/UI design experience and am competent in Adobe PS, AI, and other design tools.  I also have excellent attention to detail, verbal and written communication skills, and a ready-to-learn attitude. </p>               
              <p>Building clean, quality software products with user-centered designs is truly a passion of mine. I actively seek out new technologies and stay up-to- date on industry trends and advancements.</p>        <p> I’ve attached a copy of my resume that details my relevant experience. Please also feel free to visit my portfolio website, laurencantlin.com, which includes links to the various websites and applications I’ve had the honor of working on. I can be reached anytime via my cell phone, (443) 465-6658, or via email at laurencantlin2018@u.northwestern.edu.</p>
              <p>Thank you for your time and consideration. I look forward to speaking with you about this opportunity.</p>               
              <p>Best,</p>               
              <p>{this.props.firstname} {this.props.lastname}</p>
          </div>)
                break;
            case "Status of Job Application":
                return <div><p>Dear Hiring Manager,</p>
                <p>Hello, my name is {this.props.firstname} {this.props.lastname}. I hope this email finds you doing well. I submitted my resume and cover letter for the {this.props.Position} position via {this.props.appMethod} on {this.props.DateApplied}.</p>
                <p>I just wanted to touch base to inquire about the status of my application and the open position. I’m very interested in speaking in person to discuss my qualifications for the role.</p>
                <p>Thank you in advance for your consideration. </p>
                <p>  Sincerely,<br/>
                {this.props.firstname} {this.props.lastname}
            </p>
            </div>
                        break;
            default:
        }
        // this.renderStatusInquiryEmail()
    }
    renderStatusInquiryEmail=()=>{
        
    }

    render() {
        return(
            <div>
            {/* {this.props.firstname},
            {this.props.lastname},
            {this.props.position},
            {this.props.companyname},
            {this.props.CoAddr1},
            {this.props.CoAddr2},
            {this.props.firstname}, */}
            {this.rendertext()}
            </div>
        )
}}
export default Template 