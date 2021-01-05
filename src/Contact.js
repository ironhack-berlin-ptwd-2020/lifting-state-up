import React from 'react';


// since we don't use state --> should be function component
class Contact extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img width="200px" src={this.props.picture}></img>
      </div>
    )
  }

}

export default Contact;