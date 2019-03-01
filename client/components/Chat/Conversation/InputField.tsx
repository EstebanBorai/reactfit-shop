import * as React from 'react';

const InputField = () => (
  <div className="input-field">
    <form action="">
      <input type="text" name="message-input" placeholder="Say something..." />
      <button type="submit">
        Send
      </button>
    </form>
  </div>
);

export default InputField;
