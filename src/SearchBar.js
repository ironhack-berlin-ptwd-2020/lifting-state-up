import React from 'react';


let SearchBar = (props) => {

  let searchHandler = (event) => {
    // "lifting the state up"
    props.searchChange(event.currentTarget.value)
  }

  return (
    <input type="text" name="" id="" placeholder="Search ..." onChange={searchHandler} value={props.searchTerm} />
  )

}

export default SearchBar;