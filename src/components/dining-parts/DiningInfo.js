import React, { Component } from 'react';
import axios from 'axios';
import { FormErrors } from '../FormErrors';
import SuccessField from '../SuccessField';
import ErrorField from '../ErrorField';
import { thisTypeAnnotation } from '@babel/types';

export default class DiningInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            formErrors: { email: '', name: '' },
            nameValid: false,
            emailValid: false,
            formValid: false,
            isLoading: false,
            successField: false,
            errorField: false,
            mailSent: false
        }
    }

    
    
    
    Form = () => {
        document.getElementById('contact-form').reset();
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });  
    }

    handleMessageInput = (e) => {
        const message = e.target.message;
        const value = e.target.value;
        this.setState({message: value})
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' please provide a correct';
                break;
            
            case 'name': 
                nameValid = value.length > 0;
                fieldValidationErrors.name = nameValid ? '' : ' please fill in your';
                break;
                default:
                break;
        }
        this.setState({ formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        nameValid: nameValid }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.nameValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
            
        this.setState({isLoading: true})

            axios({
                method: "POST",
                /*url: "http://localhost:3002/send",*/
                data: {
                    name: name,
                    email: email,
                    message: message
                }
            }).then((response) => {
                if(response.data.msg === 'success') {
                    // success result: take away the alert and make a separate div that shows the message next to the 
                    // send button. same for the failed result.
                    this.setState({isLoading: false})
                    this.setState({successField: !this.state.successField})
                    this.resetForm();
                } else if(response.data.msg === 'fail') {
                    this.setState({errorField: !this.state.errorField})
                }
            })
    }
    
    render() {
    console.log(this.props)
    const dine = this.props.theProps.location.pathname === '/diningroom' ? this.props.diningPage : this.props.contactPage;

    if(dine === this.props.diningPage) {
    return (
        <div>
        {dine.map(page => (
        <section key={page.id} id="hero-area-dining" style={{
                background: `url(${page.hero}) no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `center`
        }}>
                    <div className="container">
                        <div className="inner-div">
                            
                        </div>
                    </div>
            </section>
        ))}
        </div>
    ) 
    } else {
        return (
            <div>
                {dine.map(page => (
                    <div key={page.id}>
                    <section key={page.id} id="hero-area-dining" style={{
                    background: `url(${page.header}) no-repeat`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}>
                        <div className="container">
                            <div className="inner-div">
                                
                            </div>
                        </div>
                    </section>
        
        <section className="dining-info">
            <div className="row to-background set-col-height">
            <div className="col-7 dining-info-leftcol">
                <div className="--inner">
                    <h1>{page.diningDescription}</h1>
                    <p>{page.content}</p>
                </div>
            </div>

             
            <div className="col-5 right-bg null-marge" style={{
                 background: `url(${page.contactBg}) no-repeat`,
                 backgroundPosition: `center`
            }}>
                <div className="inner-box reserve-wrap">
                    <div className="reserve-title">
                        <h1>{page.contactTitle}</h1>
                    </div>

                    <div className="contact-fwrap">
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        { 
                                this.state.successField ? (<SuccessField />)
                                : this.state.errorField ? (<ErrorField />) : ''
                        }

                        <form method="POST" name="contact" data-netlify-recaptcha="true" className="contact-form" id="contact-form" data-netlify="true">
                            
                            <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name" 
                                id="name" 
                                placeholder="Your name..." 
                                value={this.state.name}
                                onChange={this.handleUserInput}                               
                                />
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                className="form-control"
                                aria-describedby="emailHelp"
                                name="email" 
                                id="email" 
                                placeholder="Your email..." 
                                value={this.state.email}
                                onChange={this.handleUserInput}
                                />
                            </div>
                            <label>Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                placeholder="Your message..."
                                onChange={this.handleMessageInput}
                                value={this.state.message}
                                ></textarea>

                            <div data-netlify-recaptcha="true"></div>

                            <button type="submit" disabled={!this.state.formValid} className="btn btn-primary"></button>
                            
                        </form>
                    </div>
                    

                </div>
            </div>
        </div>
            </section>
            </div>
            ))}
            </div>
            
        
      )
    }
  }
}
