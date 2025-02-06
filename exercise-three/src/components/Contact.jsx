import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>BK Contact Page</h1>
      <p>This is the BK's Contact Page!</p>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default Contact;
