import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import './ContactForm.css'

const INITIAL_STATE = {
  name: '',
  number: ''
};

class ContactForm extends Component { 
   state = { ...INITIAL_STATE };   
    
    onInputChange = (e) => {    
    const { name, value } = e.currentTarget;    
  
      this.setState({ [name]: value });
    }
  
    onFormSubmit = (e) => {
      e.preventDefault();
    
      const name = e.currentTarget.name.value;
      const number = e.currentTarget.number.value;
      const contact = { id: nanoid(), name, number };
      
      this.props.submitHandler(contact);    
    
      this.reset();
  };
  
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  
  render() { 
    const { name, number } = this.state;
    
    return (
      <form className="Form" onSubmit={this.onFormSubmit}>
        <label className="Form-label">         
          Name          
          <input
            className="Form-input"  
            type="text"            
            name="name"            
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Rosie Simpson"
            required            
            value={name}            
            onChange={this.onInputChange}            
          />          
        </label>    
            
        <label className="Form-label" >            
          Number
          <input
            className="Form-input" 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="777-777-77-77"
            required
            value={number}
            onChange={this.onInputChange}
          />
        </label>
            
        <br />
          
        <button type="submit" className="Form-btn">Add contact</button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  submitHandler: PropTypes.func.isRequired
};

export default ContactForm;