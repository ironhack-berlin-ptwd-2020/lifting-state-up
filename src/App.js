import React from 'react';
import './App.css';

import Contact from './Contact'

import contacts from './contacts.json'
import SearchBar from './SearchBar';

class App extends React.Component {

  state = {
    myContacts: contacts.slice(0, 5),

    newContactName: "",
    newContactPopularity: 5,

    formShown: false,

    searchTerm: ""
  }

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
      newContactPopularity: 5,

      formShown: false
    })

  }

  showFormHandler = () => {
    this.setState({
      formShown: true
    })
  }


  changeSearchHandler = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm
    })
  }


  render() {

    // let firstFive = contacts.slice(0, 5)

    let filteredContacts = this.state.myContacts.filter(c => c.name.includes(this.state.searchTerm))

    return (
      <div className="App" >
        {/* <button onClick={this.addContactHandler}>Add Random Contact</button> */}

        <br></br>

        {this.state.formShown ?
          <div>
            <input onChange={this.changeNameHandler} value={this.state.newContactName} type="text"></input>
            <input onChange={this.changePopularityHandler} value={this.state.newContactPopularity} type="number"></input>
            <button onClick={this.addNewContactHandler} > Add Contact </button>
          </div> : <button onClick={this.showFormHandler}>Add New Contact</button>
        }

        <br />

        {/* controlled component */}
        <SearchBar searchChange={this.changeSearchHandler} searchTerm={this.state.searchTerm}></SearchBar>

        {filteredContacts.map((contact) => {

          return <Contact name={contact.name} picture={contact.pictureUrl}></Contact>

        })}

      </div>
    );
  }

}

export default App;