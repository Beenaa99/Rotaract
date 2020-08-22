import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.scss';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'beenaa',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_uiiEf1kd',
       templateParams,
      'user_v5is5WAePIJLijis8VDqA'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        <div className="formBody">
          <h2 className="p-heading1 text-center ">Get in Touch</h2>
          <br/>
          <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formBasicName">
              
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
            <Label className="text-muted">Email ID</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>

<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <div className="text-center">
<Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
          </Form>
          <br/>
          </div>
      </>
    )
  }
}
export default ContactForm