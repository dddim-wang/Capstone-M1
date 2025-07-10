import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Kitty Diary 夜猫日记</h2>
      <form>
        <label>Name:</label><br />
        <input type="text" /><br />
        <label>Email:</label><br />
        <input type="email" /><br />
        <label>Message:</label><br />
        <textarea></textarea><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
