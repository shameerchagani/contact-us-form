import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();

   axios
  .post('/send', { ...state })
  .then(response => {
    setResult(response.data);
    setState({ name: '', email: '', subject: '', message: '' });
  })
  .catch(() => {
    setResult({ success: false, message: 'Something went wrong. Try again later'});
});
    // code to trigger Sending email
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div>
        
        {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
            </p>
        )}

      <form style={{marginTop: '30px', padding: '20px', background: 'rgba(0,0,0,0.3)', boxShadow:'0 0 15px #fff', borderRadius:'6px'}} onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            autoComplete="off"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            autoComplete="off"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            autoComplete="off"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button className='w-100 p-2' variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;