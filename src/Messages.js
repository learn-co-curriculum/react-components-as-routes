import React from 'react';

class Messages extends React.Component {
    render() {
        return (
            <div>
              <form>
                <div>
                  <input type="text" name="message" placeholder="Message" />
                  <label htmlFor="message">Send a message:</label>
                </div>
                <input type="submit" value="Login" />
              </form>
            </div>
          )
    }
}

export default Messages;