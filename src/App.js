import React from 'react';
import './App.css';

import Contact from './Contact'

import contacts from './contacts.json'

class App extends React.Component {

  state = {
    myContacts: contacts.slice(0, 5),

    newContactName: "",
    newContactPopularity: 5
  }

  // // class properties // ES10
  // addContactHandler = () => {

  //   let remainingContacts = contacts.slice(5)

  //   let pos = Math.floor(Math.random() * remainingContacts.length)
  //   let randomEl = remainingContacts[pos]

  //   // DON'T MODIFY ORIGINAL STATE !
  //   // this.state.myContacts.push(randomEl)    

  //   // let copy = [...this.state.myContacts]
  //   // copy.push(randomEl)

  //   this.setState({
  //     myContacts: [...this.state.myContacts, randomEl]
  //   })
  // }

  changeNameHandler = (event) => {
    //console.log(event)
    //console.log(event.currentTarget)
    this.setState({
      newContactName: event.currentTarget.value
    })
  }

  changePopularityHandler = (event) => {
    this.setState({
      newContactPopularity: event.currentTarget.value
    })
  }

  addNewContactHandler = () => {

    let newContact = {
      name: this.state.newContactName,
      popularity: this.state.newContactPopularity
    }

    this.setState({
      myContacts: [...this.state.myContacts, newContact],

      newContactName: "",
      newContactPopularity: 5
    })

  }

  render() {

    // let firstFive = contacts.slice(0, 5)

    return (
      <div className="App" >
        {/* <button onClick={this.addContactHandler}>Add Random Contact</button> */}

        <br></br>

        <input onChange={this.changeNameHandler} value={this.state.newContactName} type="text"></input>
        <input onChange={this.changePopularityHandler} value={this.state.newContactPopularity} type="number"></input>
        <button onClick={this.addNewContactHandler} > Add Contact </button>

        {this.state.myContacts.map((contact) => {

          return <Contact name={contact.name} picture={contact.pictureUrl}></Contact>

        })}

      </div>
    );
  }

}

export default App;